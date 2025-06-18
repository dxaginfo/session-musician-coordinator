const jwt = require('jsonwebtoken');

module.exports = (io) => {
  // Middleware for authentication
  io.use((socket, next) => {
    const token = socket.handshake.auth.token;
    if (!token) {
      return next(new Error('Authentication error'));
    }

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      socket.user = decoded;
      next();
    } catch (error) {
      return next(new Error('Authentication error'));
    }
  });

  io.on('connection', (socket) => {
    console.log(`User connected: ${socket.user.id}`);
    
    // Join a personal room for direct messages
    socket.join(socket.user.id);
    
    // Handle direct messaging
    socket.on('send_message', async (data) => {
      const { recipientId, content } = data;
      
      // Emit to recipient if they're online
      io.to(recipientId).emit('receive_message', {
        senderId: socket.user.id,
        content,
        timestamp: new Date()
      });
    });
    
    // Join project rooms for collaboration
    socket.on('join_project', (projectId) => {
      socket.join(`project:${projectId}`);
      console.log(`${socket.user.id} joined project room: ${projectId}`);
    });
    
    // Leave project room
    socket.on('leave_project', (projectId) => {
      socket.leave(`project:${projectId}`);
      console.log(`${socket.user.id} left project room: ${projectId}`);
    });
    
    // Project updates
    socket.on('project_update', (data) => {
      const { projectId, updateType, content } = data;
      io.to(`project:${projectId}`).emit('project_updated', {
        updateType,
        content,
        userId: socket.user.id,
        timestamp: new Date()
      });
    });
    
    // Booking notifications
    socket.on('booking_update', (data) => {
      const { recipientId, bookingId, status } = data;
      io.to(recipientId).emit('booking_updated', {
        bookingId,
        status,
        timestamp: new Date()
      });
    });
    
    // Audio session collaboration
    socket.on('audio_comment', (data) => {
      const { projectId, fileId, timestamp, comment } = data;
      io.to(`project:${projectId}`).emit('new_audio_comment', {
        fileId,
        userId: socket.user.id,
        timestamp,
        comment,
        createdAt: new Date()
      });
    });
    
    // Handle disconnection
    socket.on('disconnect', () => {
      console.log(`User disconnected: ${socket.user.id}`);
    });
  });
};
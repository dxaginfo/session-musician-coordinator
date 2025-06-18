const { Model } = require('sequelize');
const bcrypt = require('bcryptjs');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.hasOne(models.Profile, { foreignKey: 'userId', as: 'profile' });
      User.hasMany(models.Project, { foreignKey: 'clientId', as: 'clientProjects' });
      User.hasMany(models.Booking, { foreignKey: 'musicianId', as: 'musicianBookings' });
      User.hasMany(models.Review, { foreignKey: 'reviewerId', as: 'givenReviews' });
      User.hasMany(models.Review, { foreignKey: 'revieweeId', as: 'receivedReviews' });
      User.hasMany(models.Message, { foreignKey: 'senderId', as: 'sentMessages' });
      User.hasMany(models.Message, { foreignKey: 'receiverId', as: 'receivedMessages' });
      User.hasMany(models.Notification, { foreignKey: 'userId', as: 'notifications' });
      User.hasMany(models.File, { foreignKey: 'uploadedBy', as: 'uploads' });
    }

    // Instance method to check password
    async validatePassword(password) {
      return await bcrypt.compare(password, this.passwordHash);
    }
  }

  User.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    passwordHash: {
      type: DataTypes.STRING,
      allowNull: false
    },
    userType: {
      type: DataTypes.ENUM('musician', 'client', 'admin'),
      allowNull: false
    },
    isVerified: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    authProvider: {
      type: DataTypes.STRING,
      allowNull: true
    },
    authProviderId: {
      type: DataTypes.STRING,
      allowNull: true
    },
    lastLogin: {
      type: DataTypes.DATE,
      allowNull: true
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    }
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'users',
    hooks: {
      beforeCreate: async (user) => {
        if (user.passwordHash) {
          user.passwordHash = await bcrypt.hash(user.passwordHash, 10);
        }
      },
      beforeUpdate: async (user) => {
        if (user.changed('passwordHash')) {
          user.passwordHash = await bcrypt.hash(user.passwordHash, 10);
        }
      }
    }
  });

  return User;
};
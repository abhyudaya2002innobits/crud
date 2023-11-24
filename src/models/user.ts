import { Model, DataTypes } from 'sequelize';
import databaseInstance from '../../src/database/dbconfig';


export interface UserAttributes {
  id: string;
  UserName: string;
  password: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
}

class Users extends Model<UserAttributes> {
    static email: any;
    password: any;
    id: any;
    static id: any;
    UserName: any;
}

Users.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
      unique: true,
    },
    UserName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false, // Enforce non-null constraint
    },
    email: {
      type: DataTypes.STRING,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    sequelize: databaseInstance,
    modelName: 'Users',
    tableName: 'Users',
    timestamps: true,
    paranoid: false,
  }
);

export default Users;

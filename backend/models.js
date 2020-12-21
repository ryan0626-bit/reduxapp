import dynamoose from "dynamoose"

const UserSchema = new dynamoose.Schema({
    email: {
        hashKey: true,
        required: true,
        type: String
    },
    age: {
        type: Number,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
});

export const UserModel = dynamoose.model("users-redux", UserSchema);
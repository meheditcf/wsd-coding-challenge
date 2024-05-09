// User service for user-related operations
const userService = {
    registerUser: (email) => {
        // Mock API call to register user
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({ email });
            }, 1000);
        });
    },
};

export default userService;

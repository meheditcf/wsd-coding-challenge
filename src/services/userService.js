// User service for user-related operations
const userService = {
    registerUser: (email) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({email});
            }, 200);
        });
    },
};

export default userService;

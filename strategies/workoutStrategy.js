class baseWorkoutStrategy {
    async execute() {
        throw new Error('execute() must be implemented');
    };
};

class searchWorkoutStrategy extends baseWorkoutStrategy {
    
}
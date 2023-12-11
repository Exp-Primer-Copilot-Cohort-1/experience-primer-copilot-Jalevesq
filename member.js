function skillsMember() {
    return {
        name: 'John Doe',
        age: 23,
        skills: ['HTML', 'CSS', 'JS'],
        salary: 1000,
        getSalary() {
            return this.salary;
        },
        setSalary(value) {
            this.salary = value;
        }
    }
}
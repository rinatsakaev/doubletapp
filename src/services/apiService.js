export default class ApiService {
    static apiBase = '127.0.0.1:9090';
    static fetchUsers = async () => await fetch(`${this.apiBase}/users`);
    static fetchUserById = async (id) => await fetch(`${this.apiBase}/users/${id}`);
    static deleteUser = async (id) => await fetch(`${this.apiBase}/users/${id}`, {method: 'DELETE'});
    static createUser = async (user) => await fetch(`${this.apiBase}/users/`, {
        method: 'POST',
        body: JSON.stringify(user)
    });
}

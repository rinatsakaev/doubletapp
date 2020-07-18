export default class ApiService {
    static apiBase = 'http://127.0.0.1:9090';
    static fetchUsers = async () => await fetch(`${this.apiBase}/users`);
    static fetchColors = async () => await fetch(`${this.apiBase}/colors`);
    static fetchGenders = async () => await fetch(`${this.apiBase}/genders`);
    static fetchSpecialities = async () => await fetch(`${this.apiBase}/specialities`);
    static fetchUserById = async (id) => await fetch(`${this.apiBase}/users/${id}`);
    static deleteUser = async (id) => await fetch(`${this.apiBase}/users/${id}`, {method: 'DELETE'});
    static createUser = async (formData) => await fetch(`${this.apiBase}/users/`, {
        method: 'POST',
        body: formData
    });
}

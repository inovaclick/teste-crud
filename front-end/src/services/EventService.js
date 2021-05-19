export default {
  async getByName(userName) {
    const options = {
      method: "GET",
      headers: { "Content-Type": "application/json" }
    };
    if (userName) {
      try {
        const res = await fetch("http://localhost:5000/users?name=" + userName, options).
          then(res => res.json());
        if (res.message) {
          return null;
        }
        return res;
      } catch (error) {
        console.log(error);
      }
    }
    else {
      try {
        const res = await fetch("http://localhost:5000/users", options).
          then(res => res.json());
        if (res.message) {
          return null;
        }
        return res;
      } catch (error) {
        console.log(error);
      }
    }
  },

  async getById(userId) {
    const options = {
      method: "GET",
      headers: { "Content-Type": "application/json" }
    };
    try {
      const res = await fetch("http://localhost:5000/users/" + userId, options).
        then(res => res.json());
      if (res.message) {
        return null;
      }
      return [res];
    } catch (error) {
      console.log(error);
    }
  },

  async createUser(name, address, cpf, email) {
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        address,
        cpf,
        email
      })
    };
    try {
      const res = await fetch("http://localhost:5000/users", options).
        then(res => res.json());
        if (res.message) {
          return null;
        }
        return res;
    } catch (error) {
      console.log(error);
    }
  },

  async deleteUser(userId) {
    const options = {
      method: "DELETE",
      headers: { "Content-Type": "application/json" }
    };

    try {
      const res = await fetch("http://localhost:5000/users/" + userId, options).
        then(res => res.json());
        if(res.message !== 'User was successfully deleted!') {
          return null;
        }
        return res;
    } catch (error) {
      console.log(error);
    }
  },

  async updateUser(id, name, address, cpf, email) {
    const options = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        address,
        cpf,
        email
      })
    };
    try {
      const res = await fetch("http://localhost:5000/users/" + id, options).
        then(res => res.json());
      return res;
    } catch (error) {
      console.log(error);
    }
  }
}
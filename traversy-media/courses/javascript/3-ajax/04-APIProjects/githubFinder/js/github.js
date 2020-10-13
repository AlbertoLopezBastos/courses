class Github {
  constructor() {
    this.client_id = '5b84a091d93b53591769';
    this.client_secret = 'fca5a20abf07939d075f557bbf5828538a5f99af';
    this.repos_count = 5;
    this.repos_sort = 'created:asc';
  }

  //Get User
  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const repoResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`
    );
    const profile = await profileResponse.json();
    const repos = await repoResponse.json();

    return {
      profile,
      repos
    };
  }
}

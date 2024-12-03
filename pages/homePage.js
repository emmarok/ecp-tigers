class HomePage {
    constructor(page) {
      this.page = page;
  
      // Selectors
      this.searchInput = 'input[name="q"]';
      this.searchButton = 'button[type="submit"]';
    }
  
    async navigateTo(url) {
      await this.page.goto(url);
    }
  
    async searchFor(term) {
      await this.page.fill(this.searchInput, term);
      await this.page.click(this.searchButton);
    }
  
    async getTitle() {
      return await this.page.title();
    }
  }
  
  module.exports = HomePage;
  
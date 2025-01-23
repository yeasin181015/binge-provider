// src/sdk/BingeSDK.js
class BingeSDK {
  constructor({ baseUrl }) {
    this.baseUrl = baseUrl || "http://localhost:3000";
  }

  async getTrendingContent() {
    const response = await fetch(`${this.baseUrl}/trending`);
    return response.json();
  }

  getRedirectLink(contentId) {
    return `${this.baseUrl}/content/${contentId}`;
  }
}

export default BingeSDK;

// src/sdk/BingeSDK.js
class BingeSDK {
  constructor({ baseUrl }) {
    this.baseUrl = baseUrl || "http://localhost:3000";
  }

  async getTrendingContent() {
    try {
      const response = await fetch(`${this.baseUrl}/trending`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.text(); // Parse response as plain text (HTML)
    } catch (error) {
      console.error("Error fetching trending content:", error);
      throw error;
    }
  }

  getRedirectLink(contentId) {
    return `${this.baseUrl}/content/${contentId}`;
  }
}

export default BingeSDK;

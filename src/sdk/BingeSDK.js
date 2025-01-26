// src/sdk/BingeSDK.js
// src/sdk/BingeSDK.js
export class BingeSDK {
  async getTrendingContent() {
    // Mock API response
    const data = [
      { id: 1, title: 'Trending Item 1', description: 'This is a trending item' },
      { id: 2, title: 'Trending Item 2', description: 'This is another trending item' },
      { id: 3, title: 'Trending Item 3', description: 'This is yet another trending item' },
    ];

    
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return data;
  }
}

export function createTrendingComponent(sdk) {
  return () => {
    const data = sdk.getTrendingContent();
    return <Trending data={data} />;
  };
}
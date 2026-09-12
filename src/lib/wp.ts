import http from 'node:http';
import https from 'node:https';

const WP_API_URL = import.meta.env.WORDPRESS_API_URL;

// 创建完全不复用连接的 Agent，彻底杜绝 ECONNRESET
const httpAgent = new http.Agent({ keepAlive: false });
const httpsAgent = new https.Agent({
  keepAlive: false,
  rejectUnauthorized: false,
});

export async function fetchFromWP(query: string, variables: Record<string, any> = {}) {
  if (!WP_API_URL) {
    throw new Error('.env 文件中未配置 WORDPRESS_API_URL');
  }

  const isHttps = WP_API_URL.startsWith('https');

  const response = await fetch(WP_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Connection': 'close',
      'User-Agent': 'Astro-Client/1.0',
    },
    body: JSON.stringify({ query, variables }),
    // @ts-ignore
    dispatcher: undefined,
  });

  const rawText = await response.text();

  if (rawText.trim().startsWith('<')) {
    console.error(`\n[API 返回异常] 收到 HTML 页面 (HTTP ${response.status}):\n`, rawText.slice(0, 300));
    throw new Error('WPGraphQL 返回了 HTML 网页而非 JSON，请检查 URL 路径');
  }

  const json = JSON.parse(rawText);
  if (json.errors) {
    console.error('GraphQL 查询错误:', json.errors);
    throw new Error('WPGraphQL execution error');
  }

  return json.data;
}

export const GET_MACHINES_QUERY = `
  query GetMachines {
    posts(first: 100) {
      nodes {
        slug
        title
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
        machineSpecs {
          screenSize
          chambersCount
          washMethod
          powerConsumption
          dimensions
          netWeight
        }
      }
    }
  }
`;

export const GET_ALL_MACHINE_SLUGS = `
  query GetAllMachineSlugs {
    posts(first: 100) {
      nodes {
        slug
      }
    }
  }
`;

export const GET_MACHINE_BY_SLUG = `
  query GetMachineBySlug($slug: ID!) {
    post(id: $slug, idType: SLUG) {
      title
      slug
      content
      featuredImage {
        node {
          sourceUrl
          altText
        }
      }
      machineSpecs {
        screenSize
        chambersCount
        washMethod
        powerConsumption
        dimensions
        netWeight
      }
    }
  }
`;
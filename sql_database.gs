// Load ElasticSearch client
const { Client } = require('@elastic/elasticsearch')
const client = new Client({ node: 'http://localhost:9200' })

// Index a document 
async function indexDocument(document) {

  // Extract content and metadata
  const {content, metadata} = extractDocumentInfo(document);

  // Construct document for indexing
  const doc = {
    content: content,
    metadata: metadata
  };

  // Index document
  await client.index({
    index: 'documents', 
    document: doc
  });

}

// Search documents
async function searchDocuments(query) {

  // Search with query
  const result = await client.search({
    index: 'documents',
    query: {
      match: {
        content: query  
      }
    }
  });

  // Return hits
  return result.hits.hits;

}

// Helper functions

function extractDocumentInfo(doc) {
  // Parse document to get content and metadata
}

// Load Google Cloud SQL client library
const {CloudSQL} = require('@google-cloud/sql-client');

// Create client 
const client = new CloudSQL({
  projectId: 'my-project',
  keyFilename: '/path/to/service-account.json' 
});

// Get connection to Cloud SQL instance
const connection = await client.connect(instanceName);

// Interact with SQL database
async function interactWithSQLDatabase(query) {

  // Run query
  const results = await connection.runQuery(query);

  // Process results
  const rows = results.rows;

  // Release connection  
  await connection.release();

  // Return results
  return rows;

}

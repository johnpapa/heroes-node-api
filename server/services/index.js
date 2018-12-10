const mongo = require('./mongo');
const cosmosSDK = require('./cosmos-sdk');

let useCosmosSDK = false;

if (process.env.DATA_OPTION === 'cloud_cosmos_sdk') {
  useCosmosSDK = true;
}

if (['cloud_cosmos', 'local_mongo'].includes(process.env.DATA_OPTION)) {
  const { connect } = require('./mongo/db');
  connect();
  useCosmosSDK = false;
}

module.exports = {
  heroService: useCosmosSDK ? cosmosSDK.heroService : mongo.heroService,
  villainService: useCosmosSDK
    ? cosmosSDK.villainService
    : mongo.villainService,
  settingsService: useCosmosSDK
    ? cosmosSDK.settingsService
    : mongo.settingsService
};

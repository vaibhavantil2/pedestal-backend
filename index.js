const Users = require('./controllers/User');
const UserExperiences = require('./controllers/UserExperience');
const UserConnections = require('./controllers/UserConnection');
const UserWorkspaces = require('./controllers/UserWorkspace');
const Interests = require('./controllers/Interest');

module.exports.InterestsAPI = Interests;
module.exports.UserExperiencesAPI = UserExperiences;
module.exports.UserConnectionsAPI = UserConnections;
module.exports.UsersAPI = Users;
module.exports.UserWorkspacesAPI = UserWorkspaces;

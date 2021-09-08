const InterestSchema = require('./schemas/Interest.js');
const mongoose = require('mongoose');
const UserConnectionSchema = require('./schemas/UserConnection.js');
const UserExperienceSchema = require('./schemas/UserExperience.js');
const UserSchema = require('./schemas/User.js');
const UserSocialMediaSchema = require('./schemas/UserSocialMedia.js');
const UserEducationSchema = require('./schemas/UserEducation.js');
const UserProjectSchema = require('./schemas/UserProject.js');
const WorkspaceSchema = require('./schemas/Workspace.js');
const AchievementsSchema = require('./schemas/Achievements.js');
const MentorshipSchema = require('./schemas/Mentorship.js');
const WorkspaceScheduleSchema = require('./schemas/WorkspaceSchedule');

module.exports = {
	Achievement: mongoose.model(
		'achievement',
		AchievementsSchema
	),
	Interest: mongoose.model(
		'interest',
		InterestSchema
	),
	User: mongoose.model('user', UserSchema),
	UserConnection: mongoose.model(
		'user_connection',
		UserConnectionSchema
	),
	UserExperience: mongoose.model(
		'user_experience',
		UserExperienceSchema
	),
	UserProject: mongoose.model(
		'user_project',
		UserProjectSchema
	),
	UserEducation: mongoose.model(
		'user_education',
		UserEducationSchema
	),
	UserSocialMedia: mongoose.model(
		'user_social_media',
		UserSocialMediaSchema
	),
	Workspace: mongoose.model(
		'workspace',
		WorkspaceSchema
	),
	Mentorship: mongoose.model(
		'mentorship',
		MentorshipSchema
	),
	WorkspaceSchedule: mongoose.model(
		'workspace_schedule',
		WorkspaceScheduleSchema
	),
};

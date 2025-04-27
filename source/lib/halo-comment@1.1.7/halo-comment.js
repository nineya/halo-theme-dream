/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 6587:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AdminApiClient = void 0;
const url_1 = __webpack_require__(6998);
const clients_1 = __webpack_require__(6904);
class AdminApiClient {
    constructor(client) {
        this.client = client.buildHttpClient();
        this._attachment = new clients_1.AttachmentClient(this.client);
        this._backup = new clients_1.BackupClient(this.client);
        this._category = new clients_1.CategoryClient(this.client);
        this._installation = new clients_1.InstallationClient(this.client);
        this._journalComment = new clients_1.JournalCommentClient(this.client);
        this._journal = new clients_1.JournalClient(this.client);
        this._link = new clients_1.LinkClient(this.client);
        this._log = new clients_1.LogClient(this.client);
        this._mail = new clients_1.MailClient(this.client);
        this._menu = new clients_1.MenuClient(this.client);
        this._migration = new clients_1.MigrationClient(this.client);
        this._option = new clients_1.OptionClient(this.client);
        this._photo = new clients_1.PhotoClient(this.client);
        this._postComment = new clients_1.PostCommentClient(this.client);
        this._post = new clients_1.PostClient(this.client);
        this._sheetComment = new clients_1.SheetCommentClient(this.client);
        this._sheet = new clients_1.SheetClient(this.client);
        this._statistic = new clients_1.StatisticClient(this.client);
        this._tag = new clients_1.TagClient(this.client);
        this._theme = new clients_1.ThemeClient(this.client);
        this._user = new clients_1.UserClient(this.client);
        this._staticStorage = new clients_1.StaticStorageClient(this.client);
        this._comment = new clients_1.CommentClient(this.client);
        this._actuator = new clients_1.ActuatorClient(this.client);
    }
    get attachment() {
        return this._attachment;
    }
    get backup() {
        return this._backup;
    }
    get category() {
        return this._category;
    }
    get installation() {
        return this._installation;
    }
    get journalComment() {
        return this._journalComment;
    }
    get journal() {
        return this._journal;
    }
    get link() {
        return this._link;
    }
    get log() {
        return this._log;
    }
    get mail() {
        return this._mail;
    }
    get menu() {
        return this._menu;
    }
    get migration() {
        return this._migration;
    }
    get option() {
        return this._option;
    }
    get photo() {
        return this._photo;
    }
    get postComment() {
        return this._postComment;
    }
    get post() {
        return this._post;
    }
    get sheetComment() {
        return this._sheetComment;
    }
    get sheet() {
        return this._sheet;
    }
    get statistic() {
        return this._statistic;
    }
    get tag() {
        return this._tag;
    }
    get theme() {
        return this._theme;
    }
    get user() {
        return this._user;
    }
    get staticStorage() {
        return this._staticStorage;
    }
    get comment() {
        return this._comment;
    }
    get actuator() {
        return this._actuator;
    }
    getEnvironment() {
        const path = (0, url_1.buildPath)({
            endpointName: 'environments',
        });
        return this.client.get(path, {});
    }
    getLogFile(lines) {
        const path = (0, url_1.buildPath)({
            endpointName: 'halo/logfile',
        });
        return this.client.get(path, { lines });
    }
    isInstalled() {
        const path = (0, url_1.buildPath)({
            endpointName: 'is_installed',
        });
        return this.client.get(path, {});
    }
    logout() {
        const path = (0, url_1.buildPath)({
            endpointName: 'logout',
        });
        return this.client.post(path, {});
    }
    sendResetPasswordCode(params) {
        const path = (0, url_1.buildPath)({
            endpointName: 'password/code',
        });
        return this.client.post(path, params);
    }
    resetPassword(params) {
        const path = (0, url_1.buildPath)({
            endpointName: 'password/reset',
        });
        return this.client.put(path, params);
    }
    refreshToken(refreshToken) {
        const path = (0, url_1.buildPath)({
            endpointName: `refresh/${refreshToken}`,
        });
        return this.client.post(path, {});
    }
    needMFACode(params) {
        const path = (0, url_1.buildPath)({
            endpointName: 'login/precheck',
        });
        return this.client.post(path, Object.assign({}, params));
    }
    login(params) {
        const path = (0, url_1.buildPath)({
            endpointName: 'login',
        });
        return this.client.post(path, Object.assign({}, params));
    }
}
exports.AdminApiClient = AdminApiClient;
//# sourceMappingURL=AdminApiClient.js.map

/***/ }),

/***/ 6710:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthorizedClient = void 0;
const url_1 = __webpack_require__(6998);
const rest_api_client_1 = __webpack_require__(5040);
class AuthorizedClient {
    constructor(baseUrl) {
        const requestConfigBuilder = new rest_api_client_1.HaloRequestConfigBuilder({
            baseUrl: baseUrl,
        });
        const responseHandler = new rest_api_client_1.HaloResponseHandler();
        this.client = new rest_api_client_1.DefaultHttpClient({
            responseHandler,
            requestConfigBuilder,
        });
    }
    isInstalled() {
        const path = (0, url_1.buildPath)({
            endpointName: 'is_installed',
        });
        return this.client.get(path, {});
    }
    sendResetPasswordCode(params) {
        const path = (0, url_1.buildPath)({
            endpointName: 'password/code',
        });
        return this.client.post(path, params);
    }
    resetPassword(params) {
        const path = (0, url_1.buildPath)({
            endpointName: 'password/reset',
        });
        return this.client.post(path, params);
    }
    refreshToken(refreshToken) {
        const path = (0, url_1.buildPath)({
            endpointName: `refresh/${refreshToken}`,
        });
        return this.client.post(path, {});
    }
    login(params) {
        const path = (0, url_1.buildPath)({
            endpointName: 'login',
        });
        return this.client.post(path, Object.assign({}, params));
    }
    needMFACode(params) {
        const path = (0, url_1.buildPath)({
            endpointName: 'login/precheck',
        });
        return this.client.post(path, Object.assign({}, params));
    }
}
exports.AuthorizedClient = AuthorizedClient;
//# sourceMappingURL=AuthorizedClient.js.map

/***/ }),

/***/ 6618:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ActuatorClient = void 0;
const url_1 = __webpack_require__(6998);
class ActuatorClient {
    constructor(client) {
        this.client = client;
    }
    getLogfile() {
        const path = (0, url_1.buildPath)({
            endpointName: 'actuator/logfile',
        });
        return this.client.get(path, {});
    }
    getEnv() {
        const path = (0, url_1.buildPath)({
            endpointName: 'actuator/env',
        });
        return this.client.get(path, {});
    }
    getSystemCpuCount() {
        const path = (0, url_1.buildPath)({
            endpointName: 'actuator/metrics/system.cpu.count',
        });
        return this.client.get(path, {});
    }
    getSystemCpuUsage() {
        const path = (0, url_1.buildPath)({
            endpointName: 'actuator/metrics/system.cpu.usage',
        });
        return this.client.get(path, {});
    }
    getProcessUptime() {
        const path = (0, url_1.buildPath)({
            endpointName: 'actuator/metrics/process.uptime',
        });
        return this.client.get(path, {});
    }
    getProcessStartTime() {
        const path = (0, url_1.buildPath)({
            endpointName: 'actuator/metrics/process.start.time',
        });
        return this.client.get(path, {});
    }
    getProcessCpuUsage() {
        const path = (0, url_1.buildPath)({
            endpointName: 'actuator/metrics/process.cpu.usage',
        });
        return this.client.get(path, {});
    }
    getJvmMemoryMax() {
        const path = (0, url_1.buildPath)({
            endpointName: 'actuator/metrics/jvm.memory.max',
        });
        return this.client.get(path, {});
    }
    getJvmMemoryCommitted() {
        const path = (0, url_1.buildPath)({
            endpointName: 'actuator/metrics/jvm.memory.committed',
        });
        return this.client.get(path, {});
    }
    getJvmMemoryUsed() {
        const path = (0, url_1.buildPath)({
            endpointName: 'actuator/metrics/jvm.memory.used',
        });
        return this.client.get(path, {});
    }
    getJvmGcPause() {
        const path = (0, url_1.buildPath)({
            endpointName: 'actuator/metrics/jvm.gc.pause',
        });
        return this.client.get(path, {});
    }
}
exports.ActuatorClient = ActuatorClient;
//# sourceMappingURL=ActuatorClient.js.map

/***/ }),

/***/ 399:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AttachmentClient = void 0;
const rest_api_client_1 = __webpack_require__(5040);
const url_1 = __webpack_require__(6998);
class AttachmentClient {
    constructor(client) {
        this.client = client;
    }
    /**
     * Gets attachment detail by id.
     *
     * @param attachmentId attachment id
     * @returns Returns attachment detail response.
     */
    get(attachmentId) {
        const path = (0, url_1.buildPath)({
            endpointName: `attachments/${attachmentId}`,
        });
        return this.client.get(path, {});
    }
    /**
     * Page query attachment list.
     *
     * @param params attachment query parameter
     * @returns Returns attachment page response.
     */
    list(params) {
        const path = (0, url_1.buildPath)({
            endpointName: 'attachments',
        });
        return this.client.get(path, Object.assign({}, params));
    }
    /**
     * Batch delete attachment permanently by attachment ids.
     *
     * @param attachmentIds a collection of attachment id
     * @returns Returns attachments of deleted
     */
    deleteInBatch(attachmentIds) {
        const path = (0, url_1.buildPath)({
            endpointName: 'attachments',
        });
        return this.client.delete(path, attachmentIds);
    }
    /**
     * Delete attachment permanently by attachment id.
     *
     * @param attachmentId attachment id
     * @returns Returns attachment detail of deleted
     */
    delete(attachmentId) {
        const path = (0, url_1.buildPath)({
            endpointName: `attachments/${attachmentId}`,
        });
        return this.client.delete(path, {});
    }
    /**
     * Update attachment name by id.
     *
     * @param attachmentId attachment id
     * @param name a new attachment name
     * @returns Returns an updated attachment response.
     */
    update(attachmentId, name) {
        const path = (0, url_1.buildPath)({
            endpointName: `attachments/${attachmentId}`,
        });
        return this.client.put(path, { name });
    }
    /**
     * List all of attachment media types.
     *
     * @returns Returns attachment media types response.
     */
    listMediaTypes() {
        const path = (0, url_1.buildPath)({
            endpointName: 'attachments/media_types',
        });
        return this.client.get(path, {});
    }
    /**
     * List all of attachment types.
     *
     * @returns Returns a response of attachment types.
     */
    listTypes() {
        const path = (0, url_1.buildPath)({
            endpointName: 'attachments/types',
        });
        return this.client.get(path, {});
    }
    /**
     * Upload a single attachment file.
     *
     * @param data attachment file object.
     * @param options other upload options.
     * @returns Returns a response of uploaded attachment
     */
    upload(data, options) {
        const path = (0, url_1.buildPath)({
            endpointName: 'attachments/upload',
        });
        const formData = new rest_api_client_1.FormData();
        formData.append('file', data);
        return this.client.post(path, formData, Object.assign({}, options));
    }
    /**
     * Batch upload attachments.
     *
     * @param data attachment file object.
     * @param options other upload options.
     * @returns Returns a response of uploaded attachments.
     */
    uploadInBatch(data, options) {
        const path = (0, url_1.buildPath)({
            endpointName: 'attachments/uploads',
        });
        const formData = new rest_api_client_1.FormData();
        data.forEach((fileStream) => {
            formData.append('files', fileStream);
        });
        return this.client.post(path, formData, Object.assign({}, options));
    }
}
exports.AttachmentClient = AttachmentClient;
//# sourceMappingURL=AttachmentClient.js.map

/***/ }),

/***/ 5260:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BackupClient = void 0;
const url_1 = __webpack_require__(6998);
class BackupClient {
    constructor(client) {
        this.client = client;
    }
    getWorkdirBackup(filename) {
        const path = (0, url_1.buildPath)({
            endpointName: `backups/work-dir/fetch?filename=${filename}`,
        });
        return this.client.get(path, {});
    }
    getDataBackup(filename) {
        const path = (0, url_1.buildPath)({
            endpointName: `backups/data/fetch?filename=${filename}`,
        });
        return this.client.get(path, {});
    }
    getMarkdownBackup(filename) {
        const path = (0, url_1.buildPath)({
            endpointName: `backups/markdown/fetch?filename=${filename}`,
        });
        return this.client.get(path, {});
    }
    backupWorkdir(options) {
        const path = (0, url_1.buildPath)({
            endpointName: 'backups/work-dir',
        });
        return this.client.post(path, options);
    }
    getWorkdirBackupOptions() {
        const path = (0, url_1.buildPath)({
            endpointName: 'backups/work-dir/options',
        });
        return this.client.get(path, {});
    }
    listWorkdirBackups() {
        const path = (0, url_1.buildPath)({
            endpointName: 'backups/work-dir',
        });
        return this.client.get(path, {});
    }
    deleteWorkdirBackup(filename) {
        const path = (0, url_1.buildPath)({
            endpointName: `backups/work-dir`,
        });
        return this.client.delete(path, { filename });
    }
    backupData() {
        const path = (0, url_1.buildPath)({
            endpointName: 'backups/data',
        });
        return this.client.post(path, {});
    }
    listDataBackups() {
        const path = (0, url_1.buildPath)({
            endpointName: 'backups/data',
        });
        return this.client.get(path, {});
    }
    deleteDataBackup(filename) {
        const path = (0, url_1.buildPath)({
            endpointName: `backups/data`,
        });
        return this.client.delete(path, { filename });
    }
    backupMarkdown(params) {
        const path = (0, url_1.buildPath)({
            endpointName: 'backups/markdown/export',
        });
        return this.client.post(path, params);
    }
    listMarkdownBackups() {
        const path = (0, url_1.buildPath)({
            endpointName: 'backups/markdown/export',
        });
        return this.client.get(path, {});
    }
    deleteMarkdownBackup(filename) {
        const path = (0, url_1.buildPath)({
            endpointName: `backups/markdown/export`,
        });
        return this.client.delete(path, { filename });
    }
    importMarkdown(data, options) {
        const path = (0, url_1.buildPath)({
            endpointName: 'backups/markdown/import',
        });
        const formData = new FormData();
        formData.append('file', data);
        return this.client.post(path, formData, Object.assign({}, options));
    }
}
exports.BackupClient = BackupClient;
//# sourceMappingURL=BackupClient.js.map

/***/ }),

/***/ 6774:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CategoryClient = void 0;
const tslib_1 = __webpack_require__(655);
const url_1 = __webpack_require__(6998);
class CategoryClient {
    constructor(client) {
        this.client = client;
    }
    /**
     * Lists all categories.
     *
     * @param params parameter for queries
     * @returns A response of all categories.
     */
    list(params) {
        const path = (0, url_1.buildPath)({
            endpointName: 'categories',
        });
        return this.client.get(path, Object.assign({}, params));
    }
    /**
     * List all categories as tree.
     *
     * @param sort sort option for queries, value is category field
     * @returns A response of all categories.
     */
    listAsTree(sort) {
        const path = (0, url_1.buildPath)({
            endpointName: 'categories/tree_view',
        });
        return this.client.get(path, { sort });
    }
    /**
     * Gets category detail by id.
     *
     * @param categoryId category id
     * @returns A response of category detail.
     */
    get(categoryId) {
        const path = (0, url_1.buildPath)({
            endpointName: `categories/${categoryId}`,
        });
        return this.client.get(path, {});
    }
    /**
     * Creates a category.
     *
     * @param params category parameter to create
     * @returns A response of created category.
     */
    create(params) {
        const path = (0, url_1.buildPath)({
            endpointName: 'categories',
        });
        return this.client.post(path, Object.assign({}, params));
    }
    /**
     * Updates category by id
     *
     * @param categoryId category id
     * @param params category update parameter
     * @returns A response of updated category.
     */
    update(categoryId, params) {
        const path = (0, url_1.buildPath)({
            endpointName: `categories/${categoryId}`,
        });
        return this.client.put(path, Object.assign({}, params));
    }
    /**
     * Updates category in batch
     *
     * @param params
     */
    updateInBatch(params) {
        const path = (0, url_1.buildPath)({
            endpointName: 'categories/batch',
        });
        return this.client.put(path, [...params]);
    }
    /**
     * Deletes a category by id.
     *
     * @param categoryId category id
     */
    delete(categoryId) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const path = (0, url_1.buildPath)({
                endpointName: `categories/${categoryId}`,
            });
            yield this.client.delete(path, {});
        });
    }
}
exports.CategoryClient = CategoryClient;
//# sourceMappingURL=CategoryClient.js.map

/***/ }),

/***/ 8666:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CommentClient = void 0;
const url_1 = __webpack_require__(6998);
class CommentClient {
    constructor(client) {
        this.client = client;
    }
    list(target, params) {
        const path = (0, url_1.buildPath)({
            endpointName: `${target}/comments`,
        });
        return this.client.get(path, params);
    }
    latest(target, top, status) {
        const path = (0, url_1.buildPath)({
            endpointName: `${target}/comments/latest`,
        });
        return this.client.get(path, { top, status });
    }
    listAsView(target, targetId, params) {
        const path = (0, url_1.buildPath)({
            endpointName: `${target}/comments/${targetId}/list_view`,
        });
        return this.client.get(path, params);
    }
    listAsTreeView(target, targetId, params) {
        const path = (0, url_1.buildPath)({
            endpointName: `${target}/comments/${targetId}/tree_view`,
        });
        return this.client.get(path, params);
    }
    get(target, commentId) {
        const path = (0, url_1.buildPath)({
            endpointName: `${target}/comments/${commentId}`,
        });
        return this.client.get(path, {});
    }
    create(target, params) {
        const path = (0, url_1.buildPath)({
            endpointName: `${target}/comments`,
        });
        return this.client.post(path, params);
    }
    update(target, commentId, params) {
        const path = (0, url_1.buildPath)({
            endpointName: `${target}/comments/${commentId}`,
        });
        return this.client.get(path, params);
    }
    updateStatusById(target, commentId, status) {
        const path = (0, url_1.buildPath)({
            endpointName: `${target}/comments/${commentId}/status/${status}`,
        });
        return this.client.put(path, {});
    }
    updateStatusInBatch(target, commentIds, status) {
        const path = (0, url_1.buildPath)({
            endpointName: `${target}/comments/status/${status}`,
        });
        return this.client.put(path, commentIds);
    }
    delete(target, commentId) {
        const path = (0, url_1.buildPath)({
            endpointName: `${target}/comments/${commentId}`,
        });
        return this.client.delete(path, {});
    }
    deleteInBatch(target, postCommentIds) {
        const path = (0, url_1.buildPath)({
            endpointName: `${target}/comments`,
        });
        return this.client.delete(path, postCommentIds);
    }
}
exports.CommentClient = CommentClient;
//# sourceMappingURL=CommentClient.js.map

/***/ }),

/***/ 8400:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.InstallationClient = void 0;
const url_1 = __webpack_require__(6998);
class InstallationClient {
    constructor(client) {
        this.client = client;
    }
    /**
     * Initializes the blog.
     *
     * @param params installation parameter
     * @returns A response of installation status message.
     */
    install(params) {
        const path = (0, url_1.buildPath)({
            endpointName: 'installations',
        });
        return this.client.post(path, Object.assign({}, params));
    }
}
exports.InstallationClient = InstallationClient;
//# sourceMappingURL=InstallationClient.js.map

/***/ }),

/***/ 173:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.JournalClient = void 0;
const tslib_1 = __webpack_require__(655);
const url_1 = __webpack_require__(6998);
class JournalClient {
    constructor(client) {
        this.client = client;
    }
    /**
     * Lists journals.
     *
     * @param params parameter for queries
     * @returns A page response of journals.
     */
    list(params) {
        const path = (0, url_1.buildPath)({
            endpointName: 'journals',
        });
        return this.client.get(path, Object.assign({}, params));
    }
    /**
     * Gets latest journals.
     *
     * @param top top option for queries
     * @returns A response of lastes journals.
     */
    latest(top) {
        const path = (0, url_1.buildPath)({
            endpointName: 'journals/latest',
        });
        return this.client.get(path, { top });
    }
    /**
     * Creates a journal.
     *
     * @param params parameter for creates
     * @returns A response of created journal.
     */
    create(params) {
        const path = (0, url_1.buildPath)({
            endpointName: 'journals',
        });
        return this.client.post(path, Object.assign({}, params));
    }
    /**
     * Updates a journal by id.
     *
     * @param journalId journal id
     * @param params parameter for updates
     * @returns A response of updated journal.
     */
    update(journalId, params) {
        const path = (0, url_1.buildPath)({
            endpointName: `journals/${journalId}`,
        });
        return this.client.put(path, Object.assign({}, params));
    }
    /**
     * Deletes a journal by id.
     * @param journalId journal id
     */
    delete(journalId) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const path = (0, url_1.buildPath)({
                endpointName: `journals/${journalId}`,
            });
            yield this.client.delete(path, {});
        });
    }
}
exports.JournalClient = JournalClient;
//# sourceMappingURL=JournalClient.js.map

/***/ }),

/***/ 5503:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.JournalCommentClient = void 0;
const tslib_1 = __webpack_require__(655);
const url_1 = __webpack_require__(6998);
class JournalCommentClient {
    constructor(client) {
        this.client = client;
    }
    /**
     * Lists journal comments.
     *
     * @param params parameter for queries
     * @returns A page response of journals.
     */
    list(params) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const path = (0, url_1.buildPath)({
                endpointName: 'journals/comments',
            });
            return this.client.get(path, Object.assign({}, params));
        });
    }
    /**
     * Creates a journal comment.
     *
     * @param params comment parameter for creates
     * @returns A response of created journal comment.
     */
    create(params) {
        const path = (0, url_1.buildPath)({
            endpointName: 'journals/comments',
        });
        return this.client.post(path, Object.assign({}, params));
    }
    /**
     * Deletes a journal comment by id.
     *
     * @param commentId journal comment id.
     * @returns A response of deleted journal comment.
     */
    delete(commentId) {
        const path = (0, url_1.buildPath)({
            endpointName: `journals/comments/${commentId}`,
        });
        return this.client.delete(path, {});
    }
    /**
     * Updates journal comment status by id.
     *
     * @param commentId journal comment id
     * @param status comment status
     * @returns A response of updated journal comment.
     */
    update(commentId, status) {
        const path = (0, url_1.buildPath)({
            endpointName: `journals/comments/${commentId}/status/${status}`,
        });
        return this.client.put(path, {});
    }
    /**
     * Lists comment with list view.
     *
     * @param params parameter for queries
     * @returns A page response of journal comments.
     */
    listAsView(params) {
        const path = (0, url_1.buildPath)({
            endpointName: `journals/comments/${params.journalId}/list_view`,
        });
        return this.client.get(path, Object.assign({}, params));
    }
    /**
     * Lists comment with tree view.
     *
     * @param params parameter for queries
     * @returns A page response of journal comments tree.
     */
    listAsTree(params) {
        const path = (0, url_1.buildPath)({
            endpointName: `journals/comments/${params.journalId}/tree_view`,
        });
        return this.client.get(path, Object.assign({}, params));
    }
    /**
     * Lists latest journal comments.
     *
     * @param params parameter for queries
     * @returns A response of latest journal comments.
     */
    latest(params) {
        const path = (0, url_1.buildPath)({
            endpointName: 'journals/comments/latest',
        });
        return this.client.get(path, Object.assign({}, params));
    }
}
exports.JournalCommentClient = JournalCommentClient;
//# sourceMappingURL=JournalCommentClient.js.map

/***/ }),

/***/ 9207:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LinkClient = void 0;
const tslib_1 = __webpack_require__(655);
const url_1 = __webpack_require__(6998);
class LinkClient {
    constructor(client) {
        this.client = client;
    }
    list(sort) {
        const path = (0, url_1.buildPath)({
            endpointName: 'links',
        });
        return this.client.get(path, { sort });
    }
    create(params) {
        const path = (0, url_1.buildPath)({
            endpointName: 'links',
        });
        return this.client.post(path, Object.assign({}, params));
    }
    get(id) {
        const path = (0, url_1.buildPath)({
            endpointName: `links/${id}`,
        });
        return this.client.get(path, {});
    }
    update(linkId, params) {
        const path = (0, url_1.buildPath)({
            endpointName: `links/${linkId}`,
        });
        return this.client.put(path, Object.assign({}, params));
    }
    updateInBatch(params) {
        const path = (0, url_1.buildPath)({
            endpointName: 'links/batch',
        });
        return this.client.put(path, [...params]);
    }
    delete(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const path = (0, url_1.buildPath)({
                endpointName: `links/${id}`,
            });
            yield this.client.delete(path, {});
        });
    }
    listTeams() {
        const path = (0, url_1.buildPath)({
            endpointName: 'links/teams',
        });
        return this.client.get(path, {});
    }
}
exports.LinkClient = LinkClient;
//# sourceMappingURL=LinkClient.js.map

/***/ }),

/***/ 9842:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LogClient = void 0;
const tslib_1 = __webpack_require__(655);
const url_1 = __webpack_require__(6998);
class LogClient {
    constructor(client) {
        this.client = client;
    }
    /**
     * List action logs by params.
     *
     * @param params
     */
    list(params) {
        const path = (0, url_1.buildPath)({
            endpointName: 'logs',
        });
        return this.client.get(path, Object.assign({}, params));
    }
    /**
     * Clear action logs
     */
    clear() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const path = (0, url_1.buildPath)({
                endpointName: 'logs/clear',
            });
            yield this.client.get(path, {});
        });
    }
    /**
     * Get latest action logs
     *
     * @param top the number of logs to get
     */
    latest(top) {
        const path = (0, url_1.buildPath)({
            endpointName: 'logs/latest',
        });
        return this.client.get(path, { top });
    }
}
exports.LogClient = LogClient;
//# sourceMappingURL=LogClient.js.map

/***/ }),

/***/ 7206:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MailClient = void 0;
const url_1 = __webpack_require__(6998);
class MailClient {
    constructor(client) {
        this.client = client;
    }
    testSmtpService(params) {
        const path = (0, url_1.buildPath)({
            endpointName: 'mails/test',
        });
        return this.client.post(path, Object.assign({}, params));
    }
    testConnect() {
        const path = (0, url_1.buildPath)({
            endpointName: 'mails/test/connection',
        });
        return this.client.post(path, {});
    }
}
exports.MailClient = MailClient;
//# sourceMappingURL=MailClient.js.map

/***/ }),

/***/ 7530:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MenuClient = void 0;
const tslib_1 = __webpack_require__(655);
const url_1 = __webpack_require__(6998);
class MenuClient {
    constructor(client) {
        this.client = client;
    }
    list() {
        const path = (0, url_1.buildPath)({
            endpointName: 'menus',
        });
        return this.client.get(path, {});
    }
    create(params) {
        const path = (0, url_1.buildPath)({
            endpointName: 'menus',
        });
        return this.client.post(path, Object.assign({}, params));
    }
    createInBatch(params) {
        const path = (0, url_1.buildPath)({
            endpointName: 'menus/batch',
        });
        return this.client.post(path, [...params]);
    }
    get(menuId) {
        const path = (0, url_1.buildPath)({
            endpointName: `menus/${menuId}`,
        });
        return this.client.post(path, {});
    }
    update(menuId, params) {
        const path = (0, url_1.buildPath)({
            endpointName: `menus/${menuId}`,
        });
        return this.client.put(path, Object.assign({}, params));
    }
    updateInBatch(params) {
        const path = (0, url_1.buildPath)({
            endpointName: 'menus/batch',
        });
        return this.client.put(path, [...params]);
    }
    delete(menuId) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const path = (0, url_1.buildPath)({
                endpointName: `menus/${menuId}`,
            });
            yield this.client.delete(path, {});
        });
    }
    deleteInBatch(menuIds) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const path = (0, url_1.buildPath)({
                endpointName: 'menus/batch',
            });
            yield this.client.delete(path, [...menuIds]);
        });
    }
    listTreeViewByTeam(team, sort) {
        const path = (0, url_1.buildPath)({
            endpointName: 'menus/team/tree_view',
        });
        return this.client.get(path, { team, sort });
    }
    listTeams() {
        const path = (0, url_1.buildPath)({
            endpointName: 'menus/teams',
        });
        return this.client.get(path, {});
    }
    listTreeView(sort) {
        const path = (0, url_1.buildPath)({
            endpointName: 'menus/tree_view',
        });
        return this.client.get(path, { sort });
    }
}
exports.MenuClient = MenuClient;
//# sourceMappingURL=MenuClient.js.map

/***/ }),

/***/ 9644:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MigrationClient = void 0;
const tslib_1 = __webpack_require__(655);
const rest_api_client_1 = __webpack_require__(5040);
const url_1 = __webpack_require__(6998);
class MigrationClient {
    constructor(client) {
        this.client = client;
    }
    migrate(data, options) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const path = (0, url_1.buildPath)({
                endpointName: 'migrations/halo',
            });
            const formData = new rest_api_client_1.FormData();
            formData.append('file', data);
            yield this.client.post(path, formData, Object.assign({}, options));
        });
    }
}
exports.MigrationClient = MigrationClient;
//# sourceMappingURL=MigrationClient.js.map

/***/ }),

/***/ 3913:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OptionClient = void 0;
const tslib_1 = __webpack_require__(655);
const url_1 = __webpack_require__(6998);
class OptionClient {
    constructor(client) {
        this.client = client;
    }
    list() {
        const path = (0, url_1.buildPath)({
            endpointName: 'options',
        });
        return this.client.get(path, {});
    }
    create(params) {
        const path = (0, url_1.buildPath)({
            endpointName: 'options',
        });
        return this.client.post(path, Object.assign({}, params));
    }
    get(id) {
        const path = (0, url_1.buildPath)({
            endpointName: `options/${id}`,
        });
        return this.client.get(path, {});
    }
    update(optionId, params) {
        const path = (0, url_1.buildPath)({
            endpointName: `options/${optionId}`,
        });
        return this.client.put(path, Object.assign({}, params));
    }
    delete(optionId) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const path = (0, url_1.buildPath)({
                endpointName: `options/${optionId}`,
            });
            yield this.client.delete(path, {});
        });
    }
    listAsView(params) {
        const path = (0, url_1.buildPath)({
            endpointName: 'options/list_view',
        });
        return this.client.get(path, Object.assign({}, params));
    }
    listAsMapView() {
        const path = (0, url_1.buildPath)({
            endpointName: 'options/map_view',
        });
        return this.client.get(path, {});
    }
    listAsMapViewByKeys(params) {
        const path = (0, url_1.buildPath)({
            endpointName: 'options/map_view/keys',
        });
        return this.client.post(path, params);
    }
    saveMapView(params) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const path = (0, url_1.buildPath)({
                endpointName: 'options/map_view/saving',
            });
            yield this.client.post(path, Object.assign({}, params));
        });
    }
    save(params) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const path = (0, url_1.buildPath)({
                endpointName: 'options/saving',
            });
            yield this.client.post(path, [...params]);
        });
    }
}
exports.OptionClient = OptionClient;
//# sourceMappingURL=OptionClient.js.map

/***/ }),

/***/ 402:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PhotoClient = void 0;
const tslib_1 = __webpack_require__(655);
const url_1 = __webpack_require__(6998);
class PhotoClient {
    constructor(client) {
        this.client = client;
    }
    list(params) {
        const path = (0, url_1.buildPath)({
            endpointName: 'photos',
        });
        return this.client.get(path, Object.assign({}, params));
    }
    create(params) {
        const path = (0, url_1.buildPath)({
            endpointName: 'photos',
        });
        return this.client.post(path, Object.assign({}, params));
    }
    createInBatch(params) {
        const path = (0, url_1.buildPath)({
            endpointName: 'photos/batch',
        });
        return this.client.post(path, [...params]);
    }
    get(photoId) {
        const path = (0, url_1.buildPath)({
            endpointName: `photos/${photoId}`,
        });
        return this.client.get(path, {});
    }
    update(photoId, params) {
        const path = (0, url_1.buildPath)({
            endpointName: `photos/${photoId}`,
        });
        return this.client.put(path, Object.assign({}, params));
    }
    updateInBatch(params) {
        const path = (0, url_1.buildPath)({
            endpointName: 'photos/batch',
        });
        return this.client.put(path, [...params]);
    }
    delete(photoId) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const path = (0, url_1.buildPath)({
                endpointName: `photos/${photoId}`,
            });
            yield this.client.delete(path, {});
        });
    }
    deleteInBatch(photoIds) {
        const path = (0, url_1.buildPath)({
            endpointName: 'photos/batch',
        });
        return this.client.delete(path, photoIds);
    }
    latest(sort) {
        const path = (0, url_1.buildPath)({
            endpointName: 'photos/latest',
        });
        return this.client.get(path, { sort });
    }
    listTeams() {
        const path = (0, url_1.buildPath)({
            endpointName: 'photos/teams',
        });
        return this.client.get(path, {});
    }
}
exports.PhotoClient = PhotoClient;
//# sourceMappingURL=PhotoClient.js.map

/***/ }),

/***/ 4682:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PostClient = void 0;
const tslib_1 = __webpack_require__(655);
const url_1 = __webpack_require__(6998);
class PostClient {
    constructor(client) {
        this.client = client;
    }
    list(params) {
        const path = (0, url_1.buildPath)({
            endpointName: 'posts',
        });
        return this.client.get(path, Object.assign({}, params));
    }
    get(postId) {
        const path = (0, url_1.buildPath)({
            endpointName: `posts/${postId}`,
        });
        return this.client.get(path, {});
    }
    getPreviewLinkById(postId) {
        const path = (0, url_1.buildPath)({
            endpointName: `posts/${postId}/preview`,
        });
        return this.client.get(path, {});
    }
    latest(top) {
        const path = (0, url_1.buildPath)({
            endpointName: 'posts/latest',
        });
        return this.client.get(path, { top });
    }
    listByStatus(status, query) {
        const path = (0, url_1.buildPath)({
            endpointName: `posts/status/${status}`,
        });
        return this.client.get(path, Object.assign({}, query));
    }
    create(params) {
        const path = (0, url_1.buildPath)({
            endpointName: 'posts',
        });
        return this.client.post(path, Object.assign({}, params));
    }
    update(postId, params) {
        const path = (0, url_1.buildPath)({
            endpointName: `posts/${postId}`,
        });
        return this.client.put(path, Object.assign({}, params));
    }
    updateStatusById(postId, status) {
        const path = (0, url_1.buildPath)({
            endpointName: `posts/${postId}/status/${status}`,
        });
        return this.client.put(path, {});
    }
    updateStatusInBatch(postIds, status) {
        const path = (0, url_1.buildPath)({
            endpointName: `posts/status/${status}`,
        });
        return this.client.put(path, postIds);
    }
    updateDraftById(postId, originalContent, content, keepRaw) {
        const path = (0, url_1.buildPath)({
            endpointName: `posts/${postId}/status/draft/content`,
        });
        return this.client.put(path, { originalContent, content, keepRaw });
    }
    like(postId) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const path = (0, url_1.buildPath)({
                endpointName: `posts/${postId}/likes`,
            });
            yield this.client.put(path, {});
        });
    }
    delete(postId) {
        const path = (0, url_1.buildPath)({
            endpointName: `posts/${postId}`,
        });
        return this.client.delete(path, {});
    }
    deleteInBatch(postIds) {
        const path = (0, url_1.buildPath)({
            endpointName: 'posts',
        });
        return this.client.delete(path, postIds);
    }
}
exports.PostClient = PostClient;
//# sourceMappingURL=PostClient.js.map

/***/ }),

/***/ 6494:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PostCommentClient = void 0;
const url_1 = __webpack_require__(6998);
class PostCommentClient {
    constructor(client) {
        this.client = client;
    }
    list(params) {
        const path = (0, url_1.buildPath)({
            endpointName: 'posts/comments',
        });
        return this.client.get(path, Object.assign({}, params));
    }
    listAsView(params) {
        const path = (0, url_1.buildPath)({
            endpointName: `posts/comments/${params.postId}/list_view`,
        });
        return this.client.get(path, Object.assign({}, params));
    }
    listAsTreeView(params) {
        const path = (0, url_1.buildPath)({
            endpointName: `posts/comments/${params.postId}/tree_view`,
        });
        return this.client.get(path, Object.assign({}, params));
    }
    latest(params) {
        const path = (0, url_1.buildPath)({
            endpointName: 'posts/comments/latest',
        });
        return this.client.get(path, Object.assign({}, params));
    }
    create(params) {
        const path = (0, url_1.buildPath)({
            endpointName: 'posts/comments',
        });
        return this.client.post(path, Object.assign({}, params));
    }
    update(commentId, params) {
        const path = (0, url_1.buildPath)({
            endpointName: `posts/comments/${commentId}`,
        });
        return this.client.get(path, Object.assign({}, params));
    }
    updateStatusById(commentId, status) {
        const path = (0, url_1.buildPath)({
            endpointName: `posts/comments/${commentId}/status/${status}`,
        });
        return this.client.put(path, {});
    }
    updateStatusInBatch(commentIds, status) {
        const path = (0, url_1.buildPath)({
            endpointName: `posts/comments/status/${status}`,
        });
        return this.client.put(path, commentIds);
    }
    delete(commentId) {
        const path = (0, url_1.buildPath)({
            endpointName: `posts/comments/${commentId}`,
        });
        return this.client.delete(path, {});
    }
    deleteInBatch(postCommentIds) {
        const path = (0, url_1.buildPath)({
            endpointName: 'posts/comments',
        });
        return this.client.delete(path, postCommentIds);
    }
}
exports.PostCommentClient = PostCommentClient;
//# sourceMappingURL=PostCommentClient.js.map

/***/ }),

/***/ 771:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SheetClient = void 0;
const tslib_1 = __webpack_require__(655);
const url_1 = __webpack_require__(6998);
class SheetClient {
    constructor(client) {
        this.client = client;
    }
    list(params) {
        const path = (0, url_1.buildPath)({
            endpointName: 'sheets',
        });
        return this.client.get(path, Object.assign({}, params));
    }
    listIndependents() {
        const path = (0, url_1.buildPath)({
            endpointName: 'sheets/independent',
        });
        return this.client.get(path, {});
    }
    create(params) {
        const path = (0, url_1.buildPath)({
            endpointName: 'sheets',
        });
        return this.client.post(path, Object.assign({}, params));
    }
    get(sheetId) {
        const path = (0, url_1.buildPath)({
            endpointName: `sheets/${sheetId}`,
        });
        return this.client.get(path, {});
    }
    getPreviewLinkById(sheetId) {
        const path = (0, url_1.buildPath)({
            endpointName: `sheets/preview/${sheetId}`,
        });
        return this.client.get(path, {});
    }
    update(sheetId, params) {
        const path = (0, url_1.buildPath)({
            endpointName: `sheets/${sheetId}`,
        });
        return this.client.put(path, Object.assign({}, params));
    }
    updateStatusById(sheetId, status) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const path = (0, url_1.buildPath)({
                endpointName: `sheets/${sheetId}/${status}`,
            });
            yield this.client.put(path, {});
        });
    }
    updateDraftById(sheetId, originalContent, content, keepRaw) {
        const path = (0, url_1.buildPath)({
            endpointName: `sheets/${sheetId}/status/draft/content`,
        });
        return this.client.put(path, { originalContent, content, keepRaw });
    }
    delete(sheetId) {
        const path = (0, url_1.buildPath)({
            endpointName: `sheets/${sheetId}`,
        });
        return this.client.delete(path, {});
    }
}
exports.SheetClient = SheetClient;
//# sourceMappingURL=SheetClient.js.map

/***/ }),

/***/ 6094:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SheetCommentClient = void 0;
const url_1 = __webpack_require__(6998);
class SheetCommentClient {
    constructor(client) {
        this.client = client;
    }
    list(params) {
        const path = (0, url_1.buildPath)({
            endpointName: 'sheets/comments',
        });
        return this.client.get(path, Object.assign({}, params));
    }
    get(commentId) {
        const path = (0, url_1.buildPath)({
            endpointName: `sheets/comments/${commentId}`,
        });
        return this.client.get(path, {});
    }
    listAsView(params) {
        const path = (0, url_1.buildPath)({
            endpointName: `sheets/comments/${params.sheetId}/list_view`,
        });
        return this.client.get(path, Object.assign({}, params));
    }
    listAsTreeView(params) {
        const path = (0, url_1.buildPath)({
            endpointName: `sheets/comments/${params.sheetId}/tree_view`,
        });
        return this.client.get(path, Object.assign({}, params));
    }
    latest(params) {
        const path = (0, url_1.buildPath)({
            endpointName: 'sheets/comments/latest',
        });
        return this.client.get(path, Object.assign({}, params));
    }
    create(params) {
        const path = (0, url_1.buildPath)({
            endpointName: 'sheets/comments',
        });
        return this.client.post(path, Object.assign({}, params));
    }
    update(commentId, params) {
        const path = (0, url_1.buildPath)({
            endpointName: `sheets/comments/${commentId}`,
        });
        return this.client.put(path, Object.assign({}, params));
    }
    updateStatusById(commentId, status) {
        const path = (0, url_1.buildPath)({
            endpointName: `sheets/comments/${commentId}/status/${status}`,
        });
        return this.client.put(path, {});
    }
    updateStatusInBatch(commentIds, status) {
        const path = (0, url_1.buildPath)({
            endpointName: `sheets/comments/status/${status}`,
        });
        return this.client.put(path, commentIds);
    }
    deleteInBatch(commentIds) {
        const path = (0, url_1.buildPath)({
            endpointName: 'sheets/comments',
        });
        return this.client.delete(path, commentIds);
    }
    delete(commentId) {
        const path = (0, url_1.buildPath)({
            endpointName: `sheets/comments/${commentId}`,
        });
        return this.client.delete(path, {});
    }
}
exports.SheetCommentClient = SheetCommentClient;
//# sourceMappingURL=SheetCommentClient.js.map

/***/ }),

/***/ 7742:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.StaticStorageClient = void 0;
const rest_api_client_1 = __webpack_require__(5040);
const url_1 = __webpack_require__(6998);
class StaticStorageClient {
    constructor(client) {
        this.client = client;
    }
    list() {
        const path = (0, url_1.buildPath)({
            endpointName: `statics`,
        });
        return this.client.get(path, {});
    }
    delete(filePath) {
        const path = (0, url_1.buildPath)({
            endpointName: `statics`,
        });
        return this.client.delete(path, {
            path: filePath,
        });
    }
    createFolder(basePath, folderName) {
        const path = (0, url_1.buildPath)({
            endpointName: `statics?basePath=${basePath}&folderName=${folderName}`,
        });
        return this.client.post(path, {});
    }
    upload(file, options, basePath) {
        const path = (0, url_1.buildPath)({
            endpointName: `statics/upload?basePath=${basePath}`,
        });
        const formData = new rest_api_client_1.FormData();
        formData.append('file', file);
        return this.client.post(path, formData, Object.assign({}, options));
    }
    rename(basePath, newName) {
        const path = (0, url_1.buildPath)({
            endpointName: `statics/rename?basePath=${basePath}&newName=${newName}`,
        });
        return this.client.post(path, {});
    }
    saveContent(params) {
        const path = (0, url_1.buildPath)({
            endpointName: `statics/files`,
        });
        return this.client.put(path, params);
    }
}
exports.StaticStorageClient = StaticStorageClient;
//# sourceMappingURL=StaticStorageClient.js.map

/***/ }),

/***/ 7922:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.StatisticClient = void 0;
const url_1 = __webpack_require__(6998);
class StatisticClient {
    constructor(client) {
        this.client = client;
    }
    statistics() {
        const path = (0, url_1.buildPath)({
            endpointName: 'statistics',
        });
        return this.client.get(path, {});
    }
    statisticsWithUser() {
        const path = (0, url_1.buildPath)({
            endpointName: 'statistics/user',
        });
        return this.client.get(path, {});
    }
}
exports.StatisticClient = StatisticClient;
//# sourceMappingURL=StatisticClient.js.map

/***/ }),

/***/ 4898:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TagClient = void 0;
const url_1 = __webpack_require__(6998);
class TagClient {
    constructor(client) {
        this.client = client;
    }
    list(params) {
        const path = (0, url_1.buildPath)({
            endpointName: 'tags',
        });
        return this.client.get(path, Object.assign({}, params));
    }
    create(params) {
        const path = (0, url_1.buildPath)({
            endpointName: 'tags',
        });
        return this.client.post(path, Object.assign({}, params));
    }
    get(tagId) {
        const path = (0, url_1.buildPath)({
            endpointName: `tags/${tagId}`,
        });
        return this.client.get(path, {});
    }
    update(tagId, params) {
        const path = (0, url_1.buildPath)({
            endpointName: `tags/${tagId}`,
        });
        return this.client.put(path, Object.assign({}, params));
    }
    delete(tagId) {
        const path = (0, url_1.buildPath)({
            endpointName: `tags/${tagId}`,
        });
        return this.client.delete(path, {});
    }
}
exports.TagClient = TagClient;
//# sourceMappingURL=TagClient.js.map

/***/ }),

/***/ 8842:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ThemeClient = void 0;
const tslib_1 = __webpack_require__(655);
const rest_api_client_1 = __webpack_require__(5040);
const url_1 = __webpack_require__(6998);
class ThemeClient {
    constructor(client) {
        this.client = client;
    }
    /**
     * List all themes.
     *
     * @returns array of ThemeProperty
     */
    list() {
        const path = (0, url_1.buildPath)({
            endpointName: 'themes',
        });
        return this.client.get(path, {});
    }
    /**
     * Get theme property by themeId.
     *
     * @param themeId themeId
     * @returns ThemeProperty
     */
    get(themeId) {
        const path = (0, url_1.buildPath)({
            endpointName: `themes/${themeId}`,
        });
        return this.client.get(path, {});
    }
    /**
     * Delete theme by themeId.
     *
     * @param themeId themeId
     * @param deleteSettings whether to delete the theme settings at the same time.
     * @returns ThemeProperty
     */
    delete(themeId, deleteSettings) {
        const path = (0, url_1.buildPath)({
            endpointName: `themes/${themeId}`,
        });
        return this.client.delete(path, { deleteSettings });
    }
    /**
     * Active a theme.
     *
     * @param themeId themeId
     * @returns ThemeProperty
     */
    active(themeId) {
        const path = (0, url_1.buildPath)({
            endpointName: `themes/${themeId}/activation`,
        });
        return this.client.post(path, {});
    }
    /**
     * Fetches theme configuration group names by theme id
     *
     * @param themeId theme id
     */
    listConfigurationGroups(themeId) {
        const path = (0, url_1.buildPath)({
            endpointName: `themes/${themeId}/configurations/groups`,
        });
        return this.client.get(path, {});
    }
    /**
     * Fetches theme configuration group by theme id and group name
     *
     * @param themeId theme id
     * @param group group name
     */
    listConfigurationsByGroup(themeId, group) {
        const path = (0, url_1.buildPath)({
            endpointName: `themes/${themeId}/configurations/groups/${group}`,
        });
        return this.client.get(path, {});
    }
    /**
     * List activated theme configurations.
     *
     * @returns array of configuration group.
     */
    listActivatedConfigurations() {
        const path = (0, url_1.buildPath)({
            endpointName: 'themes/activation/configurations',
        });
        return this.client.get(path, {});
    }
    /**
     * List theme configurations by themeId.
     *
     * @param themeId themeId
     * @returns array of configuration group.
     */
    listConfigurations(themeId) {
        const path = (0, url_1.buildPath)({
            endpointName: `themes/${themeId}/configurations`,
        });
        return this.client.get(path, {});
    }
    /**
     * List theme files by themeId.
     *
     * @param themeId themeId
     * @returns array of ThemeFile
     */
    listFiles(themeId) {
        const path = (0, url_1.buildPath)({
            endpointName: `themes/${themeId}/files`,
        });
        return this.client.get(path, {});
    }
    /**
     * List activated theme files.
     *
     * @returns array of ThemeFile
     */
    listActivatedFiles() {
        const path = (0, url_1.buildPath)({
            endpointName: 'themes/activation/files',
        });
        return this.client.get(path, {});
    }
    /**
     * Get activated template content by filepath.
     *
     * @param filepath filepath
     * @returns template content
     */
    getActivatedTemplateContent(filepath) {
        const path = (0, url_1.buildPath)({
            endpointName: 'themes/files/content',
        });
        return this.client.get(path, { path: filepath });
    }
    /**
     * Get template content by themeId and filepath.
     *
     * @param themeId themeId
     * @param filepath filepath
     * @returns template content
     */
    getTemplateContent(themeId, filepath) {
        const path = (0, url_1.buildPath)({
            endpointName: `themes/${themeId}/files/content`,
        });
        return this.client.get(path, { path: filepath });
    }
    /**
     * Update theme template content by themeId.
     *
     * @param themeId themeId
     * @param params path, content
     */
    updateTemplateContent(themeId, params) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const path = (0, url_1.buildPath)({
                endpointName: `themes/${themeId}/files/content`,
            });
            yield this.client.put(path, Object.assign({}, params));
        });
    }
    /**
     * List theme settings by themeId.
     *
     * @param themeId themeId
     * @returns Record<string, unknown>
     */
    listSettings(themeId) {
        const path = (0, url_1.buildPath)({
            endpointName: `themes/${themeId}/settings`,
        });
        return this.client.get(path, {});
    }
    /**
     * List activated theme settings.
     *
     * @returns Record<string, unknown>
     */
    listActivatedSettings() {
        const path = (0, url_1.buildPath)({
            endpointName: 'themes/activation/settings',
        });
        return this.client.get(path, {});
    }
    /**
     * Lists theme settings by theme id and group name
     *
     * @param themeId theme id
     * @param group group name
     */
    listSettingsByGroup(themeId, group) {
        const path = (0, url_1.buildPath)({
            endpointName: `themes/${themeId}/groups/${group}/settings`,
        });
        return this.client.get(path, {});
    }
    /**
     * Save settings by themeId.
     *
     * @param themeId themeId
     * @param settings settings
     */
    saveSettings(themeId, settings) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const path = (0, url_1.buildPath)({
                endpointName: `themes/${themeId}/settings`,
            });
            yield this.client.post(path, settings);
        });
    }
    /**
     * Save activated theme settings.
     *
     * @param settings settings
     */
    saveActivatedSettings(settings) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const path = (0, url_1.buildPath)({
                endpointName: 'themes/activation/settings',
            });
            yield this.client.post(path, settings);
        });
    }
    /**
     * Get activated theme property.
     *
     * @returns ThemeProperty
     */
    getActivatedTheme() {
        const path = (0, url_1.buildPath)({
            endpointName: 'themes/activation',
        });
        return this.client.get(path, {});
    }
    /**
     * List activated theme custom post templates.
     *
     * @returns array of template name.
     */
    listCustomPostTemplates() {
        const path = (0, url_1.buildPath)({
            endpointName: 'themes/activation/template/custom/post',
        });
        return this.client.get(path, {});
    }
    /**
     * List activated theme custom sheet templates.
     *
     * @returns array of template name.
     */
    listCustomSheetTemplates() {
        const path = (0, url_1.buildPath)({
            endpointName: 'themes/activation/template/custom/sheet',
        });
        return this.client.get(path, {});
    }
    /**
     * Check template exists
     *
     * @param template template name
     * @returns boolean
     */
    exists(template) {
        const path = (0, url_1.buildPath)({
            endpointName: 'themes/activation/template/exists',
        });
        return this.client.get(path, { template });
    }
    /**
     * Fetch theme by uri
     *
     * @param uri uri
     * @returns void
     */
    fetchTheme(uri) {
        const path = (0, url_1.buildPath)({
            endpointName: `themes/fetching?uri=${uri}`,
        });
        return this.client.post(path, {});
    }
    /**
     * update theme by fetch.
     *
     * @param themeId themeId
     * @returns void
     */
    updateThemeByFetching(themeId) {
        const path = (0, url_1.buildPath)({
            endpointName: `themes/fetching/${themeId}`,
        });
        return this.client.put(path, {});
    }
    /**
     * Update activated theme template content.
     *
     * @param params path, content
     * @returns void
     */
    updateActivatedTemplateContent(params) {
        const path = (0, url_1.buildPath)({
            endpointName: 'themes/files/content',
        });
        return this.client.put(path, Object.assign({}, params));
    }
    /**
     * Refresh theme list cache.
     *
     * @returns void
     */
    reload() {
        const path = (0, url_1.buildPath)({
            endpointName: 'themes/reload',
        });
        return this.client.post(path, {});
    }
    /**
     * Upload a theme.
     *
     * @param data data
     * @param options Upload options
     * @returns ThemeProperty
     */
    upload(data, options) {
        const path = (0, url_1.buildPath)({
            endpointName: 'themes/upload',
        });
        const formData = new rest_api_client_1.FormData();
        formData.append('file', data);
        return this.client.post(path, formData, Object.assign({}, options));
    }
    /**
     * Update theme by upload.
     *
     * @param options upload options
     * @param themeId themeId
     * @param data data
     * @returns ThemeProperty
     */
    updateByUpload(data, options, themeId) {
        const path = (0, url_1.buildPath)({
            endpointName: `themes/upload/${themeId}`,
        });
        const formData = new rest_api_client_1.FormData();
        formData.append('file', data);
        return this.client.put(path, formData, Object.assign({}, options));
    }
}
exports.ThemeClient = ThemeClient;
//# sourceMappingURL=ThemeClient.js.map

/***/ }),

/***/ 5412:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserClient = void 0;
const url_1 = __webpack_require__(6998);
class UserClient {
    constructor(client) {
        this.client = client;
    }
    /**
     * Get user profile
     */
    getProfile() {
        const path = (0, url_1.buildPath)({
            endpointName: 'users/profiles',
        });
        return this.client.get(path, {});
    }
    /**
     * Update user profile
     *
     * @param user {@link User}
     */
    updateProfile(user) {
        const path = (0, url_1.buildPath)({
            endpointName: 'users/profiles',
        });
        return this.client.put(path, user);
    }
    updatePassword(params) {
        const path = (0, url_1.buildPath)({
            endpointName: 'users/profiles/password',
        });
        return this.client.put(path, Object.assign({}, params));
    }
    generateMFAQrImage(params) {
        const path = (0, url_1.buildPath)({
            endpointName: 'users/mfa/generate',
        });
        return this.client.put(path, Object.assign({}, params));
    }
    updateMFAuth(params) {
        const path = (0, url_1.buildPath)({
            endpointName: 'users/mfa/update',
        });
        return this.client.put(path, Object.assign({}, params));
    }
}
exports.UserClient = UserClient;
//# sourceMappingURL=UserClient.js.map

/***/ }),

/***/ 6904:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ActuatorClient = exports.CommentClient = exports.StaticStorageClient = exports.UserClient = exports.ThemeClient = exports.TagClient = exports.StatisticClient = exports.SheetClient = exports.SheetCommentClient = exports.PostClient = exports.PostCommentClient = exports.PhotoClient = exports.OptionClient = exports.MigrationClient = exports.MenuClient = exports.MailClient = exports.LogClient = exports.LinkClient = exports.JournalClient = exports.JournalCommentClient = exports.InstallationClient = exports.CategoryClient = exports.BackupClient = exports.AttachmentClient = void 0;
var AttachmentClient_1 = __webpack_require__(399);
Object.defineProperty(exports, "AttachmentClient", ({ enumerable: true, get: function () { return AttachmentClient_1.AttachmentClient; } }));
var BackupClient_1 = __webpack_require__(5260);
Object.defineProperty(exports, "BackupClient", ({ enumerable: true, get: function () { return BackupClient_1.BackupClient; } }));
var CategoryClient_1 = __webpack_require__(6774);
Object.defineProperty(exports, "CategoryClient", ({ enumerable: true, get: function () { return CategoryClient_1.CategoryClient; } }));
var InstallationClient_1 = __webpack_require__(8400);
Object.defineProperty(exports, "InstallationClient", ({ enumerable: true, get: function () { return InstallationClient_1.InstallationClient; } }));
var JournalCommentClient_1 = __webpack_require__(5503);
Object.defineProperty(exports, "JournalCommentClient", ({ enumerable: true, get: function () { return JournalCommentClient_1.JournalCommentClient; } }));
var JournalClient_1 = __webpack_require__(173);
Object.defineProperty(exports, "JournalClient", ({ enumerable: true, get: function () { return JournalClient_1.JournalClient; } }));
var LinkClient_1 = __webpack_require__(9207);
Object.defineProperty(exports, "LinkClient", ({ enumerable: true, get: function () { return LinkClient_1.LinkClient; } }));
var LogClient_1 = __webpack_require__(9842);
Object.defineProperty(exports, "LogClient", ({ enumerable: true, get: function () { return LogClient_1.LogClient; } }));
var MailClient_1 = __webpack_require__(7206);
Object.defineProperty(exports, "MailClient", ({ enumerable: true, get: function () { return MailClient_1.MailClient; } }));
var MenuClient_1 = __webpack_require__(7530);
Object.defineProperty(exports, "MenuClient", ({ enumerable: true, get: function () { return MenuClient_1.MenuClient; } }));
var MigrationClient_1 = __webpack_require__(9644);
Object.defineProperty(exports, "MigrationClient", ({ enumerable: true, get: function () { return MigrationClient_1.MigrationClient; } }));
var OptionClient_1 = __webpack_require__(3913);
Object.defineProperty(exports, "OptionClient", ({ enumerable: true, get: function () { return OptionClient_1.OptionClient; } }));
var PhotoClient_1 = __webpack_require__(402);
Object.defineProperty(exports, "PhotoClient", ({ enumerable: true, get: function () { return PhotoClient_1.PhotoClient; } }));
var PostCommentClient_1 = __webpack_require__(6494);
Object.defineProperty(exports, "PostCommentClient", ({ enumerable: true, get: function () { return PostCommentClient_1.PostCommentClient; } }));
var PostClient_1 = __webpack_require__(4682);
Object.defineProperty(exports, "PostClient", ({ enumerable: true, get: function () { return PostClient_1.PostClient; } }));
var SheetCommentClient_1 = __webpack_require__(6094);
Object.defineProperty(exports, "SheetCommentClient", ({ enumerable: true, get: function () { return SheetCommentClient_1.SheetCommentClient; } }));
var SheetClient_1 = __webpack_require__(771);
Object.defineProperty(exports, "SheetClient", ({ enumerable: true, get: function () { return SheetClient_1.SheetClient; } }));
var StatisticClient_1 = __webpack_require__(7922);
Object.defineProperty(exports, "StatisticClient", ({ enumerable: true, get: function () { return StatisticClient_1.StatisticClient; } }));
var TagClient_1 = __webpack_require__(4898);
Object.defineProperty(exports, "TagClient", ({ enumerable: true, get: function () { return TagClient_1.TagClient; } }));
var ThemeClient_1 = __webpack_require__(8842);
Object.defineProperty(exports, "ThemeClient", ({ enumerable: true, get: function () { return ThemeClient_1.ThemeClient; } }));
var UserClient_1 = __webpack_require__(5412);
Object.defineProperty(exports, "UserClient", ({ enumerable: true, get: function () { return UserClient_1.UserClient; } }));
var StaticStorageClient_1 = __webpack_require__(7742);
Object.defineProperty(exports, "StaticStorageClient", ({ enumerable: true, get: function () { return StaticStorageClient_1.StaticStorageClient; } }));
var CommentClient_1 = __webpack_require__(8666);
Object.defineProperty(exports, "CommentClient", ({ enumerable: true, get: function () { return CommentClient_1.CommentClient; } }));
var ActuatorClient_1 = __webpack_require__(6618);
Object.defineProperty(exports, "ActuatorClient", ({ enumerable: true, get: function () { return ActuatorClient_1.ActuatorClient; } }));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 5597:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthorizedClient = exports.AdminApiClient = void 0;
const tslib_1 = __webpack_require__(655);
var AdminApiClient_1 = __webpack_require__(6587);
Object.defineProperty(exports, "AdminApiClient", ({ enumerable: true, get: function () { return AdminApiClient_1.AdminApiClient; } }));
var AuthorizedClient_1 = __webpack_require__(6710);
Object.defineProperty(exports, "AuthorizedClient", ({ enumerable: true, get: function () { return AuthorizedClient_1.AuthorizedClient; } }));
tslib_1.__exportStar(__webpack_require__(5040), exports);
tslib_1.__exportStar(__webpack_require__(6904), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 6998:
/***/ (function(__unused_webpack_module, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.buildPath = void 0;
const buildPath = (params) => {
    const { endpointName, scope } = params;
    const scopePath = scope !== undefined ? `${scope}` : 'admin';
    return `/api/${scopePath}/${endpointName}`;
};
exports.buildPath = buildPath;
//# sourceMappingURL=url.js.map

/***/ }),

/***/ 9290:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.HaloRequestConfigBuilder = void 0;
const tslib_1 = __webpack_require__(655);
const form_data_1 = tslib_1.__importDefault(__webpack_require__(6230));
const qs_1 = tslib_1.__importDefault(__webpack_require__(129));
const js_base64_1 = __webpack_require__(9575);
const auth_1 = __webpack_require__(3622);
const platform_1 = __webpack_require__(8384);
const THRESHOLD_AVOID_REQUEST_URL_TOO_LARGE = 4096;
class HaloRequestConfigBuilder {
    constructor({ baseUrl, auth, basicAuth, clientCertAuth, proxy, userAgent, }) {
        this.baseUrl = baseUrl;
        this.auth = auth;
        this.headers = this.buildHeaders({ basicAuth, userAgent });
        this.clientCertAuth = clientCertAuth;
        this.proxy = proxy;
        this.requestToken = null;
    }
    build(method, path, params, options) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const requestConfig = Object.assign(Object.assign(Object.assign({ method, headers: this.headers, url: `${this.baseUrl}${path}` }, (options ? options : {})), platform_1.platformDeps.buildPlatformDependentConfig({
                clientCertAuth: this.clientCertAuth,
            })), { proxy: this.proxy });
            switch (method) {
                case 'get': {
                    const requestUrl = this.buildRequestUrl(path, params);
                    if (requestUrl.length > THRESHOLD_AVOID_REQUEST_URL_TOO_LARGE) {
                        return Object.assign(Object.assign({}, requestConfig), { method: 'post', headers: Object.assign(Object.assign({}, this.headers), { 'X-HTTP-Method-Override': 'GET' }), data: yield this.buildData(params) });
                    }
                    return Object.assign(Object.assign({}, requestConfig), { url: requestUrl });
                }
                case 'post': {
                    if (params instanceof form_data_1.default) {
                        const formData = yield this.buildData(params);
                        return Object.assign(Object.assign({}, requestConfig), { headers: 
                            // NOTE: formData.getHeaders does not exist in a browser environment.
                            typeof formData.getHeaders === 'function' ? Object.assign(Object.assign({}, this.headers), formData.getHeaders()) : this.headers, data: formData });
                    }
                    return Object.assign(Object.assign({}, requestConfig), { data: yield this.buildData(params) });
                }
                case 'put': {
                    return Object.assign(Object.assign({}, requestConfig), { data: yield this.buildData(params) });
                }
                case 'delete': {
                    if (params instanceof Array) {
                        return Object.assign(Object.assign({}, requestConfig), { headers: this.headers, data: params });
                    }
                    const requestUrl = this.buildRequestUrl(path, yield this.buildData(params));
                    return Object.assign(Object.assign({}, requestConfig), { url: requestUrl });
                }
                default: {
                    throw new Error(`${method} method is not supported`);
                }
            }
        });
    }
    buildRequestUrl(path, params) {
        const requestUrl = `${this.baseUrl}${path}`;
        const query = qs_1.default.stringify(params, { indices: false });
        return query ? `${requestUrl}?${query}` : requestUrl;
    }
    buildData(params) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (this.auth && this.auth.type === 'session') {
                const requestToken = yield this.getRequestToken();
                if (params instanceof form_data_1.default) {
                    params.append(auth_1.SESSION_TOKEN_KEY, requestToken);
                    return params;
                }
                return Object.assign({ [auth_1.SESSION_TOKEN_KEY]: requestToken }, params);
            }
            return params;
        });
    }
    buildHeaders(params) {
        const { basicAuth, userAgent } = params;
        const basicAuthHeaders = basicAuth
            ? {
                Authorization: `Basic ${js_base64_1.Base64.encode(`${basicAuth.username}:${basicAuth.password}`)}`,
            }
            : {};
        const platformDepsHeaders = platform_1.platformDeps.buildHeaders({ userAgent });
        const commonHeaders = Object.assign(Object.assign({}, platformDepsHeaders), basicAuthHeaders);
        if (!this.auth) {
            return {};
        }
        switch (this.auth.type) {
            case 'password': {
                return Object.assign(Object.assign({}, commonHeaders), { Authorization: js_base64_1.Base64.encode(`${this.auth.username}:${this.auth.password}`) });
            }
            case 'adminToken': {
                const adminToken = this.auth.adminToken;
                return Object.assign(Object.assign({}, commonHeaders), { 'Admin-Authorization': adminToken });
            }
            case 'apiToken': {
                const apiToken = this.auth.apiToken;
                if (Array.isArray(apiToken)) {
                    return Object.assign(Object.assign({}, commonHeaders), { 'API-Authorization': apiToken.join(',') });
                }
                return Object.assign(Object.assign({}, commonHeaders), { 'API-Authorization': apiToken });
            }
            case 'oAuthToken': {
                return Object.assign(Object.assign({}, commonHeaders), { Authorization: `Bearer ${this.auth.oAuthToken}` });
            }
            case 'customizeAuth': {
                return Object.assign(Object.assign({}, commonHeaders), { [this.auth.authHeader]: this.auth.getToken() });
            }
            default: {
                // https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest
                return Object.assign(Object.assign({}, commonHeaders), { 'X-Requested-With': 'XMLHttpRequest' });
            }
        }
    }
    getRequestToken() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (this.requestToken === null) {
                this.requestToken = yield platform_1.platformDeps.getRequestToken();
            }
            return this.requestToken;
        });
    }
}
exports.HaloRequestConfigBuilder = HaloRequestConfigBuilder;
//# sourceMappingURL=HaloRequestConfigBuilder.js.map

/***/ }),

/***/ 2862:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.HaloResponseHandler = void 0;
const tslib_1 = __webpack_require__(655);
const HaloRestAPIError_1 = __webpack_require__(2284);
class HaloResponseHandler {
    handle(response) {
        return response.then((res) => this.handleSuccessResponse(res), (error) => this.handleErrorResponse(error));
    }
    handleSuccessResponse(response) {
        return response.data;
    }
    handleErrorResponse(error) {
        if (!error.response) {
            // FIXME: find a better way to handle this error
            if (/MAC address verify failure/.test(error.toString())) {
                throw new Error('invalid clientCertAuth setting');
            }
            throw error;
        }
        const errorResponse = error.response;
        const { data } = errorResponse, rest = tslib_1.__rest(errorResponse, ["data"]);
        if (typeof data === 'string') {
            throw new Error(`${rest.status}: ${rest.statusText}`);
        }
        throw new HaloRestAPIError_1.HaloRestAPIError(Object.assign({ data }, rest));
    }
}
exports.HaloResponseHandler = HaloResponseHandler;
//# sourceMappingURL=HaloResponseHandler.js.map

/***/ }),

/***/ 3388:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.HaloRestAPIClient = void 0;
const http_1 = __webpack_require__(2992);
const HaloRequestConfigBuilder_1 = __webpack_require__(9290);
const HaloResponseHandler_1 = __webpack_require__(2862);
const platform_1 = __webpack_require__(8384);
const buildDiscriminatedAuth = (auth) => {
    if ('username' in auth) {
        return Object.assign({ type: 'password' }, auth);
    }
    if ('apiToken' in auth) {
        return Object.assign({ type: 'apiToken' }, auth);
    }
    if ('adminToken' in auth) {
        return Object.assign({ type: 'adminToken' }, auth);
    }
    if ('oAuthToken' in auth) {
        return Object.assign({ type: 'oAuthToken' }, auth);
    }
    if ('type' in auth && auth['type'] == 'customizeAuth') {
        return auth;
    }
    return undefined;
};
class HaloRestAPIClient {
    constructor(options = {}) {
        var _a;
        this.baseUrl = platform_1.platformDeps.buildBaseUrl(options.baseUrl);
        const auth = buildDiscriminatedAuth((_a = options.auth) !== null && _a !== void 0 ? _a : {});
        const requestConfigBuilder = new HaloRequestConfigBuilder_1.HaloRequestConfigBuilder(Object.assign(Object.assign({}, options), { baseUrl: this.baseUrl, auth }));
        const responseHandler = new HaloResponseHandler_1.HaloResponseHandler();
        this.httpClient = new http_1.DefaultHttpClient({
            responseHandler,
            requestConfigBuilder,
        });
        this._interceptors = this.httpClient.interceptors;
    }
    static get version() {
        return platform_1.platformDeps.getVersion();
    }
    get interceptors() {
        return this._interceptors;
    }
    getBaseUrl() {
        return this.baseUrl;
    }
    buildHttpClient() {
        return this.httpClient;
    }
}
exports.HaloRestAPIClient = HaloRestAPIClient;
//# sourceMappingURL=HaloRestAPIClient.js.map

/***/ }),

/***/ 2284:
/***/ (function(__unused_webpack_module, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.HaloRestAPIError = void 0;
class HaloRestAPIError extends Error {
    constructor(error) {
        const { data } = HaloRestAPIError.buildErrorResponseDate(error);
        super(data.message);
        this.name = 'HaloRestAPIError';
        this.data = data;
        this.status = data.status;
        this.headers = error.headers;
        this.message = `[${this.status}] ${this.message}`;
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error#Custom_Error_Types
        // Maintains proper stack trace for where our error was thrown (only available on V8)
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, HaloRestAPIError);
        }
        // https://github.com/Microsoft/TypeScript/wiki/Breaking-Changes#extending-built-ins-like-error-array-and-map-may-no-longer-work
        // Set the prototype explicitly.
        Object.setPrototypeOf(this, HaloRestAPIError.prototype);
    }
    static buildErrorResponseDate(error) {
        // improvable
        return { data: error.data };
    }
}
exports.HaloRestAPIError = HaloRestAPIError;
//# sourceMappingURL=HaloRestAPIError.js.map

/***/ }),

/***/ 1638:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AxiosClient = void 0;
const tslib_1 = __webpack_require__(655);
const axios_1 = tslib_1.__importDefault(__webpack_require__(9669));
const InterceptorManager_1 = __webpack_require__(6008);
class AxiosClient {
    constructor({ responseHandler, requestConfigBuilder, }) {
        this.responseHandler = responseHandler;
        this.requestConfigBuilder = requestConfigBuilder;
        this.interceptors = {
            request: new InterceptorManager_1.RequestInterceptor(),
            response: new InterceptorManager_1.ResponseInterceptor(),
        };
    }
    get(path, params) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const requestConfig = yield this.requestConfigBuilder.build('get', path, params);
            return this.sendRequest(requestConfig);
        });
    }
    getData(path, params) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const requestConfig = yield this.requestConfigBuilder.build('get', path, params, {
                responseType: 'arraybuffer',
            });
            return this.sendRequest(requestConfig);
        });
    }
    post(path, params, options) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const requestConfig = yield this.requestConfigBuilder.build('post', path, params, options);
            return this.sendRequest(requestConfig);
        });
    }
    postData(path, formData) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const requestConfig = yield this.requestConfigBuilder.build('post', path, formData);
            return this.sendRequest(requestConfig);
        });
    }
    put(path, params, options) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const requestConfig = yield this.requestConfigBuilder.build('put', path, params, options);
            return this.sendRequest(requestConfig);
        });
    }
    delete(path, params, options) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const requestConfig = yield this.requestConfigBuilder.build('delete', path, params, options);
            return this.sendRequest(requestConfig);
        });
    }
    sendRequest(requestConfig) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.responseHandler.handle(
            // eslint-disable-next-line new-cap
            (0, axios_1.default)(Object.assign(Object.assign({}, requestConfig), { 
                // NOTE: For defining the max size of the http request content, `maxBodyLength` will be used after version 0.20.0.
                // `maxContentLength` will be still needed for defining the max size of the http response content.
                // ref: https://github.com/axios/axios/pull/2781/files
                // maxBodyLength: Infinity,
                maxContentLength: Infinity })));
        });
    }
}
exports.AxiosClient = AxiosClient;
//# sourceMappingURL=AxiosClient.js.map

/***/ }),

/***/ 6008:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ResponseInterceptor = exports.RequestInterceptor = void 0;
const tslib_1 = __webpack_require__(655);
const axios_1 = tslib_1.__importDefault(__webpack_require__(9669));
class RequestInterceptor {
    use(resolved, rejected) {
        return axios_1.default.interceptors.request.use(resolved, rejected);
    }
    eject(id) {
        axios_1.default.interceptors.request.eject(id);
    }
}
exports.RequestInterceptor = RequestInterceptor;
class ResponseInterceptor {
    use(resolved, rejected) {
        return axios_1.default.interceptors.response.use(resolved, rejected);
    }
    eject(id) {
        axios_1.default.interceptors.response.eject(id);
    }
}
exports.ResponseInterceptor = ResponseInterceptor;
//# sourceMappingURL=InterceptorManager.js.map

/***/ }),

/***/ 2992:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DefaultHttpClient = void 0;
var AxiosClient_1 = __webpack_require__(1638);
Object.defineProperty(exports, "DefaultHttpClient", ({ enumerable: true, get: function () { return AxiosClient_1.AxiosClient; } }));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 5040:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Axios = exports.FormData = exports.DefaultHttpClient = exports.HaloRequestConfigBuilder = exports.HaloResponseHandler = exports.HaloRestAPIClient = void 0;
const tslib_1 = __webpack_require__(655);
const platform_1 = __webpack_require__(8384);
const browserDeps = tslib_1.__importStar(__webpack_require__(5792));
const form_data_1 = tslib_1.__importDefault(__webpack_require__(6230));
exports.FormData = form_data_1.default;
const axios_1 = tslib_1.__importDefault(__webpack_require__(9669));
exports.Axios = axios_1.default;
(0, platform_1.injectPlatformDeps)(browserDeps);
var HaloRestAPIClient_1 = __webpack_require__(3388);
Object.defineProperty(exports, "HaloRestAPIClient", ({ enumerable: true, get: function () { return HaloRestAPIClient_1.HaloRestAPIClient; } }));
var HaloResponseHandler_1 = __webpack_require__(2862);
Object.defineProperty(exports, "HaloResponseHandler", ({ enumerable: true, get: function () { return HaloResponseHandler_1.HaloResponseHandler; } }));
var HaloRequestConfigBuilder_1 = __webpack_require__(9290);
Object.defineProperty(exports, "HaloRequestConfigBuilder", ({ enumerable: true, get: function () { return HaloRequestConfigBuilder_1.HaloRequestConfigBuilder; } }));
var http_1 = __webpack_require__(2992);
Object.defineProperty(exports, "DefaultHttpClient", ({ enumerable: true, get: function () { return http_1.DefaultHttpClient; } }));
//# sourceMappingURL=index.browser.js.map

/***/ }),

/***/ 6703:
/***/ (function(__unused_webpack_module, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UnsupportedPlatformError = void 0;
class UnsupportedPlatformError extends Error {
    constructor(platform) {
        const message = `This function is not supported in ${platform} environment`;
        super(message);
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error#Custom_Error_Types
        // Maintains proper stack trace for where our error was thrown (only available on V8)
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, UnsupportedPlatformError);
        }
        this.name = 'UnsupportedPlatformError';
        this.platform = platform;
        // https://github.com/Microsoft/TypeScript/wiki/Breaking-Changes#extending-built-ins-like-error-array-and-map-may-no-longer-work
        // Set the prototype explicitly.
        Object.setPrototypeOf(this, UnsupportedPlatformError.prototype);
    }
}
exports.UnsupportedPlatformError = UnsupportedPlatformError;
//# sourceMappingURL=UnsupportedPlatformError.js.map

/***/ }),

/***/ 5792:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getVersion = exports.buildBaseUrl = exports.buildFormDataValue = exports.buildHeaders = exports.buildPlatformDependentConfig = exports.getDefaultAuth = exports.getRequestToken = exports.readFileFromPath = void 0;
const tslib_1 = __webpack_require__(655);
const UnsupportedPlatformError_1 = __webpack_require__(6703);
const readFileFromPath = () => {
    throw new UnsupportedPlatformError_1.UnsupportedPlatformError('Browser');
};
exports.readFileFromPath = readFileFromPath;
const getRequestToken = () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    if (typeof halo === 'object' && halo !== null && typeof halo.getRequestToken === 'function') {
        return halo.getRequestToken();
    }
    throw new Error('session authentication must specify a request token');
});
exports.getRequestToken = getRequestToken;
const getDefaultAuth = () => {
    return {
        type: 'session',
    };
};
exports.getDefaultAuth = getDefaultAuth;
const buildPlatformDependentConfig = () => {
    return {};
};
exports.buildPlatformDependentConfig = buildPlatformDependentConfig;
const buildHeaders = () => {
    return {};
};
exports.buildHeaders = buildHeaders;
const buildFormDataValue = (data) => {
    return new Blob([data]);
};
exports.buildFormDataValue = buildFormDataValue;
const buildBaseUrl = (baseUrl) => {
    if (typeof baseUrl === 'undefined') {
        throw new Error('in browser environment, baseUrl is required');
    }
    return baseUrl;
};
exports.buildBaseUrl = buildBaseUrl;
const getVersion = () => {
    return PACKAGE_VERSION;
};
exports.getVersion = getVersion;
//# sourceMappingURL=browser.js.map

/***/ }),

/***/ 8384:
/***/ (function(__unused_webpack_module, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.injectPlatformDeps = exports.platformDeps = void 0;
exports.platformDeps = {
    readFileFromPath: () => {
        throw new Error('not implemented');
    },
    getRequestToken: () => {
        throw new Error('not implemented');
    },
    getDefaultAuth: () => {
        throw new Error('not implemented');
    },
    buildPlatformDependentConfig: () => {
        throw new Error('not implemented');
    },
    buildHeaders: () => {
        throw new Error('not implemented');
    },
    buildFormDataValue: () => {
        throw new Error('not implemented');
    },
    buildBaseUrl: () => {
        throw new Error('not implemented');
    },
    getVersion: () => {
        throw new Error('not implemented');
    },
};
const injectPlatformDeps = (deps) => {
    exports.platformDeps.readFileFromPath = deps.readFileFromPath;
    exports.platformDeps.getRequestToken = deps.getRequestToken;
    exports.platformDeps.getDefaultAuth = deps.getDefaultAuth;
    exports.platformDeps.buildPlatformDependentConfig = deps.buildPlatformDependentConfig;
    exports.platformDeps.buildHeaders = deps.buildHeaders;
    exports.platformDeps.buildFormDataValue = deps.buildFormDataValue;
    exports.platformDeps.buildBaseUrl = deps.buildBaseUrl;
    exports.platformDeps.getVersion = deps.getVersion;
};
exports.injectPlatformDeps = injectPlatformDeps;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 3622:
/***/ (function(__unused_webpack_module, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SESSION_TOKEN_KEY = void 0;
exports.SESSION_TOKEN_KEY = '__REQUEST_TOKEN__';
//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 6838:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ContentApiClient = void 0;
const clients_1 = __webpack_require__(3891);
class ContentApiClient {
    constructor(client) {
        this.client = client.buildHttpClient();
        this._archive = new clients_1.ArchiveClient(this.client);
        this._category = new clients_1.CategoryClient(this.client);
        this._journal = new clients_1.JournalClient(this.client);
        this._link = new clients_1.LinkClient(this.client);
        this._menu = new clients_1.MenuClient(this.client);
        this._option = new clients_1.OptionClient(this.client);
        this._photo = new clients_1.PhotoClient(this.client);
        this._post = new clients_1.PostClient(this.client);
        this._sheet = new clients_1.SheetClient(this.client);
        this._statistic = new clients_1.StatisticClient(this.client);
        this._tag = new clients_1.TagClient(this.client);
        this._theme = new clients_1.ThemeClient(this.client);
        this._user = new clients_1.UserClient(this.client);
        this._comment = new clients_1.CommentClient(this.client);
    }
    get archive() {
        return this._archive;
    }
    get category() {
        return this._category;
    }
    get journal() {
        return this._journal;
    }
    get link() {
        return this._link;
    }
    get menu() {
        return this._menu;
    }
    get option() {
        return this._option;
    }
    get photo() {
        return this._photo;
    }
    get post() {
        return this._post;
    }
    get sheet() {
        return this._sheet;
    }
    get statistic() {
        return this._statistic;
    }
    get tag() {
        return this._tag;
    }
    get theme() {
        return this._theme;
    }
    get user() {
        return this._user;
    }
    get comment() {
        return this._comment;
    }
}
exports.ContentApiClient = ContentApiClient;
//# sourceMappingURL=ContentApiClient.js.map

/***/ }),

/***/ 9619:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ArchiveClient = void 0;
const url_1 = __webpack_require__(9489);
class ArchiveClient {
    constructor(client) {
        this.client = client;
    }
    listYearArchives() {
        const path = (0, url_1.buildPath)({
            endpointName: 'archives/years',
        });
        return this.client.get(path, {});
    }
    listMonthArchives() {
        const path = (0, url_1.buildPath)({
            endpointName: 'archives/years',
        });
        return this.client.get(path, {});
    }
}
exports.ArchiveClient = ArchiveClient;
//# sourceMappingURL=ArchiveClient.js.map

/***/ }),

/***/ 413:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CategoryClient = void 0;
const url_1 = __webpack_require__(9489);
class CategoryClient {
    constructor(client) {
        this.client = client;
    }
    list(params) {
        const path = (0, url_1.buildPath)({
            endpointName: 'categories',
        });
        return this.client.get(path, Object.assign({}, params));
    }
    listPostBySlug(params) {
        const path = (0, url_1.buildPath)({
            endpointName: `categories/${params.slug}/posts`,
        });
        return this.client.get(path, Object.assign({}, params));
    }
}
exports.CategoryClient = CategoryClient;
//# sourceMappingURL=CategoryClient.js.map

/***/ }),

/***/ 7929:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CommentClient = void 0;
const url_1 = __webpack_require__(9489);
class CommentClient {
    constructor(client) {
        this.client = client;
    }
    /**
     * Get top comments
     *
     * @param target posts, sheets, or journals
     * @param targetId the id of the target
     * @param params optional query params
     */
    listTopComments(target, targetId, params) {
        const path = (0, url_1.buildPath)({
            endpointName: `${target}/${targetId}/comments/top_view`,
        });
        return this.client.get(path, Object.assign({}, params));
    }
    /**
     * Get children comments
     *
     * @param target posts, sheets, or journals
     * @param targetId the id of the target
     * @param commentId the id of the top comment
     * @param params optional query params
     */
    listChildren(target, targetId, commentId, params) {
        const path = (0, url_1.buildPath)({
            endpointName: `${target}/${targetId}/comments/${commentId}/children`,
        });
        return this.client.get(path, Object.assign({}, params));
    }
    /**
     * Get comments as tree view
     *
     * @param target posts, sheets, or journals
     * @param targetId the id of the target
     * @param params optional query params
     */
    listAsTreeView(target, targetId, params) {
        const path = (0, url_1.buildPath)({
            endpointName: `${target}/${targetId}/comments/tree_view`,
        });
        return this.client.get(path, Object.assign({}, params));
    }
    /**
     * Get comments as list view
     *
     * @param target posts, sheets, or journals
     * @param targetId the id of the target
     * @param params optional query params
     */
    listAsView(target, targetId, params) {
        const path = (0, url_1.buildPath)({
            endpointName: `${target}/${targetId}/comments/list_view`,
        });
        return this.client.get(path, Object.assign({}, params));
    }
    /**
     * Create a comment
     *
     * @param target posts, sheets, or journals
     * @param params the comment params
     */
    create(target, params) {
        const path = (0, url_1.buildPath)({
            endpointName: `${target}/comments`,
        });
        return this.client.post(path, params);
    }
}
exports.CommentClient = CommentClient;
//# sourceMappingURL=CommentClient.js.map

/***/ }),

/***/ 3313:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.JournalClient = void 0;
const tslib_1 = __webpack_require__(655);
const url_1 = __webpack_require__(9489);
class JournalClient {
    constructor(client) {
        this.client = client;
    }
    list() {
        const path = (0, url_1.buildPath)({
            endpointName: 'journals',
        });
        return this.client.get(path, {});
    }
    get(journalId) {
        const path = (0, url_1.buildPath)({
            endpointName: `journals/${journalId}`,
        });
        return this.client.get(path, {});
    }
    like(journalId) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const path = (0, url_1.buildPath)({
                endpointName: `journals/${journalId}/likes`,
            });
            yield this.client.post(path, {});
        });
    }
}
exports.JournalClient = JournalClient;
//# sourceMappingURL=JournalClient.js.map

/***/ }),

/***/ 8241:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LinkClient = void 0;
const url_1 = __webpack_require__(9489);
class LinkClient {
    constructor(client) {
        this.client = client;
    }
    list(sort) {
        const path = (0, url_1.buildPath)({
            endpointName: 'links',
        });
        return this.client.get(path, { sort });
    }
    listTeams(sort) {
        const path = (0, url_1.buildPath)({
            endpointName: 'links/team_view',
        });
        return this.client.get(path, { sort });
    }
}
exports.LinkClient = LinkClient;
//# sourceMappingURL=LinkClient.js.map

/***/ }),

/***/ 428:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MenuClient = void 0;
const url_1 = __webpack_require__(9489);
class MenuClient {
    constructor(client) {
        this.client = client;
    }
    list(sort) {
        const path = (0, url_1.buildPath)({
            endpointName: 'menus',
        });
        return this.client.get(path, { sort });
    }
    listAsTreeView(sort) {
        const path = (0, url_1.buildPath)({
            endpointName: 'menus/tree_view',
        });
        return this.client.get(path, { sort });
    }
}
exports.MenuClient = MenuClient;
//# sourceMappingURL=MenuClient.js.map

/***/ }),

/***/ 3664:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OptionClient = void 0;
const url_1 = __webpack_require__(9489);
class OptionClient {
    constructor(client) {
        this.client = client;
    }
    list() {
        const path = (0, url_1.buildPath)({
            endpointName: 'options/list_view',
        });
        return this.client.get(path, {});
    }
    listAsMapView(key) {
        const path = (0, url_1.buildPath)({
            endpointName: 'options/map_view',
        });
        return this.client.get(path, { key });
    }
    getByKey(key) {
        const path = (0, url_1.buildPath)({
            endpointName: `options/keys/${key}`,
        });
        return this.client.get(path, { key });
    }
    comment() {
        const path = (0, url_1.buildPath)({
            endpointName: 'options/comment',
        });
        return this.client.get(path, {});
    }
}
exports.OptionClient = OptionClient;
//# sourceMappingURL=OptionClient.js.map

/***/ }),

/***/ 4353:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PhotoClient = void 0;
const url_1 = __webpack_require__(9489);
class PhotoClient {
    constructor(client) {
        this.client = client;
    }
    latest(sort) {
        const path = (0, url_1.buildPath)({
            endpointName: 'photos/latest',
        });
        return this.client.get(path, { sort });
    }
    list(params) {
        const path = (0, url_1.buildPath)({
            endpointName: 'photos',
        });
        return this.client.get(path, Object.assign({}, params));
    }
}
exports.PhotoClient = PhotoClient;
//# sourceMappingURL=PhotoClient.js.map

/***/ }),

/***/ 2312:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PostClient = void 0;
const tslib_1 = __webpack_require__(655);
const url_1 = __webpack_require__(9489);
class PostClient {
    constructor(client) {
        this.client = client;
    }
    list(params, keyword, categoryId) {
        const path = (0, url_1.buildPath)({
            endpointName: 'posts',
        });
        return this.client.get(path, Object.assign({ keyword, categoryId }, params));
    }
    search(keyword, pageQuery) {
        const path = (0, url_1.buildPath)({
            endpointName: 'posts/search',
        });
        return this.client.get(path, Object.assign({ keyword }, pageQuery));
    }
    get(postId, params) {
        const path = (0, url_1.buildPath)({
            endpointName: `posts/${postId}`,
        });
        return this.client.get(path, Object.assign({}, params));
    }
    getBySlug(slug, params) {
        const path = (0, url_1.buildPath)({
            endpointName: 'posts/slug',
        });
        return this.client.get(path, Object.assign({ slug }, params));
    }
    getPrevPostById(postId) {
        const path = (0, url_1.buildPath)({
            endpointName: `posts/${postId}/prev`,
        });
        return this.client.get(path, {});
    }
    getNextPostById(postId) {
        const path = (0, url_1.buildPath)({
            endpointName: `posts/${postId}/next`,
        });
        return this.client.get(path, {});
    }
    like(postId) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const path = (0, url_1.buildPath)({
                endpointName: `posts/${postId}/likes`,
            });
            yield this.client.get(path, {});
        });
    }
}
exports.PostClient = PostClient;
//# sourceMappingURL=PostClient.js.map

/***/ }),

/***/ 6490:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SheetClient = void 0;
const url_1 = __webpack_require__(9489);
class SheetClient {
    constructor(client) {
        this.client = client;
    }
    list(params) {
        const path = (0, url_1.buildPath)({
            endpointName: 'sheets',
        });
        return this.client.get(path, Object.assign({}, params));
    }
    get(sheetId, params) {
        const path = (0, url_1.buildPath)({
            endpointName: `sheets/${sheetId}`,
        });
        return this.client.get(path, Object.assign({}, params));
    }
    getBySlug(slug, params) {
        const path = (0, url_1.buildPath)({
            endpointName: 'sheets/slug',
        });
        return this.client.get(path, Object.assign({ slug }, params));
    }
}
exports.SheetClient = SheetClient;
//# sourceMappingURL=SheetClient.js.map

/***/ }),

/***/ 8435:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.StatisticClient = void 0;
const url_1 = __webpack_require__(9489);
class StatisticClient {
    constructor(client) {
        this.client = client;
    }
    statistics() {
        const path = (0, url_1.buildPath)({
            endpointName: 'statistics',
        });
        return this.client.get(path, {});
    }
    statisticsWithUser() {
        const path = (0, url_1.buildPath)({
            endpointName: 'statistics/user',
        });
        return this.client.get(path, {});
    }
}
exports.StatisticClient = StatisticClient;
//# sourceMappingURL=StatisticClient.js.map

/***/ }),

/***/ 2367:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TagClient = void 0;
const url_1 = __webpack_require__(9489);
class TagClient {
    constructor(client) {
        this.client = client;
    }
    list(params) {
        const path = (0, url_1.buildPath)({
            endpointName: 'tags',
        });
        return this.client.get(path, Object.assign({}, params));
    }
    listPostsBySlug(slug, params) {
        const path = (0, url_1.buildPath)({
            endpointName: `tags/${slug}/posts`,
        });
        return this.client.get(path, Object.assign({}, params));
    }
}
exports.TagClient = TagClient;
//# sourceMappingURL=TagClient.js.map

/***/ }),

/***/ 9895:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ThemeClient = void 0;
const url_1 = __webpack_require__(9489);
class ThemeClient {
    constructor(client) {
        this.client = client;
    }
    getProperty() {
        const path = (0, url_1.buildPath)({
            endpointName: 'themes/activation',
        });
        return this.client.get(path, {});
    }
    listSettings() {
        const path = (0, url_1.buildPath)({
            endpointName: 'themes/activation/settings',
        });
        return this.client.get(path, {});
    }
    getPropertyById(themeId) {
        const path = (0, url_1.buildPath)({
            endpointName: `themes/${themeId}`,
        });
        return this.client.get(path, {});
    }
    listSettingsById(themeId) {
        const path = (0, url_1.buildPath)({
            endpointName: `themes/${themeId}/settings`,
        });
        return this.client.get(path, {});
    }
}
exports.ThemeClient = ThemeClient;
//# sourceMappingURL=ThemeClient.js.map

/***/ }),

/***/ 2849:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserClient = void 0;
const url_1 = __webpack_require__(9489);
class UserClient {
    constructor(client) {
        this.client = client;
    }
    getProfile() {
        const path = (0, url_1.buildPath)({
            endpointName: 'users/profile',
        });
        return this.client.get(path, {});
    }
}
exports.UserClient = UserClient;
//# sourceMappingURL=UserClient.js.map

/***/ }),

/***/ 3891:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CommentClient = exports.UserClient = exports.ThemeClient = exports.TagClient = exports.StatisticClient = exports.SheetClient = exports.PostClient = exports.PhotoClient = exports.OptionClient = exports.MenuClient = exports.LinkClient = exports.JournalClient = exports.CategoryClient = exports.ArchiveClient = void 0;
var ArchiveClient_1 = __webpack_require__(9619);
Object.defineProperty(exports, "ArchiveClient", ({ enumerable: true, get: function () { return ArchiveClient_1.ArchiveClient; } }));
var CategoryClient_1 = __webpack_require__(413);
Object.defineProperty(exports, "CategoryClient", ({ enumerable: true, get: function () { return CategoryClient_1.CategoryClient; } }));
var JournalClient_1 = __webpack_require__(3313);
Object.defineProperty(exports, "JournalClient", ({ enumerable: true, get: function () { return JournalClient_1.JournalClient; } }));
var LinkClient_1 = __webpack_require__(8241);
Object.defineProperty(exports, "LinkClient", ({ enumerable: true, get: function () { return LinkClient_1.LinkClient; } }));
var MenuClient_1 = __webpack_require__(428);
Object.defineProperty(exports, "MenuClient", ({ enumerable: true, get: function () { return MenuClient_1.MenuClient; } }));
var OptionClient_1 = __webpack_require__(3664);
Object.defineProperty(exports, "OptionClient", ({ enumerable: true, get: function () { return OptionClient_1.OptionClient; } }));
var PhotoClient_1 = __webpack_require__(4353);
Object.defineProperty(exports, "PhotoClient", ({ enumerable: true, get: function () { return PhotoClient_1.PhotoClient; } }));
var PostClient_1 = __webpack_require__(2312);
Object.defineProperty(exports, "PostClient", ({ enumerable: true, get: function () { return PostClient_1.PostClient; } }));
var SheetClient_1 = __webpack_require__(6490);
Object.defineProperty(exports, "SheetClient", ({ enumerable: true, get: function () { return SheetClient_1.SheetClient; } }));
var StatisticClient_1 = __webpack_require__(8435);
Object.defineProperty(exports, "StatisticClient", ({ enumerable: true, get: function () { return StatisticClient_1.StatisticClient; } }));
var TagClient_1 = __webpack_require__(2367);
Object.defineProperty(exports, "TagClient", ({ enumerable: true, get: function () { return TagClient_1.TagClient; } }));
var ThemeClient_1 = __webpack_require__(9895);
Object.defineProperty(exports, "ThemeClient", ({ enumerable: true, get: function () { return ThemeClient_1.ThemeClient; } }));
var UserClient_1 = __webpack_require__(2849);
Object.defineProperty(exports, "UserClient", ({ enumerable: true, get: function () { return UserClient_1.UserClient; } }));
var CommentClient_1 = __webpack_require__(7929);
Object.defineProperty(exports, "CommentClient", ({ enumerable: true, get: function () { return CommentClient_1.CommentClient; } }));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 3977:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ContentApiClient = void 0;
const tslib_1 = __webpack_require__(655);
var ContentApiClient_1 = __webpack_require__(6838);
Object.defineProperty(exports, "ContentApiClient", ({ enumerable: true, get: function () { return ContentApiClient_1.ContentApiClient; } }));
(0, tslib_1.__exportStar)(__webpack_require__(920), exports);
(0, tslib_1.__exportStar)(__webpack_require__(3356), exports);
(0, tslib_1.__exportStar)(__webpack_require__(3891), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 3356:
/***/ (function(__unused_webpack_module, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 9489:
/***/ (function(__unused_webpack_module, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.buildPath = void 0;
const buildPath = (params) => {
    const { endpointName, scope } = params;
    const scopePath = scope !== undefined ? `${scope}` : 'content';
    return `/api/${scopePath}/${endpointName}`;
};
exports.buildPath = buildPath;
//# sourceMappingURL=url.js.map

/***/ }),

/***/ 5668:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.HaloRequestConfigBuilder = void 0;
const tslib_1 = __webpack_require__(655);
const form_data_1 = (0, tslib_1.__importDefault)(__webpack_require__(6230));
const qs_1 = (0, tslib_1.__importDefault)(__webpack_require__(129));
const js_base64_1 = __webpack_require__(9575);
const auth_1 = __webpack_require__(3064);
const platform_1 = __webpack_require__(6595);
const THRESHOLD_AVOID_REQUEST_URL_TOO_LARGE = 4096;
class HaloRequestConfigBuilder {
    constructor({ baseUrl, auth, basicAuth, clientCertAuth, proxy, userAgent, }) {
        this.baseUrl = baseUrl;
        this.auth = auth;
        this.headers = this.buildHeaders({ basicAuth, userAgent });
        this.clientCertAuth = clientCertAuth;
        this.proxy = proxy;
        this.requestToken = null;
    }
    build(method, path, params, options) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const requestConfig = Object.assign(Object.assign(Object.assign({ method, headers: this.headers, url: `${this.baseUrl}${path}` }, (options ? options : {})), platform_1.platformDeps.buildPlatformDependentConfig({
                clientCertAuth: this.clientCertAuth,
            })), { proxy: this.proxy });
            switch (method) {
                case 'get': {
                    const requestUrl = this.buildRequestUrl(path, params);
                    if (requestUrl.length > THRESHOLD_AVOID_REQUEST_URL_TOO_LARGE) {
                        return Object.assign(Object.assign({}, requestConfig), { method: 'post', headers: Object.assign(Object.assign({}, this.headers), { 'X-HTTP-Method-Override': 'GET' }), data: yield this.buildData(params) });
                    }
                    return Object.assign(Object.assign({}, requestConfig), { url: requestUrl });
                }
                case 'post': {
                    if (params instanceof form_data_1.default) {
                        const formData = yield this.buildData(params);
                        return Object.assign(Object.assign({}, requestConfig), { headers: 
                            // NOTE: formData.getHeaders does not exist in a browser environment.
                            typeof formData.getHeaders === 'function' ? Object.assign(Object.assign({}, this.headers), formData.getHeaders()) : this.headers, data: formData });
                    }
                    return Object.assign(Object.assign({}, requestConfig), { data: yield this.buildData(params) });
                }
                case 'put': {
                    return Object.assign(Object.assign({}, requestConfig), { data: yield this.buildData(params) });
                }
                case 'delete': {
                    if (params instanceof Array) {
                        return Object.assign(Object.assign({}, requestConfig), { headers: this.headers, data: params });
                    }
                    const requestUrl = this.buildRequestUrl(path, yield this.buildData(params));
                    return Object.assign(Object.assign({}, requestConfig), { url: requestUrl });
                }
                default: {
                    throw new Error(`${method} method is not supported`);
                }
            }
        });
    }
    buildRequestUrl(path, params) {
        const requestUrl = `${this.baseUrl}${path}`;
        const query = qs_1.default.stringify(params, { indices: false });
        return query ? `${requestUrl}?${query}` : requestUrl;
    }
    buildData(params) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            if (this.auth && this.auth.type === 'session') {
                const requestToken = yield this.getRequestToken();
                if (params instanceof form_data_1.default) {
                    params.append(auth_1.SESSION_TOKEN_KEY, requestToken);
                    return params;
                }
                return Object.assign({ [auth_1.SESSION_TOKEN_KEY]: requestToken }, params);
            }
            return params;
        });
    }
    buildHeaders(params) {
        const { basicAuth, userAgent } = params;
        const basicAuthHeaders = basicAuth
            ? {
                Authorization: `Basic ${js_base64_1.Base64.encode(`${basicAuth.username}:${basicAuth.password}`)}`,
            }
            : {};
        const platformDepsHeaders = platform_1.platformDeps.buildHeaders({ userAgent });
        const commonHeaders = Object.assign(Object.assign({}, platformDepsHeaders), basicAuthHeaders);
        if (!this.auth) {
            return {};
        }
        switch (this.auth.type) {
            case 'password': {
                return Object.assign(Object.assign({}, commonHeaders), { Authorization: js_base64_1.Base64.encode(`${this.auth.username}:${this.auth.password}`) });
            }
            case 'adminToken': {
                const adminToken = this.auth.adminToken;
                return Object.assign(Object.assign({}, commonHeaders), { 'Admin-Authorization': adminToken });
            }
            case 'apiToken': {
                const apiToken = this.auth.apiToken;
                if (Array.isArray(apiToken)) {
                    return Object.assign(Object.assign({}, commonHeaders), { 'API-Authorization': apiToken.join(',') });
                }
                return Object.assign(Object.assign({}, commonHeaders), { 'API-Authorization': apiToken });
            }
            case 'oAuthToken': {
                return Object.assign(Object.assign({}, commonHeaders), { Authorization: `Bearer ${this.auth.oAuthToken}` });
            }
            case 'customizeAuth': {
                return Object.assign(Object.assign({}, commonHeaders), { [this.auth.authHeader]: this.auth.getToken() });
            }
            default: {
                // https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest
                return Object.assign(Object.assign({}, commonHeaders), { 'X-Requested-With': 'XMLHttpRequest' });
            }
        }
    }
    getRequestToken() {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            if (this.requestToken === null) {
                this.requestToken = yield platform_1.platformDeps.getRequestToken();
            }
            return this.requestToken;
        });
    }
}
exports.HaloRequestConfigBuilder = HaloRequestConfigBuilder;
//# sourceMappingURL=HaloRequestConfigBuilder.js.map

/***/ }),

/***/ 8867:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.HaloResponseHandler = void 0;
const tslib_1 = __webpack_require__(655);
const HaloRestAPIError_1 = __webpack_require__(2203);
class HaloResponseHandler {
    handle(response) {
        return response.then((res) => this.handleSuccessResponse(res), (error) => this.handleErrorResponse(error));
    }
    handleSuccessResponse(response) {
        return response.data;
    }
    handleErrorResponse(error) {
        if (!error.response) {
            // FIXME: find a better way to handle this error
            if (/MAC address verify failure/.test(error.toString())) {
                throw new Error('invalid clientCertAuth setting');
            }
            throw error;
        }
        const errorResponse = error.response;
        const { data } = errorResponse, rest = (0, tslib_1.__rest)(errorResponse, ["data"]);
        if (typeof data === 'string') {
            throw new Error(`${rest.status}: ${rest.statusText}`);
        }
        throw new HaloRestAPIError_1.HaloRestAPIError(Object.assign({ data }, rest));
    }
}
exports.HaloResponseHandler = HaloResponseHandler;
//# sourceMappingURL=HaloResponseHandler.js.map

/***/ }),

/***/ 9230:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.HaloRestAPIClient = void 0;
const http_1 = __webpack_require__(5208);
const HaloRequestConfigBuilder_1 = __webpack_require__(5668);
const HaloResponseHandler_1 = __webpack_require__(8867);
const platform_1 = __webpack_require__(6595);
const buildDiscriminatedAuth = (auth) => {
    if ('username' in auth) {
        return Object.assign({ type: 'password' }, auth);
    }
    if ('apiToken' in auth) {
        return Object.assign({ type: 'apiToken' }, auth);
    }
    if ('adminToken' in auth) {
        return Object.assign({ type: 'adminToken' }, auth);
    }
    if ('oAuthToken' in auth) {
        return Object.assign({ type: 'oAuthToken' }, auth);
    }
    if ('type' in auth && auth['type'] == 'customizeAuth') {
        return auth;
    }
    return undefined;
};
class HaloRestAPIClient {
    constructor(options = {}) {
        var _a;
        this.baseUrl = platform_1.platformDeps.buildBaseUrl(options.baseUrl);
        const auth = buildDiscriminatedAuth((_a = options.auth) !== null && _a !== void 0 ? _a : {});
        const requestConfigBuilder = new HaloRequestConfigBuilder_1.HaloRequestConfigBuilder(Object.assign(Object.assign({}, options), { baseUrl: this.baseUrl, auth }));
        const responseHandler = new HaloResponseHandler_1.HaloResponseHandler();
        this.httpClient = new http_1.DefaultHttpClient({
            responseHandler,
            requestConfigBuilder,
        });
        this._interceptors = this.httpClient.interceptors;
    }
    static get version() {
        return platform_1.platformDeps.getVersion();
    }
    get interceptors() {
        return this._interceptors;
    }
    getBaseUrl() {
        return this.baseUrl;
    }
    buildHttpClient() {
        return this.httpClient;
    }
}
exports.HaloRestAPIClient = HaloRestAPIClient;
//# sourceMappingURL=HaloRestAPIClient.js.map

/***/ }),

/***/ 2203:
/***/ (function(__unused_webpack_module, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.HaloRestAPIError = void 0;
class HaloRestAPIError extends Error {
    constructor(error) {
        const { data } = HaloRestAPIError.buildErrorResponseDate(error);
        super(data.message);
        this.name = 'HaloRestAPIError';
        this.data = data;
        this.status = data.status;
        this.headers = error.headers;
        this.message = `[${this.status}] ${this.message}`;
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error#Custom_Error_Types
        // Maintains proper stack trace for where our error was thrown (only available on V8)
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, HaloRestAPIError);
        }
        // https://github.com/Microsoft/TypeScript/wiki/Breaking-Changes#extending-built-ins-like-error-array-and-map-may-no-longer-work
        // Set the prototype explicitly.
        Object.setPrototypeOf(this, HaloRestAPIError.prototype);
    }
    static buildErrorResponseDate(error) {
        // improvable
        return { data: error.data };
    }
}
exports.HaloRestAPIError = HaloRestAPIError;
//# sourceMappingURL=HaloRestAPIError.js.map

/***/ }),

/***/ 7518:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AxiosClient = void 0;
const tslib_1 = __webpack_require__(655);
const axios_1 = (0, tslib_1.__importDefault)(__webpack_require__(9669));
const InterceptorManager_1 = __webpack_require__(1916);
class AxiosClient {
    constructor({ responseHandler, requestConfigBuilder, }) {
        this.responseHandler = responseHandler;
        this.requestConfigBuilder = requestConfigBuilder;
        this.interceptors = {
            request: new InterceptorManager_1.RequestInterceptor(),
            response: new InterceptorManager_1.ResponseInterceptor(),
        };
    }
    get(path, params) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const requestConfig = yield this.requestConfigBuilder.build('get', path, params);
            return this.sendRequest(requestConfig);
        });
    }
    getData(path, params) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const requestConfig = yield this.requestConfigBuilder.build('get', path, params, {
                responseType: 'arraybuffer',
            });
            return this.sendRequest(requestConfig);
        });
    }
    post(path, params, options) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const requestConfig = yield this.requestConfigBuilder.build('post', path, params, options);
            return this.sendRequest(requestConfig);
        });
    }
    postData(path, formData) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const requestConfig = yield this.requestConfigBuilder.build('post', path, formData);
            return this.sendRequest(requestConfig);
        });
    }
    put(path, params, options) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const requestConfig = yield this.requestConfigBuilder.build('put', path, params, options);
            return this.sendRequest(requestConfig);
        });
    }
    delete(path, params, options) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const requestConfig = yield this.requestConfigBuilder.build('delete', path, params, options);
            return this.sendRequest(requestConfig);
        });
    }
    sendRequest(requestConfig) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            return this.responseHandler.handle(
            // eslint-disable-next-line new-cap
            (0, axios_1.default)(Object.assign(Object.assign({}, requestConfig), { 
                // NOTE: For defining the max size of the http request content, `maxBodyLength` will be used after version 0.20.0.
                // `maxContentLength` will be still needed for defining the max size of the http response content.
                // ref: https://github.com/axios/axios/pull/2781/files
                // maxBodyLength: Infinity,
                maxContentLength: Infinity })));
        });
    }
}
exports.AxiosClient = AxiosClient;
//# sourceMappingURL=AxiosClient.js.map

/***/ }),

/***/ 1916:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ResponseInterceptor = exports.RequestInterceptor = void 0;
const tslib_1 = __webpack_require__(655);
const axios_1 = (0, tslib_1.__importDefault)(__webpack_require__(9669));
class RequestInterceptor {
    use(resolved, rejected) {
        return axios_1.default.interceptors.request.use(resolved, rejected);
    }
    eject(id) {
        axios_1.default.interceptors.request.eject(id);
    }
}
exports.RequestInterceptor = RequestInterceptor;
class ResponseInterceptor {
    use(resolved, rejected) {
        return axios_1.default.interceptors.response.use(resolved, rejected);
    }
    eject(id) {
        axios_1.default.interceptors.response.eject(id);
    }
}
exports.ResponseInterceptor = ResponseInterceptor;
//# sourceMappingURL=InterceptorManager.js.map

/***/ }),

/***/ 5208:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DefaultHttpClient = void 0;
var AxiosClient_1 = __webpack_require__(7518);
Object.defineProperty(exports, "DefaultHttpClient", ({ enumerable: true, get: function () { return AxiosClient_1.AxiosClient; } }));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 920:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Axios = exports.FormData = exports.DefaultHttpClient = exports.HaloRequestConfigBuilder = exports.HaloResponseHandler = exports.HaloRestAPIClient = void 0;
const tslib_1 = __webpack_require__(655);
const platform_1 = __webpack_require__(6595);
const browserDeps = (0, tslib_1.__importStar)(__webpack_require__(4014));
const form_data_1 = (0, tslib_1.__importDefault)(__webpack_require__(6230));
exports.FormData = form_data_1.default;
const axios_1 = (0, tslib_1.__importDefault)(__webpack_require__(9669));
exports.Axios = axios_1.default;
(0, platform_1.injectPlatformDeps)(browserDeps);
var HaloRestAPIClient_1 = __webpack_require__(9230);
Object.defineProperty(exports, "HaloRestAPIClient", ({ enumerable: true, get: function () { return HaloRestAPIClient_1.HaloRestAPIClient; } }));
var HaloResponseHandler_1 = __webpack_require__(8867);
Object.defineProperty(exports, "HaloResponseHandler", ({ enumerable: true, get: function () { return HaloResponseHandler_1.HaloResponseHandler; } }));
var HaloRequestConfigBuilder_1 = __webpack_require__(5668);
Object.defineProperty(exports, "HaloRequestConfigBuilder", ({ enumerable: true, get: function () { return HaloRequestConfigBuilder_1.HaloRequestConfigBuilder; } }));
var http_1 = __webpack_require__(5208);
Object.defineProperty(exports, "DefaultHttpClient", ({ enumerable: true, get: function () { return http_1.DefaultHttpClient; } }));
//# sourceMappingURL=index.browser.js.map

/***/ }),

/***/ 8689:
/***/ (function(__unused_webpack_module, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UnsupportedPlatformError = void 0;
class UnsupportedPlatformError extends Error {
    constructor(platform) {
        const message = `This function is not supported in ${platform} environment`;
        super(message);
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error#Custom_Error_Types
        // Maintains proper stack trace for where our error was thrown (only available on V8)
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, UnsupportedPlatformError);
        }
        this.name = 'UnsupportedPlatformError';
        this.platform = platform;
        // https://github.com/Microsoft/TypeScript/wiki/Breaking-Changes#extending-built-ins-like-error-array-and-map-may-no-longer-work
        // Set the prototype explicitly.
        Object.setPrototypeOf(this, UnsupportedPlatformError.prototype);
    }
}
exports.UnsupportedPlatformError = UnsupportedPlatformError;
//# sourceMappingURL=UnsupportedPlatformError.js.map

/***/ }),

/***/ 4014:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getVersion = exports.buildBaseUrl = exports.buildFormDataValue = exports.buildHeaders = exports.buildPlatformDependentConfig = exports.getDefaultAuth = exports.getRequestToken = exports.readFileFromPath = void 0;
const tslib_1 = __webpack_require__(655);
const UnsupportedPlatformError_1 = __webpack_require__(8689);
const readFileFromPath = () => {
    throw new UnsupportedPlatformError_1.UnsupportedPlatformError('Browser');
};
exports.readFileFromPath = readFileFromPath;
const getRequestToken = () => (0, tslib_1.__awaiter)(void 0, void 0, void 0, function* () {
    if (typeof halo === 'object' && halo !== null && typeof halo.getRequestToken === 'function') {
        return halo.getRequestToken();
    }
    throw new Error('session authentication must specify a request token');
});
exports.getRequestToken = getRequestToken;
const getDefaultAuth = () => {
    return {
        type: 'session',
    };
};
exports.getDefaultAuth = getDefaultAuth;
const buildPlatformDependentConfig = () => {
    return {};
};
exports.buildPlatformDependentConfig = buildPlatformDependentConfig;
const buildHeaders = () => {
    return {};
};
exports.buildHeaders = buildHeaders;
const buildFormDataValue = (data) => {
    return new Blob([data]);
};
exports.buildFormDataValue = buildFormDataValue;
const buildBaseUrl = (baseUrl) => {
    if (typeof baseUrl === 'undefined') {
        throw new Error('in browser environment, baseUrl is required');
    }
    return baseUrl;
};
exports.buildBaseUrl = buildBaseUrl;
const getVersion = () => {
    return PACKAGE_VERSION;
};
exports.getVersion = getVersion;
//# sourceMappingURL=browser.js.map

/***/ }),

/***/ 6595:
/***/ (function(__unused_webpack_module, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.injectPlatformDeps = exports.platformDeps = void 0;
exports.platformDeps = {
    readFileFromPath: () => {
        throw new Error('not implemented');
    },
    getRequestToken: () => {
        throw new Error('not implemented');
    },
    getDefaultAuth: () => {
        throw new Error('not implemented');
    },
    buildPlatformDependentConfig: () => {
        throw new Error('not implemented');
    },
    buildHeaders: () => {
        throw new Error('not implemented');
    },
    buildFormDataValue: () => {
        throw new Error('not implemented');
    },
    buildBaseUrl: () => {
        throw new Error('not implemented');
    },
    getVersion: () => {
        throw new Error('not implemented');
    },
};
const injectPlatformDeps = (deps) => {
    exports.platformDeps.readFileFromPath = deps.readFileFromPath;
    exports.platformDeps.getRequestToken = deps.getRequestToken;
    exports.platformDeps.getDefaultAuth = deps.getDefaultAuth;
    exports.platformDeps.buildPlatformDependentConfig = deps.buildPlatformDependentConfig;
    exports.platformDeps.buildHeaders = deps.buildHeaders;
    exports.platformDeps.buildFormDataValue = deps.buildFormDataValue;
    exports.platformDeps.buildBaseUrl = deps.buildBaseUrl;
    exports.platformDeps.getVersion = deps.getVersion;
};
exports.injectPlatformDeps = injectPlatformDeps;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 3064:
/***/ (function(__unused_webpack_module, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SESSION_TOKEN_KEY = void 0;
exports.SESSION_TOKEN_KEY = '__REQUEST_TOKEN__';
//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 7679:
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// addapted from the document.currentScript polyfill by Adam Miller
// MIT license
// source: https://github.com/amiller-gh/currentScript-polyfill

// added support for Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1620505

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(typeof self !== 'undefined' ? self : this, function () {
  function getCurrentScript () {
    var descriptor = Object.getOwnPropertyDescriptor(document, 'currentScript')
    // for chrome
    if (!descriptor && 'currentScript' in document && document.currentScript) {
      return document.currentScript
    }

    // for other browsers with native support for currentScript
    if (descriptor && descriptor.get !== getCurrentScript && document.currentScript) {
      return document.currentScript
    }
  
    // IE 8-10 support script readyState
    // IE 11+ & Firefox support stack trace
    try {
      throw new Error();
    }
    catch (err) {
      // Find the second match for the "at" string to get file src url from stack.
      var ieStackRegExp = /.*at [^(]*\((.*):(.+):(.+)\)$/ig,
        ffStackRegExp = /@([^@]*):(\d+):(\d+)\s*$/ig,
        stackDetails = ieStackRegExp.exec(err.stack) || ffStackRegExp.exec(err.stack),
        scriptLocation = (stackDetails && stackDetails[1]) || false,
        line = (stackDetails && stackDetails[2]) || false,
        currentLocation = document.location.href.replace(document.location.hash, ''),
        pageSource,
        inlineScriptSourceRegExp,
        inlineScriptSource,
        scripts = document.getElementsByTagName('script'); // Live NodeList collection
  
      if (scriptLocation === currentLocation) {
        pageSource = document.documentElement.outerHTML;
        inlineScriptSourceRegExp = new RegExp('(?:[^\\n]+?\\n){0,' + (line - 2) + '}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*', 'i');
        inlineScriptSource = pageSource.replace(inlineScriptSourceRegExp, '$1').trim();
      }
  
      for (var i = 0; i < scripts.length; i++) {
        // If ready state is interactive, return the script tag
        if (scripts[i].readyState === 'interactive') {
          return scripts[i];
        }
  
        // If src matches, return the script tag
        if (scripts[i].src === scriptLocation) {
          return scripts[i];
        }
  
        // If inline source matches, return the script tag
        if (
          scriptLocation === currentLocation &&
          scripts[i].innerHTML &&
          scripts[i].innerHTML.trim() === inlineScriptSource
        ) {
          return scripts[i];
        }
      }
  
      // If no match, return null
      return null;
    }
  };

  return getCurrentScript
}));


/***/ }),

/***/ 4925:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_clonedRuleSet_22_0_rules_0_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_1_node_modules_vue_vue_loader_v15_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_2_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_4_node_modules_vue_vue_loader_v15_lib_index_js_vue_loader_options_BulletScreen_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4998);
/* harmony import */ var _node_modules_vue_style_loader_index_js_clonedRuleSet_22_0_rules_0_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_1_node_modules_vue_vue_loader_v15_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_2_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_4_node_modules_vue_vue_loader_v15_lib_index_js_vue_loader_options_BulletScreen_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_clonedRuleSet_22_0_rules_0_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_1_node_modules_vue_vue_loader_v15_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_2_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_4_node_modules_vue_vue_loader_v15_lib_index_js_vue_loader_options_BulletScreen_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_clonedRuleSet_22_0_rules_0_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_1_node_modules_vue_vue_loader_v15_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_2_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_4_node_modules_vue_vue_loader_v15_lib_index_js_vue_loader_options_BulletScreen_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _node_modules_vue_style_loader_index_js_clonedRuleSet_22_0_rules_0_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_1_node_modules_vue_vue_loader_v15_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_2_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_4_node_modules_vue_vue_loader_v15_lib_index_js_vue_loader_options_BulletScreen_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ 1089:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_clonedRuleSet_22_0_rules_0_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_1_node_modules_vue_vue_loader_v15_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_2_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_4_node_modules_vue_vue_loader_v15_lib_index_js_vue_loader_options_Comment_vue_vue_type_style_index_0_lang_scss_shadow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4957);
/* harmony import */ var _node_modules_vue_style_loader_index_js_clonedRuleSet_22_0_rules_0_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_1_node_modules_vue_vue_loader_v15_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_2_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_4_node_modules_vue_vue_loader_v15_lib_index_js_vue_loader_options_Comment_vue_vue_type_style_index_0_lang_scss_shadow__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_clonedRuleSet_22_0_rules_0_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_1_node_modules_vue_vue_loader_v15_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_2_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_4_node_modules_vue_vue_loader_v15_lib_index_js_vue_loader_options_Comment_vue_vue_type_style_index_0_lang_scss_shadow__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_clonedRuleSet_22_0_rules_0_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_1_node_modules_vue_vue_loader_v15_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_2_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_4_node_modules_vue_vue_loader_v15_lib_index_js_vue_loader_options_Comment_vue_vue_type_style_index_0_lang_scss_shadow__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _node_modules_vue_style_loader_index_js_clonedRuleSet_22_0_rules_0_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_1_node_modules_vue_vue_loader_v15_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_2_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_4_node_modules_vue_vue_loader_v15_lib_index_js_vue_loader_options_Comment_vue_vue_type_style_index_0_lang_scss_shadow__WEBPACK_IMPORTED_MODULE_0__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ 6910:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_clonedRuleSet_22_0_rules_0_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_1_node_modules_vue_vue_loader_v15_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_2_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_4_node_modules_vue_vue_loader_v15_lib_index_js_vue_loader_options_CommentLoading_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8684);
/* harmony import */ var _node_modules_vue_style_loader_index_js_clonedRuleSet_22_0_rules_0_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_1_node_modules_vue_vue_loader_v15_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_2_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_4_node_modules_vue_vue_loader_v15_lib_index_js_vue_loader_options_CommentLoading_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_clonedRuleSet_22_0_rules_0_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_1_node_modules_vue_vue_loader_v15_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_2_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_4_node_modules_vue_vue_loader_v15_lib_index_js_vue_loader_options_CommentLoading_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_clonedRuleSet_22_0_rules_0_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_1_node_modules_vue_vue_loader_v15_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_2_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_4_node_modules_vue_vue_loader_v15_lib_index_js_vue_loader_options_CommentLoading_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _node_modules_vue_style_loader_index_js_clonedRuleSet_22_0_rules_0_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_1_node_modules_vue_vue_loader_v15_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_2_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_4_node_modules_vue_vue_loader_v15_lib_index_js_vue_loader_options_CommentLoading_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ 9912:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_clonedRuleSet_22_0_rules_0_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_1_node_modules_vue_vue_loader_v15_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_2_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_4_node_modules_vue_vue_loader_v15_lib_index_js_vue_loader_options_Pagination_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7386);
/* harmony import */ var _node_modules_vue_style_loader_index_js_clonedRuleSet_22_0_rules_0_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_1_node_modules_vue_vue_loader_v15_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_2_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_4_node_modules_vue_vue_loader_v15_lib_index_js_vue_loader_options_Pagination_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_clonedRuleSet_22_0_rules_0_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_1_node_modules_vue_vue_loader_v15_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_2_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_4_node_modules_vue_vue_loader_v15_lib_index_js_vue_loader_options_Pagination_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_clonedRuleSet_22_0_rules_0_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_1_node_modules_vue_vue_loader_v15_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_2_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_4_node_modules_vue_vue_loader_v15_lib_index_js_vue_loader_options_Pagination_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _node_modules_vue_style_loader_index_js_clonedRuleSet_22_0_rules_0_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_1_node_modules_vue_vue_loader_v15_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_2_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_4_node_modules_vue_vue_loader_v15_lib_index_js_vue_loader_options_Pagination_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ 5908:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_clonedRuleSet_22_0_rules_0_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_1_node_modules_vue_vue_loader_v15_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_2_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_4_node_modules_vue_vue_loader_v15_lib_index_js_vue_loader_options_EmojiList_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9525);
/* harmony import */ var _node_modules_vue_style_loader_index_js_clonedRuleSet_22_0_rules_0_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_1_node_modules_vue_vue_loader_v15_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_2_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_4_node_modules_vue_vue_loader_v15_lib_index_js_vue_loader_options_EmojiList_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_clonedRuleSet_22_0_rules_0_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_1_node_modules_vue_vue_loader_v15_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_2_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_4_node_modules_vue_vue_loader_v15_lib_index_js_vue_loader_options_EmojiList_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_clonedRuleSet_22_0_rules_0_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_1_node_modules_vue_vue_loader_v15_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_2_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_4_node_modules_vue_vue_loader_v15_lib_index_js_vue_loader_options_EmojiList_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _node_modules_vue_style_loader_index_js_clonedRuleSet_22_0_rules_0_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_1_node_modules_vue_vue_loader_v15_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_2_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_4_node_modules_vue_vue_loader_v15_lib_index_js_vue_loader_options_EmojiList_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ 9367:
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	autosize 4.0.4
	license: MIT
	http://www.jacklmoore.com/autosize
*/
(function (global, factory) {
	if (true) {
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else { var mod; }
})(this, function (module, exports) {
	'use strict';

	var map = typeof Map === "function" ? new Map() : function () {
		var keys = [];
		var values = [];

		return {
			has: function has(key) {
				return keys.indexOf(key) > -1;
			},
			get: function get(key) {
				return values[keys.indexOf(key)];
			},
			set: function set(key, value) {
				if (keys.indexOf(key) === -1) {
					keys.push(key);
					values.push(value);
				}
			},
			delete: function _delete(key) {
				var index = keys.indexOf(key);
				if (index > -1) {
					keys.splice(index, 1);
					values.splice(index, 1);
				}
			}
		};
	}();

	var createEvent = function createEvent(name) {
		return new Event(name, { bubbles: true });
	};
	try {
		new Event('test');
	} catch (e) {
		// IE does not support `new Event()`
		createEvent = function createEvent(name) {
			var evt = document.createEvent('Event');
			evt.initEvent(name, true, false);
			return evt;
		};
	}

	function assign(ta) {
		if (!ta || !ta.nodeName || ta.nodeName !== 'TEXTAREA' || map.has(ta)) return;

		var heightOffset = null;
		var clientWidth = null;
		var cachedHeight = null;

		function init() {
			var style = window.getComputedStyle(ta, null);

			if (style.resize === 'vertical') {
				ta.style.resize = 'none';
			} else if (style.resize === 'both') {
				ta.style.resize = 'horizontal';
			}

			if (style.boxSizing === 'content-box') {
				heightOffset = -(parseFloat(style.paddingTop) + parseFloat(style.paddingBottom));
			} else {
				heightOffset = parseFloat(style.borderTopWidth) + parseFloat(style.borderBottomWidth);
			}
			// Fix when a textarea is not on document body and heightOffset is Not a Number
			if (isNaN(heightOffset)) {
				heightOffset = 0;
			}

			update();
		}

		function changeOverflow(value) {
			{
				// Chrome/Safari-specific fix:
				// When the textarea y-overflow is hidden, Chrome/Safari do not reflow the text to account for the space
				// made available by removing the scrollbar. The following forces the necessary text reflow.
				var width = ta.style.width;
				ta.style.width = '0px';
				// Force reflow:
				/* jshint ignore:start */
				ta.offsetWidth;
				/* jshint ignore:end */
				ta.style.width = width;
			}

			ta.style.overflowY = value;
		}

		function getParentOverflows(el) {
			var arr = [];

			while (el && el.parentNode && el.parentNode instanceof Element) {
				if (el.parentNode.scrollTop) {
					arr.push({
						node: el.parentNode,
						scrollTop: el.parentNode.scrollTop
					});
				}
				el = el.parentNode;
			}

			return arr;
		}

		function resize() {
			if (ta.scrollHeight === 0) {
				// If the scrollHeight is 0, then the element probably has display:none or is detached from the DOM.
				return;
			}

			var overflows = getParentOverflows(ta);
			var docTop = document.documentElement && document.documentElement.scrollTop; // Needed for Mobile IE (ticket #240)

			ta.style.height = '';
			ta.style.height = ta.scrollHeight + heightOffset + 'px';

			// used to check if an update is actually necessary on window.resize
			clientWidth = ta.clientWidth;

			// prevents scroll-position jumping
			overflows.forEach(function (el) {
				el.node.scrollTop = el.scrollTop;
			});

			if (docTop) {
				document.documentElement.scrollTop = docTop;
			}
		}

		function update() {
			resize();

			var styleHeight = Math.round(parseFloat(ta.style.height));
			var computed = window.getComputedStyle(ta, null);

			// Using offsetHeight as a replacement for computed.height in IE, because IE does not account use of border-box
			var actualHeight = computed.boxSizing === 'content-box' ? Math.round(parseFloat(computed.height)) : ta.offsetHeight;

			// The actual height not matching the style height (set via the resize method) indicates that 
			// the max-height has been exceeded, in which case the overflow should be allowed.
			if (actualHeight < styleHeight) {
				if (computed.overflowY === 'hidden') {
					changeOverflow('scroll');
					resize();
					actualHeight = computed.boxSizing === 'content-box' ? Math.round(parseFloat(window.getComputedStyle(ta, null).height)) : ta.offsetHeight;
				}
			} else {
				// Normally keep overflow set to hidden, to avoid flash of scrollbar as the textarea expands.
				if (computed.overflowY !== 'hidden') {
					changeOverflow('hidden');
					resize();
					actualHeight = computed.boxSizing === 'content-box' ? Math.round(parseFloat(window.getComputedStyle(ta, null).height)) : ta.offsetHeight;
				}
			}

			if (cachedHeight !== actualHeight) {
				cachedHeight = actualHeight;
				var evt = createEvent('autosize:resized');
				try {
					ta.dispatchEvent(evt);
				} catch (err) {
					// Firefox will throw an error on dispatchEvent for a detached element
					// https://bugzilla.mozilla.org/show_bug.cgi?id=889376
				}
			}
		}

		var pageResize = function pageResize() {
			if (ta.clientWidth !== clientWidth) {
				update();
			}
		};

		var destroy = function (style) {
			window.removeEventListener('resize', pageResize, false);
			ta.removeEventListener('input', update, false);
			ta.removeEventListener('keyup', update, false);
			ta.removeEventListener('autosize:destroy', destroy, false);
			ta.removeEventListener('autosize:update', update, false);

			Object.keys(style).forEach(function (key) {
				ta.style[key] = style[key];
			});

			map.delete(ta);
		}.bind(ta, {
			height: ta.style.height,
			resize: ta.style.resize,
			overflowY: ta.style.overflowY,
			overflowX: ta.style.overflowX,
			wordWrap: ta.style.wordWrap
		});

		ta.addEventListener('autosize:destroy', destroy, false);

		// IE9 does not fire onpropertychange or oninput for deletions,
		// so binding to onkeyup to catch most of those events.
		// There is no way that I know of to detect something like 'cut' in IE9.
		if ('onpropertychange' in ta && 'oninput' in ta) {
			ta.addEventListener('keyup', update, false);
		}

		window.addEventListener('resize', pageResize, false);
		ta.addEventListener('input', update, false);
		ta.addEventListener('autosize:update', update, false);
		ta.style.overflowX = 'hidden';
		ta.style.wordWrap = 'break-word';

		map.set(ta, {
			destroy: destroy,
			update: update
		});

		init();
	}

	function destroy(ta) {
		var methods = map.get(ta);
		if (methods) {
			methods.destroy();
		}
	}

	function update(ta) {
		var methods = map.get(ta);
		if (methods) {
			methods.update();
		}
	}

	var autosize = null;

	// Do nothing in Node.js environment and IE8 (or lower)
	if (typeof window === 'undefined' || typeof window.getComputedStyle !== 'function') {
		autosize = function autosize(el) {
			return el;
		};
		autosize.destroy = function (el) {
			return el;
		};
		autosize.update = function (el) {
			return el;
		};
	} else {
		autosize = function autosize(el, options) {
			if (el) {
				Array.prototype.forEach.call(el.length ? el : [el], function (x) {
					return assign(x, options);
				});
			}
			return el;
		};
		autosize.destroy = function (el) {
			if (el) {
				Array.prototype.forEach.call(el.length ? el : [el], destroy);
			}
			return el;
		};
		autosize.update = function (el) {
			if (el) {
				Array.prototype.forEach.call(el.length ? el : [el], update);
			}
			return el;
		};
	}

	exports.default = autosize;
	module.exports = exports['default'];
});

/***/ }),

/***/ 9669:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(1609);

/***/ }),

/***/ 5448:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(4867);
var settle = __webpack_require__(6026);
var cookies = __webpack_require__(4372);
var buildURL = __webpack_require__(5327);
var buildFullPath = __webpack_require__(4097);
var parseHeaders = __webpack_require__(4109);
var isURLSameOrigin = __webpack_require__(7985);
var createError = __webpack_require__(5061);
var defaults = __webpack_require__(5655);
var Cancel = __webpack_require__(5263);

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;
    var responseType = config.responseType;
    var onCanceled;
    function done() {
      if (config.cancelToken) {
        config.cancelToken.unsubscribe(onCanceled);
      }

      if (config.signal) {
        config.signal.removeEventListener('abort', onCanceled);
      }
    }

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    var fullPath = buildFullPath(config.baseURL, config.url);
    request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    function onloadend() {
      if (!request) {
        return;
      }
      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !responseType || responseType === 'text' ||  responseType === 'json' ?
        request.responseText : request.response;
      var response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(function _resolve(value) {
        resolve(value);
        done();
      }, function _reject(err) {
        reject(err);
        done();
      }, response);

      // Clean up request
      request = null;
    }

    if ('onloadend' in request) {
      // Use onloadend if available
      request.onloadend = onloadend;
    } else {
      // Listen for ready state to emulate onloadend
      request.onreadystatechange = function handleLoad() {
        if (!request || request.readyState !== 4) {
          return;
        }

        // The request errored out and we didn't get a response, this will be
        // handled by onerror instead
        // With one exception: request that using file: protocol, most browsers
        // will return status as 0 even though it's a successful request
        if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
          return;
        }
        // readystate handler is calling before onerror or ontimeout handlers,
        // so we should call onloadend on the next 'tick'
        setTimeout(onloadend);
      };
    }

    // Handle browser request cancellation (as opposed to a manual cancellation)
    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }

      reject(createError('Request aborted', config, 'ECONNABORTED', request));

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      var timeoutErrorMessage = config.timeout ? 'timeout of ' + config.timeout + 'ms exceeded' : 'timeout exceeded';
      var transitional = config.transitional || defaults.transitional;
      if (config.timeoutErrorMessage) {
        timeoutErrorMessage = config.timeoutErrorMessage;
      }
      reject(createError(
        timeoutErrorMessage,
        config,
        transitional.clarifyTimeoutError ? 'ETIMEDOUT' : 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ?
        cookies.read(config.xsrfCookieName) :
        undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (!utils.isUndefined(config.withCredentials)) {
      request.withCredentials = !!config.withCredentials;
    }

    // Add responseType to request if needed
    if (responseType && responseType !== 'json') {
      request.responseType = config.responseType;
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken || config.signal) {
      // Handle cancellation
      // eslint-disable-next-line func-names
      onCanceled = function(cancel) {
        if (!request) {
          return;
        }
        reject(!cancel || (cancel && cancel.type) ? new Cancel('canceled') : cancel);
        request.abort();
        request = null;
      };

      config.cancelToken && config.cancelToken.subscribe(onCanceled);
      if (config.signal) {
        config.signal.aborted ? onCanceled() : config.signal.addEventListener('abort', onCanceled);
      }
    }

    if (!requestData) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};


/***/ }),

/***/ 1609:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(4867);
var bind = __webpack_require__(1849);
var Axios = __webpack_require__(321);
var mergeConfig = __webpack_require__(7185);
var defaults = __webpack_require__(5655);

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  // Factory for creating new instances
  instance.create = function create(instanceConfig) {
    return createInstance(mergeConfig(defaultConfig, instanceConfig));
  };

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__(5263);
axios.CancelToken = __webpack_require__(4972);
axios.isCancel = __webpack_require__(6502);
axios.VERSION = (__webpack_require__(7288).version);

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(8713);

// Expose isAxiosError
axios.isAxiosError = __webpack_require__(6268);

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports["default"] = axios;


/***/ }),

/***/ 5263:
/***/ (function(module) {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;


/***/ }),

/***/ 4972:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__(5263);

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;

  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;

  // eslint-disable-next-line func-names
  this.promise.then(function(cancel) {
    if (!token._listeners) return;

    var i;
    var l = token._listeners.length;

    for (i = 0; i < l; i++) {
      token._listeners[i](cancel);
    }
    token._listeners = null;
  });

  // eslint-disable-next-line func-names
  this.promise.then = function(onfulfilled) {
    var _resolve;
    // eslint-disable-next-line func-names
    var promise = new Promise(function(resolve) {
      token.subscribe(resolve);
      _resolve = resolve;
    }).then(onfulfilled);

    promise.cancel = function reject() {
      token.unsubscribe(_resolve);
    };

    return promise;
  };

  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Subscribe to the cancel signal
 */

CancelToken.prototype.subscribe = function subscribe(listener) {
  if (this.reason) {
    listener(this.reason);
    return;
  }

  if (this._listeners) {
    this._listeners.push(listener);
  } else {
    this._listeners = [listener];
  }
};

/**
 * Unsubscribe from the cancel signal
 */

CancelToken.prototype.unsubscribe = function unsubscribe(listener) {
  if (!this._listeners) {
    return;
  }
  var index = this._listeners.indexOf(listener);
  if (index !== -1) {
    this._listeners.splice(index, 1);
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;


/***/ }),

/***/ 6502:
/***/ (function(module) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),

/***/ 321:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(4867);
var buildURL = __webpack_require__(5327);
var InterceptorManager = __webpack_require__(782);
var dispatchRequest = __webpack_require__(3572);
var mergeConfig = __webpack_require__(7185);
var validator = __webpack_require__(4875);

var validators = validator.validators;
/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = arguments[1] || {};
    config.url = arguments[0];
  } else {
    config = config || {};
  }

  config = mergeConfig(this.defaults, config);

  // Set config.method
  if (config.method) {
    config.method = config.method.toLowerCase();
  } else if (this.defaults.method) {
    config.method = this.defaults.method.toLowerCase();
  } else {
    config.method = 'get';
  }

  var transitional = config.transitional;

  if (transitional !== undefined) {
    validator.assertOptions(transitional, {
      silentJSONParsing: validators.transitional(validators.boolean),
      forcedJSONParsing: validators.transitional(validators.boolean),
      clarifyTimeoutError: validators.transitional(validators.boolean)
    }, false);
  }

  // filter out skipped interceptors
  var requestInterceptorChain = [];
  var synchronousRequestInterceptors = true;
  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    if (typeof interceptor.runWhen === 'function' && interceptor.runWhen(config) === false) {
      return;
    }

    synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;

    requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  var responseInterceptorChain = [];
  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
  });

  var promise;

  if (!synchronousRequestInterceptors) {
    var chain = [dispatchRequest, undefined];

    Array.prototype.unshift.apply(chain, requestInterceptorChain);
    chain = chain.concat(responseInterceptorChain);

    promise = Promise.resolve(config);
    while (chain.length) {
      promise = promise.then(chain.shift(), chain.shift());
    }

    return promise;
  }


  var newConfig = config;
  while (requestInterceptorChain.length) {
    var onFulfilled = requestInterceptorChain.shift();
    var onRejected = requestInterceptorChain.shift();
    try {
      newConfig = onFulfilled(newConfig);
    } catch (error) {
      onRejected(error);
      break;
    }
  }

  try {
    promise = dispatchRequest(newConfig);
  } catch (error) {
    return Promise.reject(error);
  }

  while (responseInterceptorChain.length) {
    promise = promise.then(responseInterceptorChain.shift(), responseInterceptorChain.shift());
  }

  return promise;
};

Axios.prototype.getUri = function getUri(config) {
  config = mergeConfig(this.defaults, config);
  return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\?/, '');
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(mergeConfig(config || {}, {
      method: method,
      url: url,
      data: (config || {}).data
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(mergeConfig(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;


/***/ }),

/***/ 782:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(4867);

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected, options) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected,
    synchronous: options ? options.synchronous : false,
    runWhen: options ? options.runWhen : null
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;


/***/ }),

/***/ 4097:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var isAbsoluteURL = __webpack_require__(1793);
var combineURLs = __webpack_require__(7303);

/**
 * Creates a new URL by combining the baseURL with the requestedURL,
 * only when the requestedURL is not already an absolute URL.
 * If the requestURL is absolute, this function returns the requestedURL untouched.
 *
 * @param {string} baseURL The base URL
 * @param {string} requestedURL Absolute or relative URL to combine
 * @returns {string} The combined full path
 */
module.exports = function buildFullPath(baseURL, requestedURL) {
  if (baseURL && !isAbsoluteURL(requestedURL)) {
    return combineURLs(baseURL, requestedURL);
  }
  return requestedURL;
};


/***/ }),

/***/ 5061:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__(481);

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};


/***/ }),

/***/ 3572:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(4867);
var transformData = __webpack_require__(8527);
var isCancel = __webpack_require__(6502);
var defaults = __webpack_require__(5655);
var Cancel = __webpack_require__(5263);

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }

  if (config.signal && config.signal.aborted) {
    throw new Cancel('canceled');
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData.call(
    config,
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData.call(
      config,
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData.call(
          config,
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};


/***/ }),

/***/ 481:
/***/ (function(module) {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }

  error.request = request;
  error.response = response;
  error.isAxiosError = true;

  error.toJSON = function toJSON() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: this.config,
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  };
  return error;
};


/***/ }),

/***/ 7185:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(4867);

/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 * @returns {Object} New object resulting from merging config2 to config1
 */
module.exports = function mergeConfig(config1, config2) {
  // eslint-disable-next-line no-param-reassign
  config2 = config2 || {};
  var config = {};

  function getMergedValue(target, source) {
    if (utils.isPlainObject(target) && utils.isPlainObject(source)) {
      return utils.merge(target, source);
    } else if (utils.isPlainObject(source)) {
      return utils.merge({}, source);
    } else if (utils.isArray(source)) {
      return source.slice();
    }
    return source;
  }

  // eslint-disable-next-line consistent-return
  function mergeDeepProperties(prop) {
    if (!utils.isUndefined(config2[prop])) {
      return getMergedValue(config1[prop], config2[prop]);
    } else if (!utils.isUndefined(config1[prop])) {
      return getMergedValue(undefined, config1[prop]);
    }
  }

  // eslint-disable-next-line consistent-return
  function valueFromConfig2(prop) {
    if (!utils.isUndefined(config2[prop])) {
      return getMergedValue(undefined, config2[prop]);
    }
  }

  // eslint-disable-next-line consistent-return
  function defaultToConfig2(prop) {
    if (!utils.isUndefined(config2[prop])) {
      return getMergedValue(undefined, config2[prop]);
    } else if (!utils.isUndefined(config1[prop])) {
      return getMergedValue(undefined, config1[prop]);
    }
  }

  // eslint-disable-next-line consistent-return
  function mergeDirectKeys(prop) {
    if (prop in config2) {
      return getMergedValue(config1[prop], config2[prop]);
    } else if (prop in config1) {
      return getMergedValue(undefined, config1[prop]);
    }
  }

  var mergeMap = {
    'url': valueFromConfig2,
    'method': valueFromConfig2,
    'data': valueFromConfig2,
    'baseURL': defaultToConfig2,
    'transformRequest': defaultToConfig2,
    'transformResponse': defaultToConfig2,
    'paramsSerializer': defaultToConfig2,
    'timeout': defaultToConfig2,
    'timeoutMessage': defaultToConfig2,
    'withCredentials': defaultToConfig2,
    'adapter': defaultToConfig2,
    'responseType': defaultToConfig2,
    'xsrfCookieName': defaultToConfig2,
    'xsrfHeaderName': defaultToConfig2,
    'onUploadProgress': defaultToConfig2,
    'onDownloadProgress': defaultToConfig2,
    'decompress': defaultToConfig2,
    'maxContentLength': defaultToConfig2,
    'maxBodyLength': defaultToConfig2,
    'transport': defaultToConfig2,
    'httpAgent': defaultToConfig2,
    'httpsAgent': defaultToConfig2,
    'cancelToken': defaultToConfig2,
    'socketPath': defaultToConfig2,
    'responseEncoding': defaultToConfig2,
    'validateStatus': mergeDirectKeys
  };

  utils.forEach(Object.keys(config1).concat(Object.keys(config2)), function computeConfigValue(prop) {
    var merge = mergeMap[prop] || mergeDeepProperties;
    var configValue = merge(prop);
    (utils.isUndefined(configValue) && merge !== mergeDirectKeys) || (config[prop] = configValue);
  });

  return config;
};


/***/ }),

/***/ 6026:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__(5061);

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};


/***/ }),

/***/ 8527:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(4867);
var defaults = __webpack_require__(5655);

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  var context = this || defaults;
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn.call(context, data, headers);
  });

  return data;
};


/***/ }),

/***/ 5655:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(4867);
var normalizeHeaderName = __webpack_require__(6016);
var enhanceError = __webpack_require__(481);

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(5448);
  } else if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
    // For node use HTTP adapter
    adapter = __webpack_require__(5448);
  }
  return adapter;
}

function stringifySafely(rawValue, parser, encoder) {
  if (utils.isString(rawValue)) {
    try {
      (parser || JSON.parse)(rawValue);
      return utils.trim(rawValue);
    } catch (e) {
      if (e.name !== 'SyntaxError') {
        throw e;
      }
    }
  }

  return (encoder || JSON.stringify)(rawValue);
}

var defaults = {

  transitional: {
    silentJSONParsing: true,
    forcedJSONParsing: true,
    clarifyTimeoutError: false
  },

  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Accept');
    normalizeHeaderName(headers, 'Content-Type');

    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data) || (headers && headers['Content-Type'] === 'application/json')) {
      setContentTypeIfUnset(headers, 'application/json');
      return stringifySafely(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    var transitional = this.transitional || defaults.transitional;
    var silentJSONParsing = transitional && transitional.silentJSONParsing;
    var forcedJSONParsing = transitional && transitional.forcedJSONParsing;
    var strictJSONParsing = !silentJSONParsing && this.responseType === 'json';

    if (strictJSONParsing || (forcedJSONParsing && utils.isString(data) && data.length)) {
      try {
        return JSON.parse(data);
      } catch (e) {
        if (strictJSONParsing) {
          if (e.name === 'SyntaxError') {
            throw enhanceError(e, this, 'E_JSON_PARSE');
          }
          throw e;
        }
      }
    }

    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,
  maxBodyLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  },

  headers: {
    common: {
      'Accept': 'application/json, text/plain, */*'
    }
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;


/***/ }),

/***/ 7288:
/***/ (function(module) {

module.exports = {
  "version": "0.24.0"
};

/***/ }),

/***/ 1849:
/***/ (function(module) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};


/***/ }),

/***/ 5327:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(4867);

function encode(val) {
  return encodeURIComponent(val).
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      } else {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    var hashmarkIndex = url.indexOf('#');
    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }

    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};


/***/ }),

/***/ 7303:
/***/ (function(module) {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};


/***/ }),

/***/ 4372:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(4867);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
    (function standardBrowserEnv() {
      return {
        write: function write(name, value, expires, path, domain, secure) {
          var cookie = [];
          cookie.push(name + '=' + encodeURIComponent(value));

          if (utils.isNumber(expires)) {
            cookie.push('expires=' + new Date(expires).toGMTString());
          }

          if (utils.isString(path)) {
            cookie.push('path=' + path);
          }

          if (utils.isString(domain)) {
            cookie.push('domain=' + domain);
          }

          if (secure === true) {
            cookie.push('secure');
          }

          document.cookie = cookie.join('; ');
        },

        read: function read(name) {
          var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
          return (match ? decodeURIComponent(match[3]) : null);
        },

        remove: function remove(name) {
          this.write(name, '', Date.now() - 86400000);
        }
      };
    })() :

  // Non standard browser env (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return {
        write: function write() {},
        read: function read() { return null; },
        remove: function remove() {}
      };
    })()
);


/***/ }),

/***/ 1793:
/***/ (function(module) {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};


/***/ }),

/***/ 6268:
/***/ (function(module) {

"use strict";


/**
 * Determines whether the payload is an error thrown by Axios
 *
 * @param {*} payload The value to test
 * @returns {boolean} True if the payload is an error thrown by Axios, otherwise false
 */
module.exports = function isAxiosError(payload) {
  return (typeof payload === 'object') && (payload.isAxiosError === true);
};


/***/ }),

/***/ 7985:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(4867);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
    (function standardBrowserEnv() {
      var msie = /(msie|trident)/i.test(navigator.userAgent);
      var urlParsingNode = document.createElement('a');
      var originURL;

      /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
      function resolveURL(url) {
        var href = url;

        if (msie) {
        // IE needs attribute set twice to normalize properties
          urlParsingNode.setAttribute('href', href);
          href = urlParsingNode.href;
        }

        urlParsingNode.setAttribute('href', href);

        // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
        return {
          href: urlParsingNode.href,
          protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
          host: urlParsingNode.host,
          search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
          hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
          hostname: urlParsingNode.hostname,
          port: urlParsingNode.port,
          pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
            urlParsingNode.pathname :
            '/' + urlParsingNode.pathname
        };
      }

      originURL = resolveURL(window.location.href);

      /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
      return function isURLSameOrigin(requestURL) {
        var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
        return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
      };
    })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return function isURLSameOrigin() {
        return true;
      };
    })()
);


/***/ }),

/***/ 6016:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(4867);

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),

/***/ 4109:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(4867);

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
];

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });

  return parsed;
};


/***/ }),

/***/ 8713:
/***/ (function(module) {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};


/***/ }),

/***/ 4875:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var VERSION = (__webpack_require__(7288).version);

var validators = {};

// eslint-disable-next-line func-names
['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach(function(type, i) {
  validators[type] = function validator(thing) {
    return typeof thing === type || 'a' + (i < 1 ? 'n ' : ' ') + type;
  };
});

var deprecatedWarnings = {};

/**
 * Transitional option validator
 * @param {function|boolean?} validator - set to false if the transitional option has been removed
 * @param {string?} version - deprecated version / removed since version
 * @param {string?} message - some message with additional info
 * @returns {function}
 */
validators.transitional = function transitional(validator, version, message) {
  function formatMessage(opt, desc) {
    return '[Axios v' + VERSION + '] Transitional option \'' + opt + '\'' + desc + (message ? '. ' + message : '');
  }

  // eslint-disable-next-line func-names
  return function(value, opt, opts) {
    if (validator === false) {
      throw new Error(formatMessage(opt, ' has been removed' + (version ? ' in ' + version : '')));
    }

    if (version && !deprecatedWarnings[opt]) {
      deprecatedWarnings[opt] = true;
      // eslint-disable-next-line no-console
      console.warn(
        formatMessage(
          opt,
          ' has been deprecated since v' + version + ' and will be removed in the near future'
        )
      );
    }

    return validator ? validator(value, opt, opts) : true;
  };
};

/**
 * Assert object's properties type
 * @param {object} options
 * @param {object} schema
 * @param {boolean?} allowUnknown
 */

function assertOptions(options, schema, allowUnknown) {
  if (typeof options !== 'object') {
    throw new TypeError('options must be an object');
  }
  var keys = Object.keys(options);
  var i = keys.length;
  while (i-- > 0) {
    var opt = keys[i];
    var validator = schema[opt];
    if (validator) {
      var value = options[opt];
      var result = value === undefined || validator(value, opt, options);
      if (result !== true) {
        throw new TypeError('option ' + opt + ' must be ' + result);
      }
      continue;
    }
    if (allowUnknown !== true) {
      throw Error('Unknown option ' + opt);
    }
  }
}

module.exports = {
  assertOptions: assertOptions,
  validators: validators
};


/***/ }),

/***/ 4867:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(1849);

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is a Buffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Buffer, otherwise false
 */
function isBuffer(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor)
    && typeof val.constructor.isBuffer === 'function' && val.constructor.isBuffer(val);
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a plain Object
 *
 * @param {Object} val The value to test
 * @return {boolean} True if value is a plain Object, otherwise false
 */
function isPlainObject(val) {
  if (toString.call(val) !== '[object Object]') {
    return false;
  }

  var prototype = Object.getPrototypeOf(val);
  return prototype === null || prototype === Object.prototype;
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.trim ? str.trim() : str.replace(/^\s+|\s+$/g, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' ||
                                           navigator.product === 'NativeScript' ||
                                           navigator.product === 'NS')) {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (isPlainObject(result[key]) && isPlainObject(val)) {
      result[key] = merge(result[key], val);
    } else if (isPlainObject(val)) {
      result[key] = merge({}, val);
    } else if (isArray(val)) {
      result[key] = val.slice();
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

/**
 * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
 *
 * @param {string} content with BOM
 * @return {string} content value without BOM
 */
function stripBOM(content) {
  if (content.charCodeAt(0) === 0xFEFF) {
    content = content.slice(1);
  }
  return content;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isPlainObject: isPlainObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim,
  stripBOM: stripBOM
};


/***/ }),

/***/ 1924:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var GetIntrinsic = __webpack_require__(210);

var callBind = __webpack_require__(5559);

var $indexOf = callBind(GetIntrinsic('String.prototype.indexOf'));

module.exports = function callBoundIntrinsic(name, allowMissing) {
	var intrinsic = GetIntrinsic(name, !!allowMissing);
	if (typeof intrinsic === 'function' && $indexOf(name, '.prototype.') > -1) {
		return callBind(intrinsic);
	}
	return intrinsic;
};


/***/ }),

/***/ 5559:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(8612);
var GetIntrinsic = __webpack_require__(210);

var $apply = GetIntrinsic('%Function.prototype.apply%');
var $call = GetIntrinsic('%Function.prototype.call%');
var $reflectApply = GetIntrinsic('%Reflect.apply%', true) || bind.call($call, $apply);

var $gOPD = GetIntrinsic('%Object.getOwnPropertyDescriptor%', true);
var $defineProperty = GetIntrinsic('%Object.defineProperty%', true);
var $max = GetIntrinsic('%Math.max%');

if ($defineProperty) {
	try {
		$defineProperty({}, 'a', { value: 1 });
	} catch (e) {
		// IE 8 has a broken defineProperty
		$defineProperty = null;
	}
}

module.exports = function callBind(originalFunction) {
	var func = $reflectApply(bind, $call, arguments);
	if ($gOPD && $defineProperty) {
		var desc = $gOPD(func, 'length');
		if (desc.configurable) {
			// original length, plus the receiver, minus any additional arguments (after the receiver)
			$defineProperty(
				func,
				'length',
				{ value: 1 + $max(0, originalFunction.length - (arguments.length - 1)) }
			);
		}
	}
	return func;
};

var applyBind = function applyBind() {
	return $reflectApply(bind, $apply, arguments);
};

if ($defineProperty) {
	$defineProperty(module.exports, 'apply', { value: applyBind });
} else {
	module.exports.apply = applyBind;
}


/***/ }),

/***/ 487:
/***/ (function(module) {

var charenc = {
  // UTF-8 encoding
  utf8: {
    // Convert a string to a byte array
    stringToBytes: function(str) {
      return charenc.bin.stringToBytes(unescape(encodeURIComponent(str)));
    },

    // Convert a byte array to a string
    bytesToString: function(bytes) {
      return decodeURIComponent(escape(charenc.bin.bytesToString(bytes)));
    }
  },

  // Binary encoding
  bin: {
    // Convert a string to a byte array
    stringToBytes: function(str) {
      for (var bytes = [], i = 0; i < str.length; i++)
        bytes.push(str.charCodeAt(i) & 0xFF);
      return bytes;
    },

    // Convert a byte array to a string
    bytesToString: function(bytes) {
      for (var str = [], i = 0; i < bytes.length; i++)
        str.push(String.fromCharCode(bytes[i]));
      return str.join('');
    }
  }
};

module.exports = charenc;


/***/ }),

/***/ 9662:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(7854);
var isCallable = __webpack_require__(614);
var tryToString = __webpack_require__(6330);

var TypeError = global.TypeError;

// `Assert: IsCallable(argument) is true`
module.exports = function (argument) {
  if (isCallable(argument)) return argument;
  throw TypeError(tryToString(argument) + ' is not a function');
};


/***/ }),

/***/ 6077:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(7854);
var isCallable = __webpack_require__(614);

var String = global.String;
var TypeError = global.TypeError;

module.exports = function (argument) {
  if (typeof argument == 'object' || isCallable(argument)) return argument;
  throw TypeError("Can't set " + String(argument) + ' as a prototype');
};


/***/ }),

/***/ 1223:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(5112);
var create = __webpack_require__(30);
var definePropertyModule = __webpack_require__(3070);

var UNSCOPABLES = wellKnownSymbol('unscopables');
var ArrayPrototype = Array.prototype;

// Array.prototype[@@unscopables]
// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype[UNSCOPABLES] == undefined) {
  definePropertyModule.f(ArrayPrototype, UNSCOPABLES, {
    configurable: true,
    value: create(null)
  });
}

// add a key to Array.prototype[@@unscopables]
module.exports = function (key) {
  ArrayPrototype[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ 9670:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(7854);
var isObject = __webpack_require__(111);

var String = global.String;
var TypeError = global.TypeError;

// `Assert: Type(argument) is Object`
module.exports = function (argument) {
  if (isObject(argument)) return argument;
  throw TypeError(String(argument) + ' is not an object');
};


/***/ }),

/***/ 1318:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var toIndexedObject = __webpack_require__(5656);
var toAbsoluteIndex = __webpack_require__(1400);
var lengthOfArrayLike = __webpack_require__(6244);

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = lengthOfArrayLike(O);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare -- NaN check
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare -- NaN check
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),

/***/ 4326:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var uncurryThis = __webpack_require__(1702);

var toString = uncurryThis({}.toString);
var stringSlice = uncurryThis(''.slice);

module.exports = function (it) {
  return stringSlice(toString(it), 8, -1);
};


/***/ }),

/***/ 648:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(7854);
var TO_STRING_TAG_SUPPORT = __webpack_require__(1694);
var isCallable = __webpack_require__(614);
var classofRaw = __webpack_require__(4326);
var wellKnownSymbol = __webpack_require__(5112);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var Object = global.Object;

// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) == 'Object' && isCallable(O.callee) ? 'Arguments' : result;
};


/***/ }),

/***/ 7741:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var uncurryThis = __webpack_require__(1702);

var $Error = Error;
var replace = uncurryThis(''.replace);

var TEST = (function (arg) { return String($Error(arg).stack); })('zxcasd');
var V8_OR_CHAKRA_STACK_ENTRY = /\n\s*at [^:]*:[^\n]*/;
var IS_V8_OR_CHAKRA_STACK = V8_OR_CHAKRA_STACK_ENTRY.test(TEST);

module.exports = function (stack, dropEntries) {
  if (IS_V8_OR_CHAKRA_STACK && typeof stack == 'string' && !$Error.prepareStackTrace) {
    while (dropEntries--) stack = replace(stack, V8_OR_CHAKRA_STACK_ENTRY, '');
  } return stack;
};


/***/ }),

/***/ 9920:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var hasOwn = __webpack_require__(2597);
var ownKeys = __webpack_require__(3887);
var getOwnPropertyDescriptorModule = __webpack_require__(1236);
var definePropertyModule = __webpack_require__(3070);

module.exports = function (target, source, exceptions) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!hasOwn(target, key) && !(exceptions && hasOwn(exceptions, key))) {
      defineProperty(target, key, getOwnPropertyDescriptor(source, key));
    }
  }
};


/***/ }),

/***/ 8880:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(9781);
var definePropertyModule = __webpack_require__(3070);
var createPropertyDescriptor = __webpack_require__(9114);

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ 9114:
/***/ (function(module) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ 8052:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(7854);
var isCallable = __webpack_require__(614);
var createNonEnumerableProperty = __webpack_require__(8880);
var makeBuiltIn = __webpack_require__(6339);
var setGlobal = __webpack_require__(3505);

module.exports = function (O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false;
  var simple = options ? !!options.enumerable : false;
  var noTargetGet = options ? !!options.noTargetGet : false;
  var name = options && options.name !== undefined ? options.name : key;
  if (isCallable(value)) makeBuiltIn(value, name, options);
  if (O === global) {
    if (simple) O[key] = value;
    else setGlobal(key, value);
    return O;
  } else if (!unsafe) {
    delete O[key];
  } else if (!noTargetGet && O[key]) {
    simple = true;
  }
  if (simple) O[key] = value;
  else createNonEnumerableProperty(O, key, value);
  return O;
};


/***/ }),

/***/ 9781:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var fails = __webpack_require__(7293);

// Detect IE8's incomplete defineProperty implementation
module.exports = !fails(function () {
  // eslint-disable-next-line es-x/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});


/***/ }),

/***/ 317:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(7854);
var isObject = __webpack_require__(111);

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),

/***/ 8113:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(5005);

module.exports = getBuiltIn('navigator', 'userAgent') || '';


/***/ }),

/***/ 7392:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(7854);
var userAgent = __webpack_require__(8113);

var process = global.process;
var Deno = global.Deno;
var versions = process && process.versions || Deno && Deno.version;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  // in old Chrome, versions of V8 isn't V8 = Chrome / 10
  // but their correct versions are not interesting for us
  version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
}

// BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
// so check `userAgent` even if `.v8` exists, but 0
if (!version && userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = +match[1];
  }
}

module.exports = version;


/***/ }),

/***/ 748:
/***/ (function(module) {

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),

/***/ 2914:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var fails = __webpack_require__(7293);
var createPropertyDescriptor = __webpack_require__(9114);

module.exports = !fails(function () {
  var error = Error('a');
  if (!('stack' in error)) return true;
  // eslint-disable-next-line es-x/no-object-defineproperty -- safe
  Object.defineProperty(error, 'stack', createPropertyDescriptor(1, 7));
  return error.stack !== 7;
});


/***/ }),

/***/ 2109:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(7854);
var getOwnPropertyDescriptor = (__webpack_require__(1236).f);
var createNonEnumerableProperty = __webpack_require__(8880);
var defineBuiltIn = __webpack_require__(8052);
var setGlobal = __webpack_require__(3505);
var copyConstructorProperties = __webpack_require__(9920);
var isForced = __webpack_require__(4705);

/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
  options.name        - the .name of the function if it does not match the key
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || setGlobal(TARGET, {});
  } else {
    target = (global[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty == typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    defineBuiltIn(target, key, sourceProperty, options);
  }
};


/***/ }),

/***/ 7293:
/***/ (function(module) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ 2104:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var NATIVE_BIND = __webpack_require__(4374);

var FunctionPrototype = Function.prototype;
var apply = FunctionPrototype.apply;
var call = FunctionPrototype.call;

// eslint-disable-next-line es-x/no-reflect -- safe
module.exports = typeof Reflect == 'object' && Reflect.apply || (NATIVE_BIND ? call.bind(apply) : function () {
  return call.apply(apply, arguments);
});


/***/ }),

/***/ 4374:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var fails = __webpack_require__(7293);

module.exports = !fails(function () {
  // eslint-disable-next-line es-x/no-function-prototype-bind -- safe
  var test = (function () { /* empty */ }).bind();
  // eslint-disable-next-line no-prototype-builtins -- safe
  return typeof test != 'function' || test.hasOwnProperty('prototype');
});


/***/ }),

/***/ 6916:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var NATIVE_BIND = __webpack_require__(4374);

var call = Function.prototype.call;

module.exports = NATIVE_BIND ? call.bind(call) : function () {
  return call.apply(call, arguments);
};


/***/ }),

/***/ 6530:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(9781);
var hasOwn = __webpack_require__(2597);

var FunctionPrototype = Function.prototype;
// eslint-disable-next-line es-x/no-object-getownpropertydescriptor -- safe
var getDescriptor = DESCRIPTORS && Object.getOwnPropertyDescriptor;

var EXISTS = hasOwn(FunctionPrototype, 'name');
// additional protection from minified / mangled / dropped function names
var PROPER = EXISTS && (function something() { /* empty */ }).name === 'something';
var CONFIGURABLE = EXISTS && (!DESCRIPTORS || (DESCRIPTORS && getDescriptor(FunctionPrototype, 'name').configurable));

module.exports = {
  EXISTS: EXISTS,
  PROPER: PROPER,
  CONFIGURABLE: CONFIGURABLE
};


/***/ }),

/***/ 1702:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var NATIVE_BIND = __webpack_require__(4374);

var FunctionPrototype = Function.prototype;
var bind = FunctionPrototype.bind;
var call = FunctionPrototype.call;
var uncurryThis = NATIVE_BIND && bind.bind(call, call);

module.exports = NATIVE_BIND ? function (fn) {
  return fn && uncurryThis(fn);
} : function (fn) {
  return fn && function () {
    return call.apply(fn, arguments);
  };
};


/***/ }),

/***/ 5005:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(7854);
var isCallable = __webpack_require__(614);

var aFunction = function (argument) {
  return isCallable(argument) ? argument : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(global[namespace]) : global[namespace] && global[namespace][method];
};


/***/ }),

/***/ 8173:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var aCallable = __webpack_require__(9662);

// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
module.exports = function (V, P) {
  var func = V[P];
  return func == null ? undefined : aCallable(func);
};


/***/ }),

/***/ 7854:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line es-x/no-global-this -- safe
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  // eslint-disable-next-line no-restricted-globals -- safe
  check(typeof self == 'object' && self) ||
  check(typeof __webpack_require__.g == 'object' && __webpack_require__.g) ||
  // eslint-disable-next-line no-new-func -- fallback
  (function () { return this; })() || Function('return this')();


/***/ }),

/***/ 2597:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var uncurryThis = __webpack_require__(1702);
var toObject = __webpack_require__(7908);

var hasOwnProperty = uncurryThis({}.hasOwnProperty);

// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
// eslint-disable-next-line es-x/no-object-hasown -- safe
module.exports = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty(toObject(it), key);
};


/***/ }),

/***/ 3501:
/***/ (function(module) {

module.exports = {};


/***/ }),

/***/ 490:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(5005);

module.exports = getBuiltIn('document', 'documentElement');


/***/ }),

/***/ 4664:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(9781);
var fails = __webpack_require__(7293);
var createElement = __webpack_require__(317);

// Thanks to IE8 for its funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  // eslint-disable-next-line es-x/no-object-defineproperty -- required for testing
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),

/***/ 8361:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(7854);
var uncurryThis = __webpack_require__(1702);
var fails = __webpack_require__(7293);
var classof = __webpack_require__(4326);

var Object = global.Object;
var split = uncurryThis(''.split);

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split(it, '') : Object(it);
} : Object;


/***/ }),

/***/ 9587:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isCallable = __webpack_require__(614);
var isObject = __webpack_require__(111);
var setPrototypeOf = __webpack_require__(7674);

// makes subclassing work correct for wrapped built-ins
module.exports = function ($this, dummy, Wrapper) {
  var NewTarget, NewTargetPrototype;
  if (
    // it can work only with native `setPrototypeOf`
    setPrototypeOf &&
    // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
    isCallable(NewTarget = dummy.constructor) &&
    NewTarget !== Wrapper &&
    isObject(NewTargetPrototype = NewTarget.prototype) &&
    NewTargetPrototype !== Wrapper.prototype
  ) setPrototypeOf($this, NewTargetPrototype);
  return $this;
};


/***/ }),

/***/ 2788:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var uncurryThis = __webpack_require__(1702);
var isCallable = __webpack_require__(614);
var store = __webpack_require__(5465);

var functionToString = uncurryThis(Function.toString);

// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (!isCallable(store.inspectSource)) {
  store.inspectSource = function (it) {
    return functionToString(it);
  };
}

module.exports = store.inspectSource;


/***/ }),

/***/ 8340:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isObject = __webpack_require__(111);
var createNonEnumerableProperty = __webpack_require__(8880);

// `InstallErrorCause` abstract operation
// https://tc39.es/proposal-error-cause/#sec-errorobjects-install-error-cause
module.exports = function (O, options) {
  if (isObject(options) && 'cause' in options) {
    createNonEnumerableProperty(O, 'cause', options.cause);
  }
};


/***/ }),

/***/ 9909:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var NATIVE_WEAK_MAP = __webpack_require__(8536);
var global = __webpack_require__(7854);
var uncurryThis = __webpack_require__(1702);
var isObject = __webpack_require__(111);
var createNonEnumerableProperty = __webpack_require__(8880);
var hasOwn = __webpack_require__(2597);
var shared = __webpack_require__(5465);
var sharedKey = __webpack_require__(6200);
var hiddenKeys = __webpack_require__(3501);

var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var TypeError = global.TypeError;
var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP || shared.state) {
  var store = shared.state || (shared.state = new WeakMap());
  var wmget = uncurryThis(store.get);
  var wmhas = uncurryThis(store.has);
  var wmset = uncurryThis(store.set);
  set = function (it, metadata) {
    if (wmhas(store, it)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    wmset(store, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget(store, it) || {};
  };
  has = function (it) {
    return wmhas(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    if (hasOwn(it, STATE)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return hasOwn(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return hasOwn(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),

/***/ 614:
/***/ (function(module) {

// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
module.exports = function (argument) {
  return typeof argument == 'function';
};


/***/ }),

/***/ 4705:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var fails = __webpack_require__(7293);
var isCallable = __webpack_require__(614);

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : isCallable(detection) ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),

/***/ 111:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isCallable = __webpack_require__(614);

module.exports = function (it) {
  return typeof it == 'object' ? it !== null : isCallable(it);
};


/***/ }),

/***/ 1913:
/***/ (function(module) {

module.exports = false;


/***/ }),

/***/ 2190:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(7854);
var getBuiltIn = __webpack_require__(5005);
var isCallable = __webpack_require__(614);
var isPrototypeOf = __webpack_require__(7976);
var USE_SYMBOL_AS_UID = __webpack_require__(3307);

var Object = global.Object;

module.exports = USE_SYMBOL_AS_UID ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  var $Symbol = getBuiltIn('Symbol');
  return isCallable($Symbol) && isPrototypeOf($Symbol.prototype, Object(it));
};


/***/ }),

/***/ 6244:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var toLength = __webpack_require__(7466);

// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
module.exports = function (obj) {
  return toLength(obj.length);
};


/***/ }),

/***/ 6339:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var fails = __webpack_require__(7293);
var isCallable = __webpack_require__(614);
var hasOwn = __webpack_require__(2597);
var DESCRIPTORS = __webpack_require__(9781);
var CONFIGURABLE_FUNCTION_NAME = (__webpack_require__(6530).CONFIGURABLE);
var inspectSource = __webpack_require__(2788);
var InternalStateModule = __webpack_require__(9909);

var enforceInternalState = InternalStateModule.enforce;
var getInternalState = InternalStateModule.get;
// eslint-disable-next-line es-x/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;

var CONFIGURABLE_LENGTH = DESCRIPTORS && !fails(function () {
  return defineProperty(function () { /* empty */ }, 'length', { value: 8 }).length !== 8;
});

var TEMPLATE = String(String).split('String');

var makeBuiltIn = module.exports = function (value, name, options) {
  if (String(name).slice(0, 7) === 'Symbol(') {
    name = '[' + String(name).replace(/^Symbol\(([^)]*)\)/, '$1') + ']';
  }
  if (options && options.getter) name = 'get ' + name;
  if (options && options.setter) name = 'set ' + name;
  if (!hasOwn(value, 'name') || (CONFIGURABLE_FUNCTION_NAME && value.name !== name)) {
    defineProperty(value, 'name', { value: name, configurable: true });
  }
  if (CONFIGURABLE_LENGTH && options && hasOwn(options, 'arity') && value.length !== options.arity) {
    defineProperty(value, 'length', { value: options.arity });
  }
  if (options && hasOwn(options, 'constructor') && options.constructor) {
    if (DESCRIPTORS) try {
      defineProperty(value, 'prototype', { writable: false });
    } catch (error) { /* empty */ }
  } else value.prototype = undefined;
  var state = enforceInternalState(value);
  if (!hasOwn(state, 'source')) {
    state.source = TEMPLATE.join(typeof name == 'string' ? name : '');
  } return value;
};

// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
// eslint-disable-next-line no-extend-native -- required
Function.prototype.toString = makeBuiltIn(function toString() {
  return isCallable(this) && getInternalState(this).source || inspectSource(this);
}, 'toString');


/***/ }),

/***/ 133:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/* eslint-disable es-x/no-symbol -- required for testing */
var V8_VERSION = __webpack_require__(7392);
var fails = __webpack_require__(7293);

// eslint-disable-next-line es-x/no-object-getownpropertysymbols -- required for testing
module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  var symbol = Symbol();
  // Chrome 38 Symbol has incorrect toString conversion
  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
  return !String(symbol) || !(Object(symbol) instanceof Symbol) ||
    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && V8_VERSION && V8_VERSION < 41;
});


/***/ }),

/***/ 8536:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(7854);
var isCallable = __webpack_require__(614);
var inspectSource = __webpack_require__(2788);

var WeakMap = global.WeakMap;

module.exports = isCallable(WeakMap) && /native code/.test(inspectSource(WeakMap));


/***/ }),

/***/ 6277:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var toString = __webpack_require__(1340);

module.exports = function (argument, $default) {
  return argument === undefined ? arguments.length < 2 ? '' : $default : toString(argument);
};


/***/ }),

/***/ 30:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/* global ActiveXObject -- old IE, WSH */
var anObject = __webpack_require__(9670);
var definePropertiesModule = __webpack_require__(6048);
var enumBugKeys = __webpack_require__(748);
var hiddenKeys = __webpack_require__(3501);
var html = __webpack_require__(490);
var documentCreateElement = __webpack_require__(317);
var sharedKey = __webpack_require__(6200);

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');

var EmptyConstructor = function () { /* empty */ };

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function () {
  try {
    activeXDocument = new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject = typeof document != 'undefined'
    ? document.domain && activeXDocument
      ? NullProtoObjectViaActiveX(activeXDocument) // old IE
      : NullProtoObjectViaIFrame()
    : NullProtoObjectViaActiveX(activeXDocument); // WSH
  var length = enumBugKeys.length;
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  return NullProtoObject();
};

hiddenKeys[IE_PROTO] = true;

// `Object.create` method
// https://tc39.es/ecma262/#sec-object.create
// eslint-disable-next-line es-x/no-object-create -- safe
module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : definePropertiesModule.f(result, Properties);
};


/***/ }),

/***/ 6048:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(9781);
var V8_PROTOTYPE_DEFINE_BUG = __webpack_require__(3353);
var definePropertyModule = __webpack_require__(3070);
var anObject = __webpack_require__(9670);
var toIndexedObject = __webpack_require__(5656);
var objectKeys = __webpack_require__(1956);

// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
// eslint-disable-next-line es-x/no-object-defineproperties -- safe
exports.f = DESCRIPTORS && !V8_PROTOTYPE_DEFINE_BUG ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var props = toIndexedObject(Properties);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule.f(O, key = keys[index++], props[key]);
  return O;
};


/***/ }),

/***/ 3070:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var global = __webpack_require__(7854);
var DESCRIPTORS = __webpack_require__(9781);
var IE8_DOM_DEFINE = __webpack_require__(4664);
var V8_PROTOTYPE_DEFINE_BUG = __webpack_require__(3353);
var anObject = __webpack_require__(9670);
var toPropertyKey = __webpack_require__(4948);

var TypeError = global.TypeError;
// eslint-disable-next-line es-x/no-object-defineproperty -- safe
var $defineProperty = Object.defineProperty;
// eslint-disable-next-line es-x/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var ENUMERABLE = 'enumerable';
var CONFIGURABLE = 'configurable';
var WRITABLE = 'writable';

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? V8_PROTOTYPE_DEFINE_BUG ? function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPropertyKey(P);
  anObject(Attributes);
  if (typeof O === 'function' && P === 'prototype' && 'value' in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
    var current = $getOwnPropertyDescriptor(O, P);
    if (current && current[WRITABLE]) {
      O[P] = Attributes.value;
      Attributes = {
        configurable: CONFIGURABLE in Attributes ? Attributes[CONFIGURABLE] : current[CONFIGURABLE],
        enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
        writable: false
      };
    }
  } return $defineProperty(O, P, Attributes);
} : $defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPropertyKey(P);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return $defineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ 1236:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(9781);
var call = __webpack_require__(6916);
var propertyIsEnumerableModule = __webpack_require__(5296);
var createPropertyDescriptor = __webpack_require__(9114);
var toIndexedObject = __webpack_require__(5656);
var toPropertyKey = __webpack_require__(4948);
var hasOwn = __webpack_require__(2597);
var IE8_DOM_DEFINE = __webpack_require__(4664);

// eslint-disable-next-line es-x/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPropertyKey(P);
  if (IE8_DOM_DEFINE) try {
    return $getOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (hasOwn(O, P)) return createPropertyDescriptor(!call(propertyIsEnumerableModule.f, O, P), O[P]);
};


/***/ }),

/***/ 8006:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(6324);
var enumBugKeys = __webpack_require__(748);

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es-x/no-object-getownpropertynames -- safe
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),

/***/ 5181:
/***/ (function(__unused_webpack_module, exports) {

// eslint-disable-next-line es-x/no-object-getownpropertysymbols -- safe
exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ 7976:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var uncurryThis = __webpack_require__(1702);

module.exports = uncurryThis({}.isPrototypeOf);


/***/ }),

/***/ 6324:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var uncurryThis = __webpack_require__(1702);
var hasOwn = __webpack_require__(2597);
var toIndexedObject = __webpack_require__(5656);
var indexOf = (__webpack_require__(1318).indexOf);
var hiddenKeys = __webpack_require__(3501);

var push = uncurryThis([].push);

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !hasOwn(hiddenKeys, key) && hasOwn(O, key) && push(result, key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (hasOwn(O, key = names[i++])) {
    ~indexOf(result, key) || push(result, key);
  }
  return result;
};


/***/ }),

/***/ 1956:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(6324);
var enumBugKeys = __webpack_require__(748);

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
// eslint-disable-next-line es-x/no-object-keys -- safe
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/***/ }),

/***/ 5296:
/***/ (function(__unused_webpack_module, exports) {

"use strict";

var $propertyIsEnumerable = {}.propertyIsEnumerable;
// eslint-disable-next-line es-x/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;


/***/ }),

/***/ 7674:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/* eslint-disable no-proto -- safe */
var uncurryThis = __webpack_require__(1702);
var anObject = __webpack_require__(9670);
var aPossiblePrototype = __webpack_require__(6077);

// `Object.setPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
// eslint-disable-next-line es-x/no-object-setprototypeof -- safe
module.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;
  try {
    // eslint-disable-next-line es-x/no-object-getownpropertydescriptor -- safe
    setter = uncurryThis(Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set);
    setter(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    anObject(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER) setter(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);


/***/ }),

/***/ 2140:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(7854);
var call = __webpack_require__(6916);
var isCallable = __webpack_require__(614);
var isObject = __webpack_require__(111);

var TypeError = global.TypeError;

// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
module.exports = function (input, pref) {
  var fn, val;
  if (pref === 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
  if (isCallable(fn = input.valueOf) && !isObject(val = call(fn, input))) return val;
  if (pref !== 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ 3887:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(5005);
var uncurryThis = __webpack_require__(1702);
var getOwnPropertyNamesModule = __webpack_require__(8006);
var getOwnPropertySymbolsModule = __webpack_require__(5181);
var anObject = __webpack_require__(9670);

var concat = uncurryThis([].concat);

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;
};


/***/ }),

/***/ 2626:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var defineProperty = (__webpack_require__(3070).f);

module.exports = function (Target, Source, key) {
  key in Target || defineProperty(Target, key, {
    configurable: true,
    get: function () { return Source[key]; },
    set: function (it) { Source[key] = it; }
  });
};


/***/ }),

/***/ 4488:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(7854);

var TypeError = global.TypeError;

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};


/***/ }),

/***/ 3505:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(7854);

// eslint-disable-next-line es-x/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;

module.exports = function (key, value) {
  try {
    defineProperty(global, key, { value: value, configurable: true, writable: true });
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),

/***/ 6200:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var shared = __webpack_require__(2309);
var uid = __webpack_require__(9711);

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),

/***/ 5465:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(7854);
var setGlobal = __webpack_require__(3505);

var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});

module.exports = store;


/***/ }),

/***/ 2309:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var IS_PURE = __webpack_require__(1913);
var store = __webpack_require__(5465);

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.22.5',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2014-2022 Denis Pushkarev (zloirock.ru)',
  license: 'https://github.com/zloirock/core-js/blob/v3.22.5/LICENSE',
  source: 'https://github.com/zloirock/core-js'
});


/***/ }),

/***/ 1400:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var toIntegerOrInfinity = __webpack_require__(9303);

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toIntegerOrInfinity(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),

/***/ 5656:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__(8361);
var requireObjectCoercible = __webpack_require__(4488);

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),

/***/ 9303:
/***/ (function(module) {

var ceil = Math.ceil;
var floor = Math.floor;

// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
module.exports = function (argument) {
  var number = +argument;
  // eslint-disable-next-line no-self-compare -- safe
  return number !== number || number === 0 ? 0 : (number > 0 ? floor : ceil)(number);
};


/***/ }),

/***/ 7466:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var toIntegerOrInfinity = __webpack_require__(9303);

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toIntegerOrInfinity(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),

/***/ 7908:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(7854);
var requireObjectCoercible = __webpack_require__(4488);

var Object = global.Object;

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
module.exports = function (argument) {
  return Object(requireObjectCoercible(argument));
};


/***/ }),

/***/ 7593:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(7854);
var call = __webpack_require__(6916);
var isObject = __webpack_require__(111);
var isSymbol = __webpack_require__(2190);
var getMethod = __webpack_require__(8173);
var ordinaryToPrimitive = __webpack_require__(2140);
var wellKnownSymbol = __webpack_require__(5112);

var TypeError = global.TypeError;
var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');

// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
module.exports = function (input, pref) {
  if (!isObject(input) || isSymbol(input)) return input;
  var exoticToPrim = getMethod(input, TO_PRIMITIVE);
  var result;
  if (exoticToPrim) {
    if (pref === undefined) pref = 'default';
    result = call(exoticToPrim, input, pref);
    if (!isObject(result) || isSymbol(result)) return result;
    throw TypeError("Can't convert object to primitive value");
  }
  if (pref === undefined) pref = 'number';
  return ordinaryToPrimitive(input, pref);
};


/***/ }),

/***/ 4948:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var toPrimitive = __webpack_require__(7593);
var isSymbol = __webpack_require__(2190);

// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
module.exports = function (argument) {
  var key = toPrimitive(argument, 'string');
  return isSymbol(key) ? key : key + '';
};


/***/ }),

/***/ 1694:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(5112);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};

test[TO_STRING_TAG] = 'z';

module.exports = String(test) === '[object z]';


/***/ }),

/***/ 1340:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(7854);
var classof = __webpack_require__(648);

var String = global.String;

module.exports = function (argument) {
  if (classof(argument) === 'Symbol') throw TypeError('Cannot convert a Symbol value to a string');
  return String(argument);
};


/***/ }),

/***/ 6330:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(7854);

var String = global.String;

module.exports = function (argument) {
  try {
    return String(argument);
  } catch (error) {
    return 'Object';
  }
};


/***/ }),

/***/ 9711:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var uncurryThis = __webpack_require__(1702);

var id = 0;
var postfix = Math.random();
var toString = uncurryThis(1.0.toString);

module.exports = function (key) {
  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString(++id + postfix, 36);
};


/***/ }),

/***/ 3307:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/* eslint-disable es-x/no-symbol -- required for testing */
var NATIVE_SYMBOL = __webpack_require__(133);

module.exports = NATIVE_SYMBOL
  && !Symbol.sham
  && typeof Symbol.iterator == 'symbol';


/***/ }),

/***/ 3353:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(9781);
var fails = __webpack_require__(7293);

// V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334
module.exports = DESCRIPTORS && fails(function () {
  // eslint-disable-next-line es-x/no-object-defineproperty -- required for testing
  return Object.defineProperty(function () { /* empty */ }, 'prototype', {
    value: 42,
    writable: false
  }).prototype != 42;
});


/***/ }),

/***/ 5112:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(7854);
var shared = __webpack_require__(2309);
var hasOwn = __webpack_require__(2597);
var uid = __webpack_require__(9711);
var NATIVE_SYMBOL = __webpack_require__(133);
var USE_SYMBOL_AS_UID = __webpack_require__(3307);

var WellKnownSymbolsStore = shared('wks');
var Symbol = global.Symbol;
var symbolFor = Symbol && Symbol['for'];
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!hasOwn(WellKnownSymbolsStore, name) || !(NATIVE_SYMBOL || typeof WellKnownSymbolsStore[name] == 'string')) {
    var description = 'Symbol.' + name;
    if (NATIVE_SYMBOL && hasOwn(Symbol, name)) {
      WellKnownSymbolsStore[name] = Symbol[name];
    } else if (USE_SYMBOL_AS_UID && symbolFor) {
      WellKnownSymbolsStore[name] = symbolFor(description);
    } else {
      WellKnownSymbolsStore[name] = createWellKnownSymbol(description);
    }
  } return WellKnownSymbolsStore[name];
};


/***/ }),

/***/ 9191:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var getBuiltIn = __webpack_require__(5005);
var hasOwn = __webpack_require__(2597);
var createNonEnumerableProperty = __webpack_require__(8880);
var isPrototypeOf = __webpack_require__(7976);
var setPrototypeOf = __webpack_require__(7674);
var copyConstructorProperties = __webpack_require__(9920);
var proxyAccessor = __webpack_require__(2626);
var inheritIfRequired = __webpack_require__(9587);
var normalizeStringArgument = __webpack_require__(6277);
var installErrorCause = __webpack_require__(8340);
var clearErrorStack = __webpack_require__(7741);
var ERROR_STACK_INSTALLABLE = __webpack_require__(2914);
var DESCRIPTORS = __webpack_require__(9781);
var IS_PURE = __webpack_require__(1913);

module.exports = function (FULL_NAME, wrapper, FORCED, IS_AGGREGATE_ERROR) {
  var STACK_TRACE_LIMIT = 'stackTraceLimit';
  var OPTIONS_POSITION = IS_AGGREGATE_ERROR ? 2 : 1;
  var path = FULL_NAME.split('.');
  var ERROR_NAME = path[path.length - 1];
  var OriginalError = getBuiltIn.apply(null, path);

  if (!OriginalError) return;

  var OriginalErrorPrototype = OriginalError.prototype;

  // V8 9.3- bug https://bugs.chromium.org/p/v8/issues/detail?id=12006
  if (!IS_PURE && hasOwn(OriginalErrorPrototype, 'cause')) delete OriginalErrorPrototype.cause;

  if (!FORCED) return OriginalError;

  var BaseError = getBuiltIn('Error');

  var WrappedError = wrapper(function (a, b) {
    var message = normalizeStringArgument(IS_AGGREGATE_ERROR ? b : a, undefined);
    var result = IS_AGGREGATE_ERROR ? new OriginalError(a) : new OriginalError();
    if (message !== undefined) createNonEnumerableProperty(result, 'message', message);
    if (ERROR_STACK_INSTALLABLE) createNonEnumerableProperty(result, 'stack', clearErrorStack(result.stack, 2));
    if (this && isPrototypeOf(OriginalErrorPrototype, this)) inheritIfRequired(result, this, WrappedError);
    if (arguments.length > OPTIONS_POSITION) installErrorCause(result, arguments[OPTIONS_POSITION]);
    return result;
  });

  WrappedError.prototype = OriginalErrorPrototype;

  if (ERROR_NAME !== 'Error') {
    if (setPrototypeOf) setPrototypeOf(WrappedError, BaseError);
    else copyConstructorProperties(WrappedError, BaseError, { name: true });
  } else if (DESCRIPTORS && STACK_TRACE_LIMIT in OriginalError) {
    proxyAccessor(WrappedError, OriginalError, STACK_TRACE_LIMIT);
    proxyAccessor(WrappedError, OriginalError, 'prepareStackTrace');
  }

  copyConstructorProperties(WrappedError, OriginalError);

  if (!IS_PURE) try {
    // Safari 13- bug: WebAssembly errors does not have a proper `.name`
    if (OriginalErrorPrototype.name !== ERROR_NAME) {
      createNonEnumerableProperty(OriginalErrorPrototype, 'name', ERROR_NAME);
    }
    OriginalErrorPrototype.constructor = WrappedError;
  } catch (error) { /* empty */ }

  return WrappedError;
};


/***/ }),

/***/ 6699:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(2109);
var $includes = (__webpack_require__(1318).includes);
var fails = __webpack_require__(7293);
var addToUnscopables = __webpack_require__(1223);

// FF99+ bug
var BROKEN_ON_SPARSE = fails(function () {
  return !Array(1).includes();
});

// `Array.prototype.includes` method
// https://tc39.es/ecma262/#sec-array.prototype.includes
$({ target: 'Array', proto: true, forced: BROKEN_ON_SPARSE }, {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('includes');


/***/ }),

/***/ 1703:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

/* eslint-disable no-unused-vars -- required for functions `.length` */
var $ = __webpack_require__(2109);
var global = __webpack_require__(7854);
var apply = __webpack_require__(2104);
var wrapErrorConstructorWithCause = __webpack_require__(9191);

var WEB_ASSEMBLY = 'WebAssembly';
var WebAssembly = global[WEB_ASSEMBLY];

var FORCED = Error('e', { cause: 7 }).cause !== 7;

var exportGlobalErrorCauseWrapper = function (ERROR_NAME, wrapper) {
  var O = {};
  O[ERROR_NAME] = wrapErrorConstructorWithCause(ERROR_NAME, wrapper, FORCED);
  $({ global: true, constructor: true, arity: 1, forced: FORCED }, O);
};

var exportWebAssemblyErrorCauseWrapper = function (ERROR_NAME, wrapper) {
  if (WebAssembly && WebAssembly[ERROR_NAME]) {
    var O = {};
    O[ERROR_NAME] = wrapErrorConstructorWithCause(WEB_ASSEMBLY + '.' + ERROR_NAME, wrapper, FORCED);
    $({ target: WEB_ASSEMBLY, stat: true, constructor: true, arity: 1, forced: FORCED }, O);
  }
};

// https://github.com/tc39/proposal-error-cause
exportGlobalErrorCauseWrapper('Error', function (init) {
  return function Error(message) { return apply(init, this, arguments); };
});
exportGlobalErrorCauseWrapper('EvalError', function (init) {
  return function EvalError(message) { return apply(init, this, arguments); };
});
exportGlobalErrorCauseWrapper('RangeError', function (init) {
  return function RangeError(message) { return apply(init, this, arguments); };
});
exportGlobalErrorCauseWrapper('ReferenceError', function (init) {
  return function ReferenceError(message) { return apply(init, this, arguments); };
});
exportGlobalErrorCauseWrapper('SyntaxError', function (init) {
  return function SyntaxError(message) { return apply(init, this, arguments); };
});
exportGlobalErrorCauseWrapper('TypeError', function (init) {
  return function TypeError(message) { return apply(init, this, arguments); };
});
exportGlobalErrorCauseWrapper('URIError', function (init) {
  return function URIError(message) { return apply(init, this, arguments); };
});
exportWebAssemblyErrorCauseWrapper('CompileError', function (init) {
  return function CompileError(message) { return apply(init, this, arguments); };
});
exportWebAssemblyErrorCauseWrapper('LinkError', function (init) {
  return function LinkError(message) { return apply(init, this, arguments); };
});
exportWebAssemblyErrorCauseWrapper('RuntimeError', function (init) {
  return function RuntimeError(message) { return apply(init, this, arguments); };
});


/***/ }),

/***/ 1012:
/***/ (function(module) {

(function() {
  var base64map
      = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',

  crypt = {
    // Bit-wise rotation left
    rotl: function(n, b) {
      return (n << b) | (n >>> (32 - b));
    },

    // Bit-wise rotation right
    rotr: function(n, b) {
      return (n << (32 - b)) | (n >>> b);
    },

    // Swap big-endian to little-endian and vice versa
    endian: function(n) {
      // If number given, swap endian
      if (n.constructor == Number) {
        return crypt.rotl(n, 8) & 0x00FF00FF | crypt.rotl(n, 24) & 0xFF00FF00;
      }

      // Else, assume array and swap all items
      for (var i = 0; i < n.length; i++)
        n[i] = crypt.endian(n[i]);
      return n;
    },

    // Generate an array of any length of random bytes
    randomBytes: function(n) {
      for (var bytes = []; n > 0; n--)
        bytes.push(Math.floor(Math.random() * 256));
      return bytes;
    },

    // Convert a byte array to big-endian 32-bit words
    bytesToWords: function(bytes) {
      for (var words = [], i = 0, b = 0; i < bytes.length; i++, b += 8)
        words[b >>> 5] |= bytes[i] << (24 - b % 32);
      return words;
    },

    // Convert big-endian 32-bit words to a byte array
    wordsToBytes: function(words) {
      for (var bytes = [], b = 0; b < words.length * 32; b += 8)
        bytes.push((words[b >>> 5] >>> (24 - b % 32)) & 0xFF);
      return bytes;
    },

    // Convert a byte array to a hex string
    bytesToHex: function(bytes) {
      for (var hex = [], i = 0; i < bytes.length; i++) {
        hex.push((bytes[i] >>> 4).toString(16));
        hex.push((bytes[i] & 0xF).toString(16));
      }
      return hex.join('');
    },

    // Convert a hex string to a byte array
    hexToBytes: function(hex) {
      for (var bytes = [], c = 0; c < hex.length; c += 2)
        bytes.push(parseInt(hex.substr(c, 2), 16));
      return bytes;
    },

    // Convert a byte array to a base-64 string
    bytesToBase64: function(bytes) {
      for (var base64 = [], i = 0; i < bytes.length; i += 3) {
        var triplet = (bytes[i] << 16) | (bytes[i + 1] << 8) | bytes[i + 2];
        for (var j = 0; j < 4; j++)
          if (i * 8 + j * 6 <= bytes.length * 8)
            base64.push(base64map.charAt((triplet >>> 6 * (3 - j)) & 0x3F));
          else
            base64.push('=');
      }
      return base64.join('');
    },

    // Convert a base-64 string to a byte array
    base64ToBytes: function(base64) {
      // Remove non-base-64 characters
      base64 = base64.replace(/[^A-Z0-9+\/]/ig, '');

      for (var bytes = [], i = 0, imod4 = 0; i < base64.length;
          imod4 = ++i % 4) {
        if (imod4 == 0) continue;
        bytes.push(((base64map.indexOf(base64.charAt(i - 1))
            & (Math.pow(2, -2 * imod4 + 8) - 1)) << (imod4 * 2))
            | (base64map.indexOf(base64.charAt(i)) >>> (6 - imod4 * 2)));
      }
      return bytes;
    }
  };

  module.exports = crypt;
})();


/***/ }),

/***/ 5745:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8081);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".bullet-screen{position:fixed;z-index:1000;cursor:pointer;overflow:hidden;background:var(--comment-bg-a);border-radius:13px;-webkit-transition:color .8s,max-width .5s,max-height .5s;transition:color .8s,max-width .5s,max-height .5s;border:1px solid var(--comment-color-a)}.bullet-screen:hover,.bullet-screen:hover .avatar{border-color:var(--comment-theme)}.bullet-screen .avatar{padding:0;margin:-1px;float:left;width:26px;height:26px;cursor:pointer}.bullet-screen .comment-content{line-height:26px;padding:0 8px 0 4px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;cursor:pointer}.bullet-screen .comment-content .dream-emoji{height:24px;margin:auto 2px;vertical-align:middle}.bullet-screen.stagnation{z-index:1001}.bullet-screen:not(.click){max-height:26px;max-width:420px}.bullet-screen.click{padding:4px;overflow-y:auto;max-height:350px;min-width:140px;max-width:600px}.bullet-screen .comment-meta{padding-bottom:2px;margin-bottom:4px;border-bottom:1px solid var(--comment-color-a)}.bullet-screen .comment-meta .avatar{width:32px;height:32px}.bullet-screen .comment-author{max-height:50px;margin-left:4px;display:inline-block!important}.bullet-screen .is-admin{height:1.5em!important;line-height:1.5em!important}.bullet-screen .author-name{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font-size:1.1em!important}.bullet-screen .comment-time{display:block;font-size:.8em;color:var(--comment-color-c)}.bullet-screen .markdown-content{max-height:300px;cursor:auto}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 3869:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8081);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "::-webkit-scrollbar{height:8px;width:8px}::-webkit-scrollbar-thumb{background:hsla(0,0%,63%,.2);border-radius:2em}::-webkit-scrollbar-track{background:0 0;border-radius:2em}.halo-comment{--comment-theme:var(--theme,#50bfff);--comment-main:var(--main,#24292f);--comment-color-a:var(--comm-color-a,#e1e8ed);--comment-color-b:var(--comm-color-b,#ebeef5);--comment-color-c:var(--comm-color-c,#4a4a4a);--comment-color-d:var(--comm-color-d,#bfbfbf);--comment-color-e:var(--comm-color-e,#333);--comment-color-f:var(--comm-color-f,#909399);--comment-color-g:var(--comm-color-g,#50bfff);--comment-color-h:var(--comm-color-h,#deecff);--comment-color-i:var(--comm-color-i,#aeaeae);--comment-bg-a:var(--comm-bg-a,hsla(0,0%,100%,.8));--comment-bg-b:var(--comm-bg-b,rgba(243,248,255,.8));--comment-bg-c:var(--comm-bg-c,rgba(237,244,253,.75));--comment-bg-d:var(--comm-bg-d,hsla(0,0%,100%,.8));--comment-bg-e:var(--comm-bg-e,hsla(210,9%,96%,.25));--comment-bg-f:var(--comm-bg-f,rgba(214,239,255,.6));--comment-bg-g:var(--comm-bg-g,hsla(0,0%,96%,.8));--comment-bg-h:var(--comm-bg-h,#fff);--comment-bg-i:var(--comm-bg-i,rgba(255,236,207,.8));--comment-bg-j:var(--comm-bg-j,hsla(0,100%,91%,.8));--comment-radius-inner:var(--comm-radius-inner,4px)}.halo-comment.night{--comment-theme:var(--theme,#5d93db);--comment-main:var(--main,#999);--comment-color-a:var(--comm-color-a,#414243);--comment-color-b:var(--comm-color-b,#414243);--comment-color-c:var(--comm-color-c,silver);--comment-color-d:var(--comm-color-d,#848484);--comment-color-e:var(--comm-color-e,silver);--comment-color-f:var(--comm-color-f,#777);--comment-color-g:var(--comm-color-g,#276b92);--comment-color-h:var(--comm-color-h,#3a3b3f);--comment-color-i:var(--comm-color-i,#aeaeae);--comment-bg-a:var(--comm-bg-a,rgba(40,39,39,.6));--comment-bg-b:var(--comm-bg-b,rgba(58,59,63,.5));--comment-bg-c:var(--comm-bg-c,rgba(65,68,74,.6));--comment-bg-d:var(--comm-bg-d,rgba(40,44,52,.8));--comment-bg-e:var(--comm-bg-e,rgba(36,36,36,.15));--comment-bg-f:var(--comm-bg-f,rgba(65,68,74,.6));--comment-bg-g:var(--comm-bg-g,rgba(40,39,39,.6));--comment-bg-h:var(--comm-bg-h,rgba(40,39,39,.95));--comment-bg-i:var(--comm-bg-i,rgba(102,78,53,.5));--comment-bg-j:var(--comm-bg-j,rgba(102,53,53,.5))}.halo-comment.night iframe,.halo-comment.night img,.halo-comment.night svg,.halo-comment.night video{-webkit-filter:brightness(.8);filter:brightness(.8)}blockquote,body,dd,dl,dt,fieldset,figure,h1,h2,h3,h4,h5,h6,hr,html,iframe,legend,li,ol,p,pre,textarea,ul{margin:0;padding:0}table{border-collapse:collapse;border-spacing:0}a{color:var(--comment-theme);cursor:pointer;text-decoration:none}a:hover{color:var(--comment-color-e)}ul{list-style:disc}.btn{cursor:pointer;font-size:.9rem;padding:6px 14px;-webkit-box-sizing:border-box;box-sizing:border-box;color:var(--comment-main);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border:1px solid var(--comment-color-a);border-radius:var(--comment-radius-inner);background:hsla(0,0%,100%,.06)}.btn:hover{-webkit-filter:opacity(.8);filter:opacity(.8);color:var(--comment-theme)}.btn-primary,.btn:hover{border-color:var(--comment-theme)}.btn-primary{color:#fff;background:var(--comment-theme)}.btn-primary:hover{color:#fff}.btn-forbid{-webkit-filter:opacity(.8);filter:opacity(.8);pointer-events:none}.halo-comment{font-size:1rem;color:var(--comment-main)}.halo-comment::-moz-selection{color:#fff;background:var(--comment-theme)}.halo-comment::selection{color:#fff;background:var(--comment-theme)}.halo-comment .avatar-body{margin-right:6px}.halo-comment .avatar{display:block;-o-object-fit:cover;object-fit:cover;border-radius:100%;width:48px;height:48px;-webkit-transition:all .8s;transition:all .8s;border:1px solid var(--comment-color-a);padding:3px}.halo-comment .avatar:hover{border-color:var(--comment-theme);-webkit-transform:rotate(1turn);transform:rotate(1turn)}.halo-comment .blogger-avatar{position:relative;border-color:var(--comment-theme)}.halo-comment .blogger-avatar svg{width:20px;height:20px;position:absolute;bottom:-1px;right:-1px}.halo-comment .comment-editor{display:-webkit-box;display:-ms-flexbox;display:flex;margin-top:1.25rem;margin-bottom:1.25rem;-webkit-animation:top20 .5s;animation:top20 .5s}.halo-comment .comment-textarea{width:100%;margin-bottom:.5rem}.halo-comment .comment-textarea textarea{width:100%;min-height:90px}.halo-comment .edit-picker{float:left;margin-top:.3em;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.halo-comment .edit-picker .edit-btn{cursor:pointer;color:var(--comment-color-i)}.halo-comment .edit-picker .edit-btn:not(:first-child){margin-left:6px}.halo-comment .edit-picker .edit-btn.edit-open,.halo-comment .edit-picker .edit-btn:hover{color:var(--comment-theme)}.halo-comment .edit-picker .edit-btn.edit-open svg,.halo-comment .edit-picker .edit-btn:hover svg{fill:var(--comment-theme)}.halo-comment .edit-picker .edit-btn svg{fill:var(--comment-color-i);vertical-align:bottom}.halo-comment .emoji-fade-enter-active,.halo-comment .emoji-fade-leave-active{-webkit-transition:all .3s ease;transition:all .3s ease}.halo-comment .emoji-fade-enter,.halo-comment .emoji-fade-leave-to{opacity:0;max-height:0;-webkit-transform:translateY(-10px);transform:translateY(-10px)}.halo-comment .comment-form{-webkit-box-flex:1;-ms-flex:1 1 0px;flex:1 1 0}.halo-comment .comment-form>ul{list-style:none;float:right;margin:0;padding:0}.halo-comment .comment-form>ul li{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex}.halo-comment .comment-form>ul li:not(:last-child){margin-right:.5rem}.halo-comment .comment-form .author-info{margin-bottom:.5rem;display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:.5rem}.halo-comment .comment-form .blogger-info{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;margin-bottom:.5rem}.halo-comment .comment-form .blogger-name{font-size:1.2em;font-weight:700;color:var(--comment-main)}.halo-comment .comment-form .blogger-email{font-size:.9em;color:var(--comment-color-c)}.halo-comment .comment-form .blogger-info,.halo-comment .comment-form .comment-preview,.halo-comment .comment-form input,.halo-comment .comment-form textarea{-webkit-box-shadow:none;box-shadow:none;border:1px solid var(--comment-color-a);border-radius:var(--comment-radius-inner);background:var(--comment-bg-a);-webkit-box-sizing:border-box;box-sizing:border-box;padding:6px 10px;resize:vertical;-webkit-transition:border-color .2s;transition:border-color .2s;color:var(--comment-main)}.halo-comment .comment-form .blogger-info:focus,.halo-comment .comment-form .comment-preview:focus,.halo-comment .comment-form input:focus,.halo-comment .comment-form textarea:focus{outline:0;border-color:var(--comment-theme)}.halo-comment .comment-form .blogger-info.error,.halo-comment .comment-form .comment-preview.error,.halo-comment .comment-form input.error,.halo-comment .comment-form textarea.error{border-color:#f56c6c}.halo-comment .comment-form .blogger-info::-webkit-scrollbar,.halo-comment .comment-form .comment-preview::-webkit-scrollbar,.halo-comment .comment-form input::-webkit-scrollbar,.halo-comment .comment-form textarea::-webkit-scrollbar{height:8px;width:8px}.halo-comment .comment-form .blogger-info::-webkit-scrollbar-thumb,.halo-comment .comment-form .comment-preview::-webkit-scrollbar-thumb,.halo-comment .comment-form input::-webkit-scrollbar-thumb,.halo-comment .comment-form textarea::-webkit-scrollbar-thumb{background:hsla(0,0%,56%,.3);border-radius:2em}.halo-comment .comment-form .comment-preview{min-height:90px;margin-bottom:.5rem;overflow-wrap:break-word}.halo-comment .load-comment{text-align:center;padding-bottom:16px}.halo-comment .comment-alert{margin-top:10px;float:right;width:100%}.halo-comment .alert{color:#fff;padding:8px 16px;-webkit-animation:top20 .5s;animation:top20 .5s;-webkit-transition:opacity .6s;transition:opacity .6s;background-color:rgba(244,67,54,.8);border-radius:var(--comment-radius-inner);margin-bottom:15px}.halo-comment .alert.warning{background-color:rgba(255,152,0,.8)}.halo-comment .alert.success{background-color:rgba(76,175,80,.8)}.halo-comment .alert.info{background-color:rgba(63,184,254,.8)}.halo-comment .alert .closebtn{float:right;margin-left:15px;color:#fff;font-weight:700;font-size:22px;line-height:16px;cursor:pointer;-webkit-transition:.3s;transition:.3s}.halo-comment .alert .closebtn:hover{color:var(--comment-theme)}.halo-comment .comment-empty{margin:30px 0;text-align:center;color:var(--comment-color-f)}.halo-comment .children-nodes,.halo-comment .comment-nodes{padding:0;margin:0}.halo-comment .children-nodes .avatar{width:40px;height:40px}.halo-comment .children-nodes .blogger-avatar svg{width:18px;height:18px}.halo-comment .comment{margin-top:10px;list-style-type:none}.halo-comment .comment.recycle>.comment-body .markdown-body{color:#ff9800;background:var(--comment-bg-i)}.halo-comment .comment.delete .comment-main .markdown-body{color:red;background:var(--comment-bg-j);text-decoration:line-through}.halo-comment .unfold-reply{display:-webkit-box;display:-ms-flexbox;display:flex}.halo-comment .unfold-reply span{margin:10px 0 0 auto;color:var(--theme);font-size:.9em;cursor:pointer}.halo-comment .unfold-reply span:after{content:\">\";margin-left:2px;font-size:1.3em}.halo-comment .index-1{margin-top:20px;padding-bottom:20px}.halo-comment .index-1>.children-nodes{margin-left:56px}.halo-comment .index-1:not(:last-child){border-bottom:1px solid var(--comment-color-b)}.halo-comment .comment-body{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-transition:all .4s;transition:all .4s}.halo-comment .comment-body:hover .author-operation{opacity:1;pointer-events:auto}.halo-comment .comment-action{-webkit-box-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.halo-comment .comment-title{font-size:1.3em}.halo-comment .comment-operation{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.halo-comment .comment-bullet-screen{font-size:1.1em;line-height:1.1;height:1em;font-weight:600;font-family:ui-serif,serif!important;cursor:pointer;position:relative;margin-right:6px;color:var(--comment-color-i);background-image:linear-gradient(45deg,transparent 46%,var(--comment-color-i) 46%,var(--comment-color-i) 54%,transparent 54%)}.halo-comment .comment-bullet-screen.operation-open{color:var(--comment-theme);background:none}.halo-comment .comment-refresh{width:1.2em;height:1.2em;fill:var(--comment-theme);cursor:pointer}.halo-comment .comment-meta .comment-author{-webkit-box-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.halo-comment .comment-meta .author-meta{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.halo-comment .comment-meta .author-name{font-size:1.2em;font-weight:700;color:var(--comment-main);text-decoration:none;margin-right:5px}.halo-comment .comment-meta .author-name:hover{color:var(--comment-theme)}.halo-comment .comment-meta .is-admin{padding:0 4px;height:1.6em;line-height:1.6em;font-size:.7em;color:#fb7299;border-radius:3px;border:1px solid #fb7299;background:rgba(255,136,169,.3)}.halo-comment .comment-meta .author-operation{display:-webkit-box;display:-ms-flexbox;display:flex;opacity:0;pointer-events:none;-webkit-transition:all .2s;transition:all .2s}.halo-comment .comment-meta .comment-reply{padding:2px 8px;margin-right:6px}.halo-comment .comment-meta .comment-operation{width:14px;padding:2px 2px;position:relative}.halo-comment .comment-meta .comment-operation svg{fill:var(--comment-color-f)}.halo-comment .comment-meta .comment-operation-list{display:none;position:absolute;top:16px;right:0;overflow:hidden;color:var(--comment-main)!important;background:var(--comment-bg-h);border-radius:var(--comment-radius-inner);-webkit-box-shadow:0 2px 8px rgba(0,0,0,.05);box-shadow:0 2px 8px rgba(0,0,0,.05)}.halo-comment .comment-meta .comment-operation-list li{padding:4px 8px;text-align:center;white-space:nowrap}.halo-comment .comment-meta .comment-operation-list li:hover{background:hsla(0,0%,76%,.15)}.halo-comment .comment-meta .comment-operation:hover svg{fill:var(--comment-theme)}.halo-comment .comment-meta .comment-operation:hover .comment-operation-list{display:block}.halo-comment .comment-meta .comment-info{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-ms-flex:1;flex:1;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;font-size:.9em}.halo-comment .comment-meta .comment-time{color:var(--comment-color-c)}.halo-comment .comment-meta .useragent-info{color:var(--comment-color-d)}.halo-comment .comment-main{-webkit-box-flex:1;-ms-flex:1 1 0px;flex:1 1 0;width:0}.halo-comment .comment-main .markdown-body{padding:10px;margin-top:5px;background:var(--comment-bg-b);border-radius:0 8px 8px 8px}.halo-comment .comment-active,.halo-comment .comment-ref{-webkit-transform:translateY(-3px);transform:translateY(-3px)}.halo-comment .comment-active .author-name,.halo-comment .comment-active .comment-time,.halo-comment .comment-active .useragent-info,.halo-comment .comment-ref .author-name,.halo-comment .comment-ref .comment-time,.halo-comment .comment-ref .useragent-info{color:var(--comment-theme)}.halo-comment .comment-active .markdown-body,.halo-comment .comment-ref .markdown-body{background:var(--comment-color-h);-webkit-box-shadow:0 24px 20px -14px rgba(63,83,122,.3);box-shadow:0 24px 20px -14px rgba(63,83,122,.3)}@media(max-width:1023px){.halo-comment .avatar{width:38px;height:38px}.halo-comment .blogger-avatar svg{width:18px;height:18px}.halo-comment .children-nodes .avatar{width:30px;height:30px}.halo-comment .children-nodes .blogger-avatar svg{width:16px;height:16px}.halo-comment .index-1>.children-nodes{margin-left:46px}}@media(max-width:768px){.halo-comment .author-info{grid-template-columns:auto!important}.halo-comment .comment-meta .author-operation{opacity:1;pointer-events:auto}}@media(max-width:511px){.halo-comment .useragent-info{display:none!important}.halo-comment .avatar{width:30px;height:30px}.halo-comment .blogger-avatar svg{width:16px;height:16px}.halo-comment .children-nodes .avatar{width:24px;height:24px}.halo-comment .children-nodes .blogger-avatar svg{width:14px;height:14px}.halo-comment .markdown-body{margin-left:-25px}.halo-comment .index-1>.children-nodes{margin-left:19px}.halo-comment .children-nodes .markdown-body{margin-left:-22px}}@media(max-height:500px),(max-width:768px){.bullet-screen-container,.comment-bullet-screen{display:none}}@-webkit-keyframes top20{0%{opacity:0;-webkit-transform:translateY(-20px);transform:translateY(-20px)}to{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}}@keyframes top20{0%{opacity:0;-webkit-transform:translateY(-20px);transform:translateY(-20px)}to{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}}.markdown-body>.comment-reference{margin-right:6px;float:left}.markdown-body>.comment-reference+.markdown-content>:first-child:not(p):not(a):not(.dream-emoji){margin-top:1.6rem}.markdown-content>:first-child{margin-top:0}.markdown-content>:last-child{margin-bottom:0}.markdown-content p{line-height:1.5em;margin-bottom:8px}.markdown-content h1,.markdown-content h2,.markdown-content h3,.markdown-content h4,.markdown-content h5,.markdown-content h6{color:var(--comment-color-e);margin-bottom:12px}.markdown-content h1,.markdown-content h2{padding-bottom:.2em;border-bottom:1px solid var(--comment-color-b)}.markdown-content h1{margin:28px 0 18px 0;font-size:1.45em}.markdown-content h2{margin:24px 0 16px 0;font-size:1.25em}.markdown-content h3{margin:20px 0 15px 0;font-size:1.2em}.markdown-content h4{font-size:1.15em}.markdown-content h5,.markdown-content h6{font-size:1em}.markdown-content img:not([class]){max-width:100%;max-height:500px;-webkit-transition:all .35s;transition:all .35s;margin:5px 0;border-radius:5px;cursor:pointer}.markdown-content img:not([class]):hover{-webkit-box-shadow:0 34px 20px -24px rgba(136,161,206,.3);box-shadow:0 34px 20px -24px rgba(136,161,206,.3)}.markdown-content a:not([class]){line-height:1.5em;color:var(--comment-theme);background-image:linear-gradient(transparent calc(100% - 1px),var(--comment-theme) 1px);background-repeat:no-repeat;background-size:0 100%;-webkit-transition:all .35s ease-in-out;transition:all .35s ease-in-out}.markdown-content a:not([class]):hover{color:var(--comment-theme);background-size:100% 100%}.markdown-content ol,.markdown-content ul{margin-bottom:8px;padding-left:30px}.markdown-content ol li,.markdown-content ul li{line-height:1.5em}.markdown-content ol li.task-list-item,.markdown-content ul li.task-list-item{list-style:none;margin-left:-26px}.markdown-content table{width:100%;max-width:100%;table-layout:fixed;border-collapse:unset;color:var(--comment-main);background:var(--comment-bg-d);margin-bottom:8px;overflow:hidden;font-size:.95em;border:1px solid var(--comment-color-b);border-radius:var(--comment-radius-inner)}.markdown-content table td,.markdown-content table th{padding:8px;border-right:1px solid var(--comment-color-b);border-bottom:1px solid var(--comment-color-b)}.markdown-content table thead th{font-weight:500;background:var(--comment-bg-c)}.markdown-content table thead th:last-child{border-right:none}.markdown-content table tbody tr{-webkit-transition:background .35s;transition:background .35s}.markdown-content table tbody tr:nth-child(2n){background:var(--comment-bg-e)}.markdown-content table tbody tr:last-child td{border-bottom:none}.markdown-content table tbody tr:hover{background:hsla(0,0%,70%,.15)}.markdown-content table tbody tr td:last-child{border-right:none}.markdown-content pre{padding:16px;overflow:auto;font-size:85%;line-height:1.45;margin-bottom:8px;background-color:var(--comment-bg-a);border-radius:6px}.markdown-content :not(pre)>code{font-size:.9em;color:var(--comment-color-c);margin:0 2px;padding:3px 6px;white-space:normal;vertical-align:baseline;word-break:break-word;background:rgba(175,184,193,.2);border-radius:var(--comment-radius-inner)}.markdown-content blockquote{line-height:1.5em;margin-bottom:8px;padding:6px 10px;color:var(--comment-color-f);background:var(--comment-bg-f);border-left:5px solid var(--comment-color-g);border-radius:var(--comment-radius-inner)}.markdown-content blockquote *{margin:0!important}.markdown-content .dream-emoji{width:1.6em;height:1.6em;margin:auto 2px;vertical-align:middle}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 8313:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8081);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".comment-loader-container{-webkit-animation:top20 .5s;animation:top20 .5s;position:relative;text-align:center;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;margin:30px 0}.comment-loader-container .comment-loader-default{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;width:30px}.comment-loader-container .comment-loader-default span{width:4px;height:15px;background-color:#898c7b}.comment-loader-container .comment-loader-default span:first-of-type{-webkit-animation:grow 1s ease-in-out -.45s infinite;animation:grow 1s ease-in-out -.45s infinite}.comment-loader-container .comment-loader-default span:nth-of-type(2){-webkit-animation:grow 1s ease-in-out -.3s infinite;animation:grow 1s ease-in-out -.3s infinite}.comment-loader-container .comment-loader-default span:nth-of-type(3){-webkit-animation:grow 1s ease-in-out -.15s infinite;animation:grow 1s ease-in-out -.15s infinite}.comment-loader-container .comment-loader-default span:nth-of-type(4){-webkit-animation:grow 1s ease-in-out infinite;animation:grow 1s ease-in-out infinite}@-webkit-keyframes grow{0%,to{-webkit-transform:scaleY(1);transform:scaleY(1)}50%{-webkit-transform:scaleY(2);transform:scaleY(2)}}@keyframes grow{0%,to{-webkit-transform:scaleY(1);transform:scaleY(1)}50%{-webkit-transform:scaleY(2);transform:scaleY(2)}}.comment-loader-container .comment-loader-circle{border:3px solid #898c7b;border-top-color:#fff;border-radius:50%;width:2.5em;height:2.5em;-webkit-animation:spin .7s linear infinite;animation:spin .7s linear infinite}@-webkit-keyframes spin{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes spin{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.comment-loader-container .comment-loader-balls{width:3.5em;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.comment-loader-container .comment-loader-balls div{width:.7em;height:.7em;border-radius:50%;background-color:#898c7b;-webkit-transform:translateY(-100%);transform:translateY(-100%);-webkit-animation:wave .7s ease-in-out infinite alternate;animation:wave .7s ease-in-out infinite alternate}.comment-loader-container .comment-loader-balls div:first-of-type{-webkit-animation-delay:-.4s;animation-delay:-.4s}.comment-loader-container .comment-loader-balls div:nth-of-type(2){-webkit-animation-delay:-.2s;animation-delay:-.2s}@-webkit-keyframes wave{0%{-webkit-transform:translateY(-100%);transform:translateY(-100%)}to{-webkit-transform:translateY(100%);transform:translateY(100%)}}@keyframes wave{0%{-webkit-transform:translateY(-100%);transform:translateY(-100%)}to{-webkit-transform:translateY(100%);transform:translateY(100%)}}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 555:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8081);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".comment-page{margin-top:30px;text-align:center;border-top:2px solid var(--comment-bg-b)}.comment-page .page{display:inline-block;padding:10px 0;margin:0}.comment-page .page li{display:inline;margin-right:5px}.comment-page .page button{margin-bottom:8px;position:relative;font-size:inherit;font-family:inherit;padding:5px 10px;border:1px solid var(--comment-color-a);border-radius:4px;-webkit-transition:all .8s;transition:all .8s;font-weight:400;color:var(--comment-color-f);background-color:var(--comment-bg-a)}.comment-page .page button:not(.disabled){cursor:pointer}.comment-page .page .active,.comment-page .page button:not(.disabled):hover{color:var(--comment-theme);border-color:var(--comment-theme)}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 898:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8081);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".emoji-container{max-height:120px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border-radius:4px;padding:6px;background:var(--comment-bg-g);margin:5px 0;overflow-y:auto}.emoji-container::-webkit-scrollbar{height:5px;width:5px}.emoji-container::-webkit-scrollbar-thumb{background:hsla(0,0%,56%,.3);border-radius:2em}.emoji-container .emoji-item{padding:3px;cursor:pointer;border-radius:4px;display:inline-block}.emoji-container .emoji-item:hover{background-color:hsla(216,2%,53%,.2)}.emoji-container .emoji-item img{display:block;width:30px;height:30px}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 3645:
/***/ (function(module) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ 8081:
/***/ (function(module) {

"use strict";


module.exports = function (i) {
  return i[1];
};

/***/ }),

/***/ 6230:
/***/ (function(module) {

/* eslint-env browser */
module.exports = typeof self == 'object' ? self.FormData : window.FormData;


/***/ }),

/***/ 7648:
/***/ (function(module) {

"use strict";


/* eslint no-invalid-this: 1 */

var ERROR_MESSAGE = 'Function.prototype.bind called on incompatible ';
var slice = Array.prototype.slice;
var toStr = Object.prototype.toString;
var funcType = '[object Function]';

module.exports = function bind(that) {
    var target = this;
    if (typeof target !== 'function' || toStr.call(target) !== funcType) {
        throw new TypeError(ERROR_MESSAGE + target);
    }
    var args = slice.call(arguments, 1);

    var bound;
    var binder = function () {
        if (this instanceof bound) {
            var result = target.apply(
                this,
                args.concat(slice.call(arguments))
            );
            if (Object(result) === result) {
                return result;
            }
            return this;
        } else {
            return target.apply(
                that,
                args.concat(slice.call(arguments))
            );
        }
    };

    var boundLength = Math.max(0, target.length - args.length);
    var boundArgs = [];
    for (var i = 0; i < boundLength; i++) {
        boundArgs.push('$' + i);
    }

    bound = Function('binder', 'return function (' + boundArgs.join(',') + '){ return binder.apply(this,arguments); }')(binder);

    if (target.prototype) {
        var Empty = function Empty() {};
        Empty.prototype = target.prototype;
        bound.prototype = new Empty();
        Empty.prototype = null;
    }

    return bound;
};


/***/ }),

/***/ 8612:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var implementation = __webpack_require__(7648);

module.exports = Function.prototype.bind || implementation;


/***/ }),

/***/ 210:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var undefined;

var $SyntaxError = SyntaxError;
var $Function = Function;
var $TypeError = TypeError;

// eslint-disable-next-line consistent-return
var getEvalledConstructor = function (expressionSyntax) {
	try {
		return $Function('"use strict"; return (' + expressionSyntax + ').constructor;')();
	} catch (e) {}
};

var $gOPD = Object.getOwnPropertyDescriptor;
if ($gOPD) {
	try {
		$gOPD({}, '');
	} catch (e) {
		$gOPD = null; // this is IE 8, which has a broken gOPD
	}
}

var throwTypeError = function () {
	throw new $TypeError();
};
var ThrowTypeError = $gOPD
	? (function () {
		try {
			// eslint-disable-next-line no-unused-expressions, no-caller, no-restricted-properties
			arguments.callee; // IE 8 does not throw here
			return throwTypeError;
		} catch (calleeThrows) {
			try {
				// IE 8 throws on Object.getOwnPropertyDescriptor(arguments, '')
				return $gOPD(arguments, 'callee').get;
			} catch (gOPDthrows) {
				return throwTypeError;
			}
		}
	}())
	: throwTypeError;

var hasSymbols = __webpack_require__(1405)();

var getProto = Object.getPrototypeOf || function (x) { return x.__proto__; }; // eslint-disable-line no-proto

var needsEval = {};

var TypedArray = typeof Uint8Array === 'undefined' ? undefined : getProto(Uint8Array);

var INTRINSICS = {
	'%AggregateError%': typeof AggregateError === 'undefined' ? undefined : AggregateError,
	'%Array%': Array,
	'%ArrayBuffer%': typeof ArrayBuffer === 'undefined' ? undefined : ArrayBuffer,
	'%ArrayIteratorPrototype%': hasSymbols ? getProto([][Symbol.iterator]()) : undefined,
	'%AsyncFromSyncIteratorPrototype%': undefined,
	'%AsyncFunction%': needsEval,
	'%AsyncGenerator%': needsEval,
	'%AsyncGeneratorFunction%': needsEval,
	'%AsyncIteratorPrototype%': needsEval,
	'%Atomics%': typeof Atomics === 'undefined' ? undefined : Atomics,
	'%BigInt%': typeof BigInt === 'undefined' ? undefined : BigInt,
	'%Boolean%': Boolean,
	'%DataView%': typeof DataView === 'undefined' ? undefined : DataView,
	'%Date%': Date,
	'%decodeURI%': decodeURI,
	'%decodeURIComponent%': decodeURIComponent,
	'%encodeURI%': encodeURI,
	'%encodeURIComponent%': encodeURIComponent,
	'%Error%': Error,
	'%eval%': eval, // eslint-disable-line no-eval
	'%EvalError%': EvalError,
	'%Float32Array%': typeof Float32Array === 'undefined' ? undefined : Float32Array,
	'%Float64Array%': typeof Float64Array === 'undefined' ? undefined : Float64Array,
	'%FinalizationRegistry%': typeof FinalizationRegistry === 'undefined' ? undefined : FinalizationRegistry,
	'%Function%': $Function,
	'%GeneratorFunction%': needsEval,
	'%Int8Array%': typeof Int8Array === 'undefined' ? undefined : Int8Array,
	'%Int16Array%': typeof Int16Array === 'undefined' ? undefined : Int16Array,
	'%Int32Array%': typeof Int32Array === 'undefined' ? undefined : Int32Array,
	'%isFinite%': isFinite,
	'%isNaN%': isNaN,
	'%IteratorPrototype%': hasSymbols ? getProto(getProto([][Symbol.iterator]())) : undefined,
	'%JSON%': typeof JSON === 'object' ? JSON : undefined,
	'%Map%': typeof Map === 'undefined' ? undefined : Map,
	'%MapIteratorPrototype%': typeof Map === 'undefined' || !hasSymbols ? undefined : getProto(new Map()[Symbol.iterator]()),
	'%Math%': Math,
	'%Number%': Number,
	'%Object%': Object,
	'%parseFloat%': parseFloat,
	'%parseInt%': parseInt,
	'%Promise%': typeof Promise === 'undefined' ? undefined : Promise,
	'%Proxy%': typeof Proxy === 'undefined' ? undefined : Proxy,
	'%RangeError%': RangeError,
	'%ReferenceError%': ReferenceError,
	'%Reflect%': typeof Reflect === 'undefined' ? undefined : Reflect,
	'%RegExp%': RegExp,
	'%Set%': typeof Set === 'undefined' ? undefined : Set,
	'%SetIteratorPrototype%': typeof Set === 'undefined' || !hasSymbols ? undefined : getProto(new Set()[Symbol.iterator]()),
	'%SharedArrayBuffer%': typeof SharedArrayBuffer === 'undefined' ? undefined : SharedArrayBuffer,
	'%String%': String,
	'%StringIteratorPrototype%': hasSymbols ? getProto(''[Symbol.iterator]()) : undefined,
	'%Symbol%': hasSymbols ? Symbol : undefined,
	'%SyntaxError%': $SyntaxError,
	'%ThrowTypeError%': ThrowTypeError,
	'%TypedArray%': TypedArray,
	'%TypeError%': $TypeError,
	'%Uint8Array%': typeof Uint8Array === 'undefined' ? undefined : Uint8Array,
	'%Uint8ClampedArray%': typeof Uint8ClampedArray === 'undefined' ? undefined : Uint8ClampedArray,
	'%Uint16Array%': typeof Uint16Array === 'undefined' ? undefined : Uint16Array,
	'%Uint32Array%': typeof Uint32Array === 'undefined' ? undefined : Uint32Array,
	'%URIError%': URIError,
	'%WeakMap%': typeof WeakMap === 'undefined' ? undefined : WeakMap,
	'%WeakRef%': typeof WeakRef === 'undefined' ? undefined : WeakRef,
	'%WeakSet%': typeof WeakSet === 'undefined' ? undefined : WeakSet
};

var doEval = function doEval(name) {
	var value;
	if (name === '%AsyncFunction%') {
		value = getEvalledConstructor('async function () {}');
	} else if (name === '%GeneratorFunction%') {
		value = getEvalledConstructor('function* () {}');
	} else if (name === '%AsyncGeneratorFunction%') {
		value = getEvalledConstructor('async function* () {}');
	} else if (name === '%AsyncGenerator%') {
		var fn = doEval('%AsyncGeneratorFunction%');
		if (fn) {
			value = fn.prototype;
		}
	} else if (name === '%AsyncIteratorPrototype%') {
		var gen = doEval('%AsyncGenerator%');
		if (gen) {
			value = getProto(gen.prototype);
		}
	}

	INTRINSICS[name] = value;

	return value;
};

var LEGACY_ALIASES = {
	'%ArrayBufferPrototype%': ['ArrayBuffer', 'prototype'],
	'%ArrayPrototype%': ['Array', 'prototype'],
	'%ArrayProto_entries%': ['Array', 'prototype', 'entries'],
	'%ArrayProto_forEach%': ['Array', 'prototype', 'forEach'],
	'%ArrayProto_keys%': ['Array', 'prototype', 'keys'],
	'%ArrayProto_values%': ['Array', 'prototype', 'values'],
	'%AsyncFunctionPrototype%': ['AsyncFunction', 'prototype'],
	'%AsyncGenerator%': ['AsyncGeneratorFunction', 'prototype'],
	'%AsyncGeneratorPrototype%': ['AsyncGeneratorFunction', 'prototype', 'prototype'],
	'%BooleanPrototype%': ['Boolean', 'prototype'],
	'%DataViewPrototype%': ['DataView', 'prototype'],
	'%DatePrototype%': ['Date', 'prototype'],
	'%ErrorPrototype%': ['Error', 'prototype'],
	'%EvalErrorPrototype%': ['EvalError', 'prototype'],
	'%Float32ArrayPrototype%': ['Float32Array', 'prototype'],
	'%Float64ArrayPrototype%': ['Float64Array', 'prototype'],
	'%FunctionPrototype%': ['Function', 'prototype'],
	'%Generator%': ['GeneratorFunction', 'prototype'],
	'%GeneratorPrototype%': ['GeneratorFunction', 'prototype', 'prototype'],
	'%Int8ArrayPrototype%': ['Int8Array', 'prototype'],
	'%Int16ArrayPrototype%': ['Int16Array', 'prototype'],
	'%Int32ArrayPrototype%': ['Int32Array', 'prototype'],
	'%JSONParse%': ['JSON', 'parse'],
	'%JSONStringify%': ['JSON', 'stringify'],
	'%MapPrototype%': ['Map', 'prototype'],
	'%NumberPrototype%': ['Number', 'prototype'],
	'%ObjectPrototype%': ['Object', 'prototype'],
	'%ObjProto_toString%': ['Object', 'prototype', 'toString'],
	'%ObjProto_valueOf%': ['Object', 'prototype', 'valueOf'],
	'%PromisePrototype%': ['Promise', 'prototype'],
	'%PromiseProto_then%': ['Promise', 'prototype', 'then'],
	'%Promise_all%': ['Promise', 'all'],
	'%Promise_reject%': ['Promise', 'reject'],
	'%Promise_resolve%': ['Promise', 'resolve'],
	'%RangeErrorPrototype%': ['RangeError', 'prototype'],
	'%ReferenceErrorPrototype%': ['ReferenceError', 'prototype'],
	'%RegExpPrototype%': ['RegExp', 'prototype'],
	'%SetPrototype%': ['Set', 'prototype'],
	'%SharedArrayBufferPrototype%': ['SharedArrayBuffer', 'prototype'],
	'%StringPrototype%': ['String', 'prototype'],
	'%SymbolPrototype%': ['Symbol', 'prototype'],
	'%SyntaxErrorPrototype%': ['SyntaxError', 'prototype'],
	'%TypedArrayPrototype%': ['TypedArray', 'prototype'],
	'%TypeErrorPrototype%': ['TypeError', 'prototype'],
	'%Uint8ArrayPrototype%': ['Uint8Array', 'prototype'],
	'%Uint8ClampedArrayPrototype%': ['Uint8ClampedArray', 'prototype'],
	'%Uint16ArrayPrototype%': ['Uint16Array', 'prototype'],
	'%Uint32ArrayPrototype%': ['Uint32Array', 'prototype'],
	'%URIErrorPrototype%': ['URIError', 'prototype'],
	'%WeakMapPrototype%': ['WeakMap', 'prototype'],
	'%WeakSetPrototype%': ['WeakSet', 'prototype']
};

var bind = __webpack_require__(8612);
var hasOwn = __webpack_require__(7642);
var $concat = bind.call(Function.call, Array.prototype.concat);
var $spliceApply = bind.call(Function.apply, Array.prototype.splice);
var $replace = bind.call(Function.call, String.prototype.replace);
var $strSlice = bind.call(Function.call, String.prototype.slice);

/* adapted from https://github.com/lodash/lodash/blob/4.17.15/dist/lodash.js#L6735-L6744 */
var rePropName = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
var reEscapeChar = /\\(\\)?/g; /** Used to match backslashes in property paths. */
var stringToPath = function stringToPath(string) {
	var first = $strSlice(string, 0, 1);
	var last = $strSlice(string, -1);
	if (first === '%' && last !== '%') {
		throw new $SyntaxError('invalid intrinsic syntax, expected closing `%`');
	} else if (last === '%' && first !== '%') {
		throw new $SyntaxError('invalid intrinsic syntax, expected opening `%`');
	}
	var result = [];
	$replace(string, rePropName, function (match, number, quote, subString) {
		result[result.length] = quote ? $replace(subString, reEscapeChar, '$1') : number || match;
	});
	return result;
};
/* end adaptation */

var getBaseIntrinsic = function getBaseIntrinsic(name, allowMissing) {
	var intrinsicName = name;
	var alias;
	if (hasOwn(LEGACY_ALIASES, intrinsicName)) {
		alias = LEGACY_ALIASES[intrinsicName];
		intrinsicName = '%' + alias[0] + '%';
	}

	if (hasOwn(INTRINSICS, intrinsicName)) {
		var value = INTRINSICS[intrinsicName];
		if (value === needsEval) {
			value = doEval(intrinsicName);
		}
		if (typeof value === 'undefined' && !allowMissing) {
			throw new $TypeError('intrinsic ' + name + ' exists, but is not available. Please file an issue!');
		}

		return {
			alias: alias,
			name: intrinsicName,
			value: value
		};
	}

	throw new $SyntaxError('intrinsic ' + name + ' does not exist!');
};

module.exports = function GetIntrinsic(name, allowMissing) {
	if (typeof name !== 'string' || name.length === 0) {
		throw new $TypeError('intrinsic name must be a non-empty string');
	}
	if (arguments.length > 1 && typeof allowMissing !== 'boolean') {
		throw new $TypeError('"allowMissing" argument must be a boolean');
	}

	var parts = stringToPath(name);
	var intrinsicBaseName = parts.length > 0 ? parts[0] : '';

	var intrinsic = getBaseIntrinsic('%' + intrinsicBaseName + '%', allowMissing);
	var intrinsicRealName = intrinsic.name;
	var value = intrinsic.value;
	var skipFurtherCaching = false;

	var alias = intrinsic.alias;
	if (alias) {
		intrinsicBaseName = alias[0];
		$spliceApply(parts, $concat([0, 1], alias));
	}

	for (var i = 1, isOwn = true; i < parts.length; i += 1) {
		var part = parts[i];
		var first = $strSlice(part, 0, 1);
		var last = $strSlice(part, -1);
		if (
			(
				(first === '"' || first === "'" || first === '`')
				|| (last === '"' || last === "'" || last === '`')
			)
			&& first !== last
		) {
			throw new $SyntaxError('property names with quotes must have matching quotes');
		}
		if (part === 'constructor' || !isOwn) {
			skipFurtherCaching = true;
		}

		intrinsicBaseName += '.' + part;
		intrinsicRealName = '%' + intrinsicBaseName + '%';

		if (hasOwn(INTRINSICS, intrinsicRealName)) {
			value = INTRINSICS[intrinsicRealName];
		} else if (value != null) {
			if (!(part in value)) {
				if (!allowMissing) {
					throw new $TypeError('base intrinsic for ' + name + ' exists, but the property is not available.');
				}
				return void undefined;
			}
			if ($gOPD && (i + 1) >= parts.length) {
				var desc = $gOPD(value, part);
				isOwn = !!desc;

				// By convention, when a data property is converted to an accessor
				// property to emulate a data property that does not suffer from
				// the override mistake, that accessor's getter is marked with
				// an `originalValue` property. Here, when we detect this, we
				// uphold the illusion by pretending to see that original data
				// property, i.e., returning the value rather than the getter
				// itself.
				if (isOwn && 'get' in desc && !('originalValue' in desc.get)) {
					value = desc.get;
				} else {
					value = value[part];
				}
			} else {
				isOwn = hasOwn(value, part);
				value = value[part];
			}

			if (isOwn && !skipFurtherCaching) {
				INTRINSICS[intrinsicRealName] = value;
			}
		}
	}
	return value;
};


/***/ }),

/***/ 1405:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var origSymbol = typeof Symbol !== 'undefined' && Symbol;
var hasSymbolSham = __webpack_require__(5419);

module.exports = function hasNativeSymbols() {
	if (typeof origSymbol !== 'function') { return false; }
	if (typeof Symbol !== 'function') { return false; }
	if (typeof origSymbol('foo') !== 'symbol') { return false; }
	if (typeof Symbol('bar') !== 'symbol') { return false; }

	return hasSymbolSham();
};


/***/ }),

/***/ 5419:
/***/ (function(module) {

"use strict";


/* eslint complexity: [2, 18], max-statements: [2, 33] */
module.exports = function hasSymbols() {
	if (typeof Symbol !== 'function' || typeof Object.getOwnPropertySymbols !== 'function') { return false; }
	if (typeof Symbol.iterator === 'symbol') { return true; }

	var obj = {};
	var sym = Symbol('test');
	var symObj = Object(sym);
	if (typeof sym === 'string') { return false; }

	if (Object.prototype.toString.call(sym) !== '[object Symbol]') { return false; }
	if (Object.prototype.toString.call(symObj) !== '[object Symbol]') { return false; }

	// temp disabled per https://github.com/ljharb/object.assign/issues/17
	// if (sym instanceof Symbol) { return false; }
	// temp disabled per https://github.com/WebReflection/get-own-property-symbols/issues/4
	// if (!(symObj instanceof Symbol)) { return false; }

	// if (typeof Symbol.prototype.toString !== 'function') { return false; }
	// if (String(sym) !== Symbol.prototype.toString.call(sym)) { return false; }

	var symVal = 42;
	obj[sym] = symVal;
	for (sym in obj) { return false; } // eslint-disable-line no-restricted-syntax, no-unreachable-loop
	if (typeof Object.keys === 'function' && Object.keys(obj).length !== 0) { return false; }

	if (typeof Object.getOwnPropertyNames === 'function' && Object.getOwnPropertyNames(obj).length !== 0) { return false; }

	var syms = Object.getOwnPropertySymbols(obj);
	if (syms.length !== 1 || syms[0] !== sym) { return false; }

	if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) { return false; }

	if (typeof Object.getOwnPropertyDescriptor === 'function') {
		var descriptor = Object.getOwnPropertyDescriptor(obj, sym);
		if (descriptor.value !== symVal || descriptor.enumerable !== true) { return false; }
	}

	return true;
};


/***/ }),

/***/ 7642:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(8612);

module.exports = bind.call(Function.call, Object.prototype.hasOwnProperty);


/***/ }),

/***/ 8738:
/***/ (function(module) {

/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */

// The _isBuffer check is for Safari 5-7 support, because it's missing
// Object.prototype.constructor. Remove this eventually
module.exports = function (obj) {
  return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer)
}

function isBuffer (obj) {
  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
}

// For Node v0.10 support. Remove this eventually.
function isSlowBuffer (obj) {
  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0))
}


/***/ }),

/***/ 9575:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

//
// THIS FILE IS AUTOMATICALLY GENERATED! DO NOT EDIT BY HAND!
//
;
(function (global, factory) {
     true
        ? module.exports = factory()
        : 0;
}((typeof self !== 'undefined' ? self
    : typeof window !== 'undefined' ? window
        : typeof __webpack_require__.g !== 'undefined' ? __webpack_require__.g
            : this), function () {
    'use strict';
    /**
     *  base64.ts
     *
     *  Licensed under the BSD 3-Clause License.
     *    http://opensource.org/licenses/BSD-3-Clause
     *
     *  References:
     *    http://en.wikipedia.org/wiki/Base64
     *
     * @author Dan Kogai (https://github.com/dankogai)
     */
    var version = '3.7.2';
    /**
     * @deprecated use lowercase `version`.
     */
    var VERSION = version;
    var _hasatob = typeof atob === 'function';
    var _hasbtoa = typeof btoa === 'function';
    var _hasBuffer = typeof Buffer === 'function';
    var _TD = typeof TextDecoder === 'function' ? new TextDecoder() : undefined;
    var _TE = typeof TextEncoder === 'function' ? new TextEncoder() : undefined;
    var b64ch = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
    var b64chs = Array.prototype.slice.call(b64ch);
    var b64tab = (function (a) {
        var tab = {};
        a.forEach(function (c, i) { return tab[c] = i; });
        return tab;
    })(b64chs);
    var b64re = /^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/;
    var _fromCC = String.fromCharCode.bind(String);
    var _U8Afrom = typeof Uint8Array.from === 'function'
        ? Uint8Array.from.bind(Uint8Array)
        : function (it, fn) {
            if (fn === void 0) { fn = function (x) { return x; }; }
            return new Uint8Array(Array.prototype.slice.call(it, 0).map(fn));
        };
    var _mkUriSafe = function (src) { return src
        .replace(/=/g, '').replace(/[+\/]/g, function (m0) { return m0 == '+' ? '-' : '_'; }); };
    var _tidyB64 = function (s) { return s.replace(/[^A-Za-z0-9\+\/]/g, ''); };
    /**
     * polyfill version of `btoa`
     */
    var btoaPolyfill = function (bin) {
        // console.log('polyfilled');
        var u32, c0, c1, c2, asc = '';
        var pad = bin.length % 3;
        for (var i = 0; i < bin.length;) {
            if ((c0 = bin.charCodeAt(i++)) > 255 ||
                (c1 = bin.charCodeAt(i++)) > 255 ||
                (c2 = bin.charCodeAt(i++)) > 255)
                throw new TypeError('invalid character found');
            u32 = (c0 << 16) | (c1 << 8) | c2;
            asc += b64chs[u32 >> 18 & 63]
                + b64chs[u32 >> 12 & 63]
                + b64chs[u32 >> 6 & 63]
                + b64chs[u32 & 63];
        }
        return pad ? asc.slice(0, pad - 3) + "===".substring(pad) : asc;
    };
    /**
     * does what `window.btoa` of web browsers do.
     * @param {String} bin binary string
     * @returns {string} Base64-encoded string
     */
    var _btoa = _hasbtoa ? function (bin) { return btoa(bin); }
        : _hasBuffer ? function (bin) { return Buffer.from(bin, 'binary').toString('base64'); }
            : btoaPolyfill;
    var _fromUint8Array = _hasBuffer
        ? function (u8a) { return Buffer.from(u8a).toString('base64'); }
        : function (u8a) {
            // cf. https://stackoverflow.com/questions/12710001/how-to-convert-uint8-array-to-base64-encoded-string/12713326#12713326
            var maxargs = 0x1000;
            var strs = [];
            for (var i = 0, l = u8a.length; i < l; i += maxargs) {
                strs.push(_fromCC.apply(null, u8a.subarray(i, i + maxargs)));
            }
            return _btoa(strs.join(''));
        };
    /**
     * converts a Uint8Array to a Base64 string.
     * @param {boolean} [urlsafe] URL-and-filename-safe a la RFC4648 §5
     * @returns {string} Base64 string
     */
    var fromUint8Array = function (u8a, urlsafe) {
        if (urlsafe === void 0) { urlsafe = false; }
        return urlsafe ? _mkUriSafe(_fromUint8Array(u8a)) : _fromUint8Array(u8a);
    };
    // This trick is found broken https://github.com/dankogai/js-base64/issues/130
    // const utob = (src: string) => unescape(encodeURIComponent(src));
    // reverting good old fationed regexp
    var cb_utob = function (c) {
        if (c.length < 2) {
            var cc = c.charCodeAt(0);
            return cc < 0x80 ? c
                : cc < 0x800 ? (_fromCC(0xc0 | (cc >>> 6))
                    + _fromCC(0x80 | (cc & 0x3f)))
                    : (_fromCC(0xe0 | ((cc >>> 12) & 0x0f))
                        + _fromCC(0x80 | ((cc >>> 6) & 0x3f))
                        + _fromCC(0x80 | (cc & 0x3f)));
        }
        else {
            var cc = 0x10000
                + (c.charCodeAt(0) - 0xD800) * 0x400
                + (c.charCodeAt(1) - 0xDC00);
            return (_fromCC(0xf0 | ((cc >>> 18) & 0x07))
                + _fromCC(0x80 | ((cc >>> 12) & 0x3f))
                + _fromCC(0x80 | ((cc >>> 6) & 0x3f))
                + _fromCC(0x80 | (cc & 0x3f)));
        }
    };
    var re_utob = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g;
    /**
     * @deprecated should have been internal use only.
     * @param {string} src UTF-8 string
     * @returns {string} UTF-16 string
     */
    var utob = function (u) { return u.replace(re_utob, cb_utob); };
    //
    var _encode = _hasBuffer
        ? function (s) { return Buffer.from(s, 'utf8').toString('base64'); }
        : _TE
            ? function (s) { return _fromUint8Array(_TE.encode(s)); }
            : function (s) { return _btoa(utob(s)); };
    /**
     * converts a UTF-8-encoded string to a Base64 string.
     * @param {boolean} [urlsafe] if `true` make the result URL-safe
     * @returns {string} Base64 string
     */
    var encode = function (src, urlsafe) {
        if (urlsafe === void 0) { urlsafe = false; }
        return urlsafe
            ? _mkUriSafe(_encode(src))
            : _encode(src);
    };
    /**
     * converts a UTF-8-encoded string to URL-safe Base64 RFC4648 §5.
     * @returns {string} Base64 string
     */
    var encodeURI = function (src) { return encode(src, true); };
    // This trick is found broken https://github.com/dankogai/js-base64/issues/130
    // const btou = (src: string) => decodeURIComponent(escape(src));
    // reverting good old fationed regexp
    var re_btou = /[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g;
    var cb_btou = function (cccc) {
        switch (cccc.length) {
            case 4:
                var cp = ((0x07 & cccc.charCodeAt(0)) << 18)
                    | ((0x3f & cccc.charCodeAt(1)) << 12)
                    | ((0x3f & cccc.charCodeAt(2)) << 6)
                    | (0x3f & cccc.charCodeAt(3)), offset = cp - 0x10000;
                return (_fromCC((offset >>> 10) + 0xD800)
                    + _fromCC((offset & 0x3FF) + 0xDC00));
            case 3:
                return _fromCC(((0x0f & cccc.charCodeAt(0)) << 12)
                    | ((0x3f & cccc.charCodeAt(1)) << 6)
                    | (0x3f & cccc.charCodeAt(2)));
            default:
                return _fromCC(((0x1f & cccc.charCodeAt(0)) << 6)
                    | (0x3f & cccc.charCodeAt(1)));
        }
    };
    /**
     * @deprecated should have been internal use only.
     * @param {string} src UTF-16 string
     * @returns {string} UTF-8 string
     */
    var btou = function (b) { return b.replace(re_btou, cb_btou); };
    /**
     * polyfill version of `atob`
     */
    var atobPolyfill = function (asc) {
        // console.log('polyfilled');
        asc = asc.replace(/\s+/g, '');
        if (!b64re.test(asc))
            throw new TypeError('malformed base64.');
        asc += '=='.slice(2 - (asc.length & 3));
        var u24, bin = '', r1, r2;
        for (var i = 0; i < asc.length;) {
            u24 = b64tab[asc.charAt(i++)] << 18
                | b64tab[asc.charAt(i++)] << 12
                | (r1 = b64tab[asc.charAt(i++)]) << 6
                | (r2 = b64tab[asc.charAt(i++)]);
            bin += r1 === 64 ? _fromCC(u24 >> 16 & 255)
                : r2 === 64 ? _fromCC(u24 >> 16 & 255, u24 >> 8 & 255)
                    : _fromCC(u24 >> 16 & 255, u24 >> 8 & 255, u24 & 255);
        }
        return bin;
    };
    /**
     * does what `window.atob` of web browsers do.
     * @param {String} asc Base64-encoded string
     * @returns {string} binary string
     */
    var _atob = _hasatob ? function (asc) { return atob(_tidyB64(asc)); }
        : _hasBuffer ? function (asc) { return Buffer.from(asc, 'base64').toString('binary'); }
            : atobPolyfill;
    //
    var _toUint8Array = _hasBuffer
        ? function (a) { return _U8Afrom(Buffer.from(a, 'base64')); }
        : function (a) { return _U8Afrom(_atob(a), function (c) { return c.charCodeAt(0); }); };
    /**
     * converts a Base64 string to a Uint8Array.
     */
    var toUint8Array = function (a) { return _toUint8Array(_unURI(a)); };
    //
    var _decode = _hasBuffer
        ? function (a) { return Buffer.from(a, 'base64').toString('utf8'); }
        : _TD
            ? function (a) { return _TD.decode(_toUint8Array(a)); }
            : function (a) { return btou(_atob(a)); };
    var _unURI = function (a) { return _tidyB64(a.replace(/[-_]/g, function (m0) { return m0 == '-' ? '+' : '/'; })); };
    /**
     * converts a Base64 string to a UTF-8 string.
     * @param {String} src Base64 string.  Both normal and URL-safe are supported
     * @returns {string} UTF-8 string
     */
    var decode = function (src) { return _decode(_unURI(src)); };
    /**
     * check if a value is a valid Base64 string
     * @param {String} src a value to check
      */
    var isValid = function (src) {
        if (typeof src !== 'string')
            return false;
        var s = src.replace(/\s+/g, '').replace(/={0,2}$/, '');
        return !/[^\s0-9a-zA-Z\+/]/.test(s) || !/[^\s0-9a-zA-Z\-_]/.test(s);
    };
    //
    var _noEnum = function (v) {
        return {
            value: v, enumerable: false, writable: true, configurable: true
        };
    };
    /**
     * extend String.prototype with relevant methods
     */
    var extendString = function () {
        var _add = function (name, body) { return Object.defineProperty(String.prototype, name, _noEnum(body)); };
        _add('fromBase64', function () { return decode(this); });
        _add('toBase64', function (urlsafe) { return encode(this, urlsafe); });
        _add('toBase64URI', function () { return encode(this, true); });
        _add('toBase64URL', function () { return encode(this, true); });
        _add('toUint8Array', function () { return toUint8Array(this); });
    };
    /**
     * extend Uint8Array.prototype with relevant methods
     */
    var extendUint8Array = function () {
        var _add = function (name, body) { return Object.defineProperty(Uint8Array.prototype, name, _noEnum(body)); };
        _add('toBase64', function (urlsafe) { return fromUint8Array(this, urlsafe); });
        _add('toBase64URI', function () { return fromUint8Array(this, true); });
        _add('toBase64URL', function () { return fromUint8Array(this, true); });
    };
    /**
     * extend Builtin prototypes with relevant methods
     */
    var extendBuiltins = function () {
        extendString();
        extendUint8Array();
    };
    var gBase64 = {
        version: version,
        VERSION: VERSION,
        atob: _atob,
        atobPolyfill: atobPolyfill,
        btoa: _btoa,
        btoaPolyfill: btoaPolyfill,
        fromBase64: decode,
        toBase64: encode,
        encode: encode,
        encodeURI: encodeURI,
        encodeURL: encodeURI,
        utob: utob,
        btou: btou,
        decode: decode,
        isValid: isValid,
        fromUint8Array: fromUint8Array,
        toUint8Array: toUint8Array,
        extendString: extendString,
        extendUint8Array: extendUint8Array,
        extendBuiltins: extendBuiltins
    };
    //
    // export Base64 to the namespace
    //
    // ES5 is yet to have Object.assign() that may make transpilers unhappy.
    // gBase64.Base64 = Object.assign({}, gBase64);
    gBase64.Base64 = {};
    Object.keys(gBase64).forEach(function (k) { return gBase64.Base64[k] = gBase64[k]; });
    return gBase64;
}));


/***/ }),

/***/ 2568:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

(function(){
  var crypt = __webpack_require__(1012),
      utf8 = (__webpack_require__(487).utf8),
      isBuffer = __webpack_require__(8738),
      bin = (__webpack_require__(487).bin),

  // The core
  md5 = function (message, options) {
    // Convert to byte array
    if (message.constructor == String)
      if (options && options.encoding === 'binary')
        message = bin.stringToBytes(message);
      else
        message = utf8.stringToBytes(message);
    else if (isBuffer(message))
      message = Array.prototype.slice.call(message, 0);
    else if (!Array.isArray(message) && message.constructor !== Uint8Array)
      message = message.toString();
    // else, assume byte array already

    var m = crypt.bytesToWords(message),
        l = message.length * 8,
        a =  1732584193,
        b = -271733879,
        c = -1732584194,
        d =  271733878;

    // Swap endian
    for (var i = 0; i < m.length; i++) {
      m[i] = ((m[i] <<  8) | (m[i] >>> 24)) & 0x00FF00FF |
             ((m[i] << 24) | (m[i] >>>  8)) & 0xFF00FF00;
    }

    // Padding
    m[l >>> 5] |= 0x80 << (l % 32);
    m[(((l + 64) >>> 9) << 4) + 14] = l;

    // Method shortcuts
    var FF = md5._ff,
        GG = md5._gg,
        HH = md5._hh,
        II = md5._ii;

    for (var i = 0; i < m.length; i += 16) {

      var aa = a,
          bb = b,
          cc = c,
          dd = d;

      a = FF(a, b, c, d, m[i+ 0],  7, -680876936);
      d = FF(d, a, b, c, m[i+ 1], 12, -389564586);
      c = FF(c, d, a, b, m[i+ 2], 17,  606105819);
      b = FF(b, c, d, a, m[i+ 3], 22, -1044525330);
      a = FF(a, b, c, d, m[i+ 4],  7, -176418897);
      d = FF(d, a, b, c, m[i+ 5], 12,  1200080426);
      c = FF(c, d, a, b, m[i+ 6], 17, -1473231341);
      b = FF(b, c, d, a, m[i+ 7], 22, -45705983);
      a = FF(a, b, c, d, m[i+ 8],  7,  1770035416);
      d = FF(d, a, b, c, m[i+ 9], 12, -1958414417);
      c = FF(c, d, a, b, m[i+10], 17, -42063);
      b = FF(b, c, d, a, m[i+11], 22, -1990404162);
      a = FF(a, b, c, d, m[i+12],  7,  1804603682);
      d = FF(d, a, b, c, m[i+13], 12, -40341101);
      c = FF(c, d, a, b, m[i+14], 17, -1502002290);
      b = FF(b, c, d, a, m[i+15], 22,  1236535329);

      a = GG(a, b, c, d, m[i+ 1],  5, -165796510);
      d = GG(d, a, b, c, m[i+ 6],  9, -1069501632);
      c = GG(c, d, a, b, m[i+11], 14,  643717713);
      b = GG(b, c, d, a, m[i+ 0], 20, -373897302);
      a = GG(a, b, c, d, m[i+ 5],  5, -701558691);
      d = GG(d, a, b, c, m[i+10],  9,  38016083);
      c = GG(c, d, a, b, m[i+15], 14, -660478335);
      b = GG(b, c, d, a, m[i+ 4], 20, -405537848);
      a = GG(a, b, c, d, m[i+ 9],  5,  568446438);
      d = GG(d, a, b, c, m[i+14],  9, -1019803690);
      c = GG(c, d, a, b, m[i+ 3], 14, -187363961);
      b = GG(b, c, d, a, m[i+ 8], 20,  1163531501);
      a = GG(a, b, c, d, m[i+13],  5, -1444681467);
      d = GG(d, a, b, c, m[i+ 2],  9, -51403784);
      c = GG(c, d, a, b, m[i+ 7], 14,  1735328473);
      b = GG(b, c, d, a, m[i+12], 20, -1926607734);

      a = HH(a, b, c, d, m[i+ 5],  4, -378558);
      d = HH(d, a, b, c, m[i+ 8], 11, -2022574463);
      c = HH(c, d, a, b, m[i+11], 16,  1839030562);
      b = HH(b, c, d, a, m[i+14], 23, -35309556);
      a = HH(a, b, c, d, m[i+ 1],  4, -1530992060);
      d = HH(d, a, b, c, m[i+ 4], 11,  1272893353);
      c = HH(c, d, a, b, m[i+ 7], 16, -155497632);
      b = HH(b, c, d, a, m[i+10], 23, -1094730640);
      a = HH(a, b, c, d, m[i+13],  4,  681279174);
      d = HH(d, a, b, c, m[i+ 0], 11, -358537222);
      c = HH(c, d, a, b, m[i+ 3], 16, -722521979);
      b = HH(b, c, d, a, m[i+ 6], 23,  76029189);
      a = HH(a, b, c, d, m[i+ 9],  4, -640364487);
      d = HH(d, a, b, c, m[i+12], 11, -421815835);
      c = HH(c, d, a, b, m[i+15], 16,  530742520);
      b = HH(b, c, d, a, m[i+ 2], 23, -995338651);

      a = II(a, b, c, d, m[i+ 0],  6, -198630844);
      d = II(d, a, b, c, m[i+ 7], 10,  1126891415);
      c = II(c, d, a, b, m[i+14], 15, -1416354905);
      b = II(b, c, d, a, m[i+ 5], 21, -57434055);
      a = II(a, b, c, d, m[i+12],  6,  1700485571);
      d = II(d, a, b, c, m[i+ 3], 10, -1894986606);
      c = II(c, d, a, b, m[i+10], 15, -1051523);
      b = II(b, c, d, a, m[i+ 1], 21, -2054922799);
      a = II(a, b, c, d, m[i+ 8],  6,  1873313359);
      d = II(d, a, b, c, m[i+15], 10, -30611744);
      c = II(c, d, a, b, m[i+ 6], 15, -1560198380);
      b = II(b, c, d, a, m[i+13], 21,  1309151649);
      a = II(a, b, c, d, m[i+ 4],  6, -145523070);
      d = II(d, a, b, c, m[i+11], 10, -1120210379);
      c = II(c, d, a, b, m[i+ 2], 15,  718787259);
      b = II(b, c, d, a, m[i+ 9], 21, -343485551);

      a = (a + aa) >>> 0;
      b = (b + bb) >>> 0;
      c = (c + cc) >>> 0;
      d = (d + dd) >>> 0;
    }

    return crypt.endian([a, b, c, d]);
  };

  // Auxiliary functions
  md5._ff  = function (a, b, c, d, x, s, t) {
    var n = a + (b & c | ~b & d) + (x >>> 0) + t;
    return ((n << s) | (n >>> (32 - s))) + b;
  };
  md5._gg  = function (a, b, c, d, x, s, t) {
    var n = a + (b & d | c & ~d) + (x >>> 0) + t;
    return ((n << s) | (n >>> (32 - s))) + b;
  };
  md5._hh  = function (a, b, c, d, x, s, t) {
    var n = a + (b ^ c ^ d) + (x >>> 0) + t;
    return ((n << s) | (n >>> (32 - s))) + b;
  };
  md5._ii  = function (a, b, c, d, x, s, t) {
    var n = a + (c ^ (b | ~d)) + (x >>> 0) + t;
    return ((n << s) | (n >>> (32 - s))) + b;
  };

  // Package private blocksize
  md5._blocksize = 16;
  md5._digestsize = 16;

  module.exports = function (message, options) {
    if (message === undefined || message === null)
      throw new Error('Illegal argument ' + message);

    var digestbytes = crypt.wordsToBytes(md5(message, options));
    return options && options.asBytes ? digestbytes :
        options && options.asString ? bin.bytesToString(digestbytes) :
        crypt.bytesToHex(digestbytes);
  };

})();


/***/ }),

/***/ 631:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var hasMap = typeof Map === 'function' && Map.prototype;
var mapSizeDescriptor = Object.getOwnPropertyDescriptor && hasMap ? Object.getOwnPropertyDescriptor(Map.prototype, 'size') : null;
var mapSize = hasMap && mapSizeDescriptor && typeof mapSizeDescriptor.get === 'function' ? mapSizeDescriptor.get : null;
var mapForEach = hasMap && Map.prototype.forEach;
var hasSet = typeof Set === 'function' && Set.prototype;
var setSizeDescriptor = Object.getOwnPropertyDescriptor && hasSet ? Object.getOwnPropertyDescriptor(Set.prototype, 'size') : null;
var setSize = hasSet && setSizeDescriptor && typeof setSizeDescriptor.get === 'function' ? setSizeDescriptor.get : null;
var setForEach = hasSet && Set.prototype.forEach;
var hasWeakMap = typeof WeakMap === 'function' && WeakMap.prototype;
var weakMapHas = hasWeakMap ? WeakMap.prototype.has : null;
var hasWeakSet = typeof WeakSet === 'function' && WeakSet.prototype;
var weakSetHas = hasWeakSet ? WeakSet.prototype.has : null;
var hasWeakRef = typeof WeakRef === 'function' && WeakRef.prototype;
var weakRefDeref = hasWeakRef ? WeakRef.prototype.deref : null;
var booleanValueOf = Boolean.prototype.valueOf;
var objectToString = Object.prototype.toString;
var functionToString = Function.prototype.toString;
var $match = String.prototype.match;
var $slice = String.prototype.slice;
var $replace = String.prototype.replace;
var $toUpperCase = String.prototype.toUpperCase;
var $toLowerCase = String.prototype.toLowerCase;
var $test = RegExp.prototype.test;
var $concat = Array.prototype.concat;
var $join = Array.prototype.join;
var $arrSlice = Array.prototype.slice;
var $floor = Math.floor;
var bigIntValueOf = typeof BigInt === 'function' ? BigInt.prototype.valueOf : null;
var gOPS = Object.getOwnPropertySymbols;
var symToString = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? Symbol.prototype.toString : null;
var hasShammedSymbols = typeof Symbol === 'function' && typeof Symbol.iterator === 'object';
// ie, `has-tostringtag/shams
var toStringTag = typeof Symbol === 'function' && Symbol.toStringTag && (typeof Symbol.toStringTag === hasShammedSymbols ? 'object' : 'symbol')
    ? Symbol.toStringTag
    : null;
var isEnumerable = Object.prototype.propertyIsEnumerable;

var gPO = (typeof Reflect === 'function' ? Reflect.getPrototypeOf : Object.getPrototypeOf) || (
    [].__proto__ === Array.prototype // eslint-disable-line no-proto
        ? function (O) {
            return O.__proto__; // eslint-disable-line no-proto
        }
        : null
);

function addNumericSeparator(num, str) {
    if (
        num === Infinity
        || num === -Infinity
        || num !== num
        || (num && num > -1000 && num < 1000)
        || $test.call(/e/, str)
    ) {
        return str;
    }
    var sepRegex = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
    if (typeof num === 'number') {
        var int = num < 0 ? -$floor(-num) : $floor(num); // trunc(num)
        if (int !== num) {
            var intStr = String(int);
            var dec = $slice.call(str, intStr.length + 1);
            return $replace.call(intStr, sepRegex, '$&_') + '.' + $replace.call($replace.call(dec, /([0-9]{3})/g, '$&_'), /_$/, '');
        }
    }
    return $replace.call(str, sepRegex, '$&_');
}

var inspectCustom = (__webpack_require__(4654).custom);
var inspectSymbol = inspectCustom && isSymbol(inspectCustom) ? inspectCustom : null;

module.exports = function inspect_(obj, options, depth, seen) {
    var opts = options || {};

    if (has(opts, 'quoteStyle') && (opts.quoteStyle !== 'single' && opts.quoteStyle !== 'double')) {
        throw new TypeError('option "quoteStyle" must be "single" or "double"');
    }
    if (
        has(opts, 'maxStringLength') && (typeof opts.maxStringLength === 'number'
            ? opts.maxStringLength < 0 && opts.maxStringLength !== Infinity
            : opts.maxStringLength !== null
        )
    ) {
        throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
    }
    var customInspect = has(opts, 'customInspect') ? opts.customInspect : true;
    if (typeof customInspect !== 'boolean' && customInspect !== 'symbol') {
        throw new TypeError('option "customInspect", if provided, must be `true`, `false`, or `\'symbol\'`');
    }

    if (
        has(opts, 'indent')
        && opts.indent !== null
        && opts.indent !== '\t'
        && !(parseInt(opts.indent, 10) === opts.indent && opts.indent > 0)
    ) {
        throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
    }
    if (has(opts, 'numericSeparator') && typeof opts.numericSeparator !== 'boolean') {
        throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
    }
    var numericSeparator = opts.numericSeparator;

    if (typeof obj === 'undefined') {
        return 'undefined';
    }
    if (obj === null) {
        return 'null';
    }
    if (typeof obj === 'boolean') {
        return obj ? 'true' : 'false';
    }

    if (typeof obj === 'string') {
        return inspectString(obj, opts);
    }
    if (typeof obj === 'number') {
        if (obj === 0) {
            return Infinity / obj > 0 ? '0' : '-0';
        }
        var str = String(obj);
        return numericSeparator ? addNumericSeparator(obj, str) : str;
    }
    if (typeof obj === 'bigint') {
        var bigIntStr = String(obj) + 'n';
        return numericSeparator ? addNumericSeparator(obj, bigIntStr) : bigIntStr;
    }

    var maxDepth = typeof opts.depth === 'undefined' ? 5 : opts.depth;
    if (typeof depth === 'undefined') { depth = 0; }
    if (depth >= maxDepth && maxDepth > 0 && typeof obj === 'object') {
        return isArray(obj) ? '[Array]' : '[Object]';
    }

    var indent = getIndent(opts, depth);

    if (typeof seen === 'undefined') {
        seen = [];
    } else if (indexOf(seen, obj) >= 0) {
        return '[Circular]';
    }

    function inspect(value, from, noIndent) {
        if (from) {
            seen = $arrSlice.call(seen);
            seen.push(from);
        }
        if (noIndent) {
            var newOpts = {
                depth: opts.depth
            };
            if (has(opts, 'quoteStyle')) {
                newOpts.quoteStyle = opts.quoteStyle;
            }
            return inspect_(value, newOpts, depth + 1, seen);
        }
        return inspect_(value, opts, depth + 1, seen);
    }

    if (typeof obj === 'function') {
        var name = nameOf(obj);
        var keys = arrObjKeys(obj, inspect);
        return '[Function' + (name ? ': ' + name : ' (anonymous)') + ']' + (keys.length > 0 ? ' { ' + $join.call(keys, ', ') + ' }' : '');
    }
    if (isSymbol(obj)) {
        var symString = hasShammedSymbols ? $replace.call(String(obj), /^(Symbol\(.*\))_[^)]*$/, '$1') : symToString.call(obj);
        return typeof obj === 'object' && !hasShammedSymbols ? markBoxed(symString) : symString;
    }
    if (isElement(obj)) {
        var s = '<' + $toLowerCase.call(String(obj.nodeName));
        var attrs = obj.attributes || [];
        for (var i = 0; i < attrs.length; i++) {
            s += ' ' + attrs[i].name + '=' + wrapQuotes(quote(attrs[i].value), 'double', opts);
        }
        s += '>';
        if (obj.childNodes && obj.childNodes.length) { s += '...'; }
        s += '</' + $toLowerCase.call(String(obj.nodeName)) + '>';
        return s;
    }
    if (isArray(obj)) {
        if (obj.length === 0) { return '[]'; }
        var xs = arrObjKeys(obj, inspect);
        if (indent && !singleLineValues(xs)) {
            return '[' + indentedJoin(xs, indent) + ']';
        }
        return '[ ' + $join.call(xs, ', ') + ' ]';
    }
    if (isError(obj)) {
        var parts = arrObjKeys(obj, inspect);
        if ('cause' in obj && !isEnumerable.call(obj, 'cause')) {
            return '{ [' + String(obj) + '] ' + $join.call($concat.call('[cause]: ' + inspect(obj.cause), parts), ', ') + ' }';
        }
        if (parts.length === 0) { return '[' + String(obj) + ']'; }
        return '{ [' + String(obj) + '] ' + $join.call(parts, ', ') + ' }';
    }
    if (typeof obj === 'object' && customInspect) {
        if (inspectSymbol && typeof obj[inspectSymbol] === 'function') {
            return obj[inspectSymbol]();
        } else if (customInspect !== 'symbol' && typeof obj.inspect === 'function') {
            return obj.inspect();
        }
    }
    if (isMap(obj)) {
        var mapParts = [];
        mapForEach.call(obj, function (value, key) {
            mapParts.push(inspect(key, obj, true) + ' => ' + inspect(value, obj));
        });
        return collectionOf('Map', mapSize.call(obj), mapParts, indent);
    }
    if (isSet(obj)) {
        var setParts = [];
        setForEach.call(obj, function (value) {
            setParts.push(inspect(value, obj));
        });
        return collectionOf('Set', setSize.call(obj), setParts, indent);
    }
    if (isWeakMap(obj)) {
        return weakCollectionOf('WeakMap');
    }
    if (isWeakSet(obj)) {
        return weakCollectionOf('WeakSet');
    }
    if (isWeakRef(obj)) {
        return weakCollectionOf('WeakRef');
    }
    if (isNumber(obj)) {
        return markBoxed(inspect(Number(obj)));
    }
    if (isBigInt(obj)) {
        return markBoxed(inspect(bigIntValueOf.call(obj)));
    }
    if (isBoolean(obj)) {
        return markBoxed(booleanValueOf.call(obj));
    }
    if (isString(obj)) {
        return markBoxed(inspect(String(obj)));
    }
    if (!isDate(obj) && !isRegExp(obj)) {
        var ys = arrObjKeys(obj, inspect);
        var isPlainObject = gPO ? gPO(obj) === Object.prototype : obj instanceof Object || obj.constructor === Object;
        var protoTag = obj instanceof Object ? '' : 'null prototype';
        var stringTag = !isPlainObject && toStringTag && Object(obj) === obj && toStringTag in obj ? $slice.call(toStr(obj), 8, -1) : protoTag ? 'Object' : '';
        var constructorTag = isPlainObject || typeof obj.constructor !== 'function' ? '' : obj.constructor.name ? obj.constructor.name + ' ' : '';
        var tag = constructorTag + (stringTag || protoTag ? '[' + $join.call($concat.call([], stringTag || [], protoTag || []), ': ') + '] ' : '');
        if (ys.length === 0) { return tag + '{}'; }
        if (indent) {
            return tag + '{' + indentedJoin(ys, indent) + '}';
        }
        return tag + '{ ' + $join.call(ys, ', ') + ' }';
    }
    return String(obj);
};

function wrapQuotes(s, defaultStyle, opts) {
    var quoteChar = (opts.quoteStyle || defaultStyle) === 'double' ? '"' : "'";
    return quoteChar + s + quoteChar;
}

function quote(s) {
    return $replace.call(String(s), /"/g, '&quot;');
}

function isArray(obj) { return toStr(obj) === '[object Array]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj)); }
function isDate(obj) { return toStr(obj) === '[object Date]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj)); }
function isRegExp(obj) { return toStr(obj) === '[object RegExp]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj)); }
function isError(obj) { return toStr(obj) === '[object Error]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj)); }
function isString(obj) { return toStr(obj) === '[object String]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj)); }
function isNumber(obj) { return toStr(obj) === '[object Number]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj)); }
function isBoolean(obj) { return toStr(obj) === '[object Boolean]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj)); }

// Symbol and BigInt do have Symbol.toStringTag by spec, so that can't be used to eliminate false positives
function isSymbol(obj) {
    if (hasShammedSymbols) {
        return obj && typeof obj === 'object' && obj instanceof Symbol;
    }
    if (typeof obj === 'symbol') {
        return true;
    }
    if (!obj || typeof obj !== 'object' || !symToString) {
        return false;
    }
    try {
        symToString.call(obj);
        return true;
    } catch (e) {}
    return false;
}

function isBigInt(obj) {
    if (!obj || typeof obj !== 'object' || !bigIntValueOf) {
        return false;
    }
    try {
        bigIntValueOf.call(obj);
        return true;
    } catch (e) {}
    return false;
}

var hasOwn = Object.prototype.hasOwnProperty || function (key) { return key in this; };
function has(obj, key) {
    return hasOwn.call(obj, key);
}

function toStr(obj) {
    return objectToString.call(obj);
}

function nameOf(f) {
    if (f.name) { return f.name; }
    var m = $match.call(functionToString.call(f), /^function\s*([\w$]+)/);
    if (m) { return m[1]; }
    return null;
}

function indexOf(xs, x) {
    if (xs.indexOf) { return xs.indexOf(x); }
    for (var i = 0, l = xs.length; i < l; i++) {
        if (xs[i] === x) { return i; }
    }
    return -1;
}

function isMap(x) {
    if (!mapSize || !x || typeof x !== 'object') {
        return false;
    }
    try {
        mapSize.call(x);
        try {
            setSize.call(x);
        } catch (s) {
            return true;
        }
        return x instanceof Map; // core-js workaround, pre-v2.5.0
    } catch (e) {}
    return false;
}

function isWeakMap(x) {
    if (!weakMapHas || !x || typeof x !== 'object') {
        return false;
    }
    try {
        weakMapHas.call(x, weakMapHas);
        try {
            weakSetHas.call(x, weakSetHas);
        } catch (s) {
            return true;
        }
        return x instanceof WeakMap; // core-js workaround, pre-v2.5.0
    } catch (e) {}
    return false;
}

function isWeakRef(x) {
    if (!weakRefDeref || !x || typeof x !== 'object') {
        return false;
    }
    try {
        weakRefDeref.call(x);
        return true;
    } catch (e) {}
    return false;
}

function isSet(x) {
    if (!setSize || !x || typeof x !== 'object') {
        return false;
    }
    try {
        setSize.call(x);
        try {
            mapSize.call(x);
        } catch (m) {
            return true;
        }
        return x instanceof Set; // core-js workaround, pre-v2.5.0
    } catch (e) {}
    return false;
}

function isWeakSet(x) {
    if (!weakSetHas || !x || typeof x !== 'object') {
        return false;
    }
    try {
        weakSetHas.call(x, weakSetHas);
        try {
            weakMapHas.call(x, weakMapHas);
        } catch (s) {
            return true;
        }
        return x instanceof WeakSet; // core-js workaround, pre-v2.5.0
    } catch (e) {}
    return false;
}

function isElement(x) {
    if (!x || typeof x !== 'object') { return false; }
    if (typeof HTMLElement !== 'undefined' && x instanceof HTMLElement) {
        return true;
    }
    return typeof x.nodeName === 'string' && typeof x.getAttribute === 'function';
}

function inspectString(str, opts) {
    if (str.length > opts.maxStringLength) {
        var remaining = str.length - opts.maxStringLength;
        var trailer = '... ' + remaining + ' more character' + (remaining > 1 ? 's' : '');
        return inspectString($slice.call(str, 0, opts.maxStringLength), opts) + trailer;
    }
    // eslint-disable-next-line no-control-regex
    var s = $replace.call($replace.call(str, /(['\\])/g, '\\$1'), /[\x00-\x1f]/g, lowbyte);
    return wrapQuotes(s, 'single', opts);
}

function lowbyte(c) {
    var n = c.charCodeAt(0);
    var x = {
        8: 'b',
        9: 't',
        10: 'n',
        12: 'f',
        13: 'r'
    }[n];
    if (x) { return '\\' + x; }
    return '\\x' + (n < 0x10 ? '0' : '') + $toUpperCase.call(n.toString(16));
}

function markBoxed(str) {
    return 'Object(' + str + ')';
}

function weakCollectionOf(type) {
    return type + ' { ? }';
}

function collectionOf(type, size, entries, indent) {
    var joinedEntries = indent ? indentedJoin(entries, indent) : $join.call(entries, ', ');
    return type + ' (' + size + ') {' + joinedEntries + '}';
}

function singleLineValues(xs) {
    for (var i = 0; i < xs.length; i++) {
        if (indexOf(xs[i], '\n') >= 0) {
            return false;
        }
    }
    return true;
}

function getIndent(opts, depth) {
    var baseIndent;
    if (opts.indent === '\t') {
        baseIndent = '\t';
    } else if (typeof opts.indent === 'number' && opts.indent > 0) {
        baseIndent = $join.call(Array(opts.indent + 1), ' ');
    } else {
        return null;
    }
    return {
        base: baseIndent,
        prev: $join.call(Array(depth + 1), baseIndent)
    };
}

function indentedJoin(xs, indent) {
    if (xs.length === 0) { return ''; }
    var lineJoiner = '\n' + indent.prev + indent.base;
    return lineJoiner + $join.call(xs, ',' + lineJoiner) + '\n' + indent.prev;
}

function arrObjKeys(obj, inspect) {
    var isArr = isArray(obj);
    var xs = [];
    if (isArr) {
        xs.length = obj.length;
        for (var i = 0; i < obj.length; i++) {
            xs[i] = has(obj, i) ? inspect(obj[i], obj) : '';
        }
    }
    var syms = typeof gOPS === 'function' ? gOPS(obj) : [];
    var symMap;
    if (hasShammedSymbols) {
        symMap = {};
        for (var k = 0; k < syms.length; k++) {
            symMap['$' + syms[k]] = syms[k];
        }
    }

    for (var key in obj) { // eslint-disable-line no-restricted-syntax
        if (!has(obj, key)) { continue; } // eslint-disable-line no-restricted-syntax, no-continue
        if (isArr && String(Number(key)) === key && key < obj.length) { continue; } // eslint-disable-line no-restricted-syntax, no-continue
        if (hasShammedSymbols && symMap['$' + key] instanceof Symbol) {
            // this is to prevent shammed Symbols, which are stored as strings, from being included in the string key section
            continue; // eslint-disable-line no-restricted-syntax, no-continue
        } else if ($test.call(/[^\w$]/, key)) {
            xs.push(inspect(key, obj) + ': ' + inspect(obj[key], obj));
        } else {
            xs.push(key + ': ' + inspect(obj[key], obj));
        }
    }
    if (typeof gOPS === 'function') {
        for (var j = 0; j < syms.length; j++) {
            if (isEnumerable.call(obj, syms[j])) {
                xs.push('[' + inspect(syms[j]) + ']: ' + inspect(obj[syms[j]], obj));
            }
        }
    }
    return xs;
}


/***/ }),

/***/ 5798:
/***/ (function(module) {

"use strict";


var replace = String.prototype.replace;
var percentTwenties = /%20/g;

var Format = {
    RFC1738: 'RFC1738',
    RFC3986: 'RFC3986'
};

module.exports = {
    'default': Format.RFC3986,
    formatters: {
        RFC1738: function (value) {
            return replace.call(value, percentTwenties, '+');
        },
        RFC3986: function (value) {
            return String(value);
        }
    },
    RFC1738: Format.RFC1738,
    RFC3986: Format.RFC3986
};


/***/ }),

/***/ 129:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var stringify = __webpack_require__(8261);
var parse = __webpack_require__(5235);
var formats = __webpack_require__(5798);

module.exports = {
    formats: formats,
    parse: parse,
    stringify: stringify
};


/***/ }),

/***/ 5235:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(2769);

var has = Object.prototype.hasOwnProperty;
var isArray = Array.isArray;

var defaults = {
    allowDots: false,
    allowPrototypes: false,
    allowSparse: false,
    arrayLimit: 20,
    charset: 'utf-8',
    charsetSentinel: false,
    comma: false,
    decoder: utils.decode,
    delimiter: '&',
    depth: 5,
    ignoreQueryPrefix: false,
    interpretNumericEntities: false,
    parameterLimit: 1000,
    parseArrays: true,
    plainObjects: false,
    strictNullHandling: false
};

var interpretNumericEntities = function (str) {
    return str.replace(/&#(\d+);/g, function ($0, numberStr) {
        return String.fromCharCode(parseInt(numberStr, 10));
    });
};

var parseArrayValue = function (val, options) {
    if (val && typeof val === 'string' && options.comma && val.indexOf(',') > -1) {
        return val.split(',');
    }

    return val;
};

// This is what browsers will submit when the ✓ character occurs in an
// application/x-www-form-urlencoded body and the encoding of the page containing
// the form is iso-8859-1, or when the submitted form has an accept-charset
// attribute of iso-8859-1. Presumably also with other charsets that do not contain
// the ✓ character, such as us-ascii.
var isoSentinel = 'utf8=%26%2310003%3B'; // encodeURIComponent('&#10003;')

// These are the percent-encoded utf-8 octets representing a checkmark, indicating that the request actually is utf-8 encoded.
var charsetSentinel = 'utf8=%E2%9C%93'; // encodeURIComponent('✓')

var parseValues = function parseQueryStringValues(str, options) {
    var obj = {};
    var cleanStr = options.ignoreQueryPrefix ? str.replace(/^\?/, '') : str;
    var limit = options.parameterLimit === Infinity ? undefined : options.parameterLimit;
    var parts = cleanStr.split(options.delimiter, limit);
    var skipIndex = -1; // Keep track of where the utf8 sentinel was found
    var i;

    var charset = options.charset;
    if (options.charsetSentinel) {
        for (i = 0; i < parts.length; ++i) {
            if (parts[i].indexOf('utf8=') === 0) {
                if (parts[i] === charsetSentinel) {
                    charset = 'utf-8';
                } else if (parts[i] === isoSentinel) {
                    charset = 'iso-8859-1';
                }
                skipIndex = i;
                i = parts.length; // The eslint settings do not allow break;
            }
        }
    }

    for (i = 0; i < parts.length; ++i) {
        if (i === skipIndex) {
            continue;
        }
        var part = parts[i];

        var bracketEqualsPos = part.indexOf(']=');
        var pos = bracketEqualsPos === -1 ? part.indexOf('=') : bracketEqualsPos + 1;

        var key, val;
        if (pos === -1) {
            key = options.decoder(part, defaults.decoder, charset, 'key');
            val = options.strictNullHandling ? null : '';
        } else {
            key = options.decoder(part.slice(0, pos), defaults.decoder, charset, 'key');
            val = utils.maybeMap(
                parseArrayValue(part.slice(pos + 1), options),
                function (encodedVal) {
                    return options.decoder(encodedVal, defaults.decoder, charset, 'value');
                }
            );
        }

        if (val && options.interpretNumericEntities && charset === 'iso-8859-1') {
            val = interpretNumericEntities(val);
        }

        if (part.indexOf('[]=') > -1) {
            val = isArray(val) ? [val] : val;
        }

        if (has.call(obj, key)) {
            obj[key] = utils.combine(obj[key], val);
        } else {
            obj[key] = val;
        }
    }

    return obj;
};

var parseObject = function (chain, val, options, valuesParsed) {
    var leaf = valuesParsed ? val : parseArrayValue(val, options);

    for (var i = chain.length - 1; i >= 0; --i) {
        var obj;
        var root = chain[i];

        if (root === '[]' && options.parseArrays) {
            obj = [].concat(leaf);
        } else {
            obj = options.plainObjects ? Object.create(null) : {};
            var cleanRoot = root.charAt(0) === '[' && root.charAt(root.length - 1) === ']' ? root.slice(1, -1) : root;
            var index = parseInt(cleanRoot, 10);
            if (!options.parseArrays && cleanRoot === '') {
                obj = { 0: leaf };
            } else if (
                !isNaN(index)
                && root !== cleanRoot
                && String(index) === cleanRoot
                && index >= 0
                && (options.parseArrays && index <= options.arrayLimit)
            ) {
                obj = [];
                obj[index] = leaf;
            } else if (cleanRoot !== '__proto__') {
                obj[cleanRoot] = leaf;
            }
        }

        leaf = obj;
    }

    return leaf;
};

var parseKeys = function parseQueryStringKeys(givenKey, val, options, valuesParsed) {
    if (!givenKey) {
        return;
    }

    // Transform dot notation to bracket notation
    var key = options.allowDots ? givenKey.replace(/\.([^.[]+)/g, '[$1]') : givenKey;

    // The regex chunks

    var brackets = /(\[[^[\]]*])/;
    var child = /(\[[^[\]]*])/g;

    // Get the parent

    var segment = options.depth > 0 && brackets.exec(key);
    var parent = segment ? key.slice(0, segment.index) : key;

    // Stash the parent if it exists

    var keys = [];
    if (parent) {
        // If we aren't using plain objects, optionally prefix keys that would overwrite object prototype properties
        if (!options.plainObjects && has.call(Object.prototype, parent)) {
            if (!options.allowPrototypes) {
                return;
            }
        }

        keys.push(parent);
    }

    // Loop through children appending to the array until we hit depth

    var i = 0;
    while (options.depth > 0 && (segment = child.exec(key)) !== null && i < options.depth) {
        i += 1;
        if (!options.plainObjects && has.call(Object.prototype, segment[1].slice(1, -1))) {
            if (!options.allowPrototypes) {
                return;
            }
        }
        keys.push(segment[1]);
    }

    // If there's a remainder, just add whatever is left

    if (segment) {
        keys.push('[' + key.slice(segment.index) + ']');
    }

    return parseObject(keys, val, options, valuesParsed);
};

var normalizeParseOptions = function normalizeParseOptions(opts) {
    if (!opts) {
        return defaults;
    }

    if (opts.decoder !== null && opts.decoder !== undefined && typeof opts.decoder !== 'function') {
        throw new TypeError('Decoder has to be a function.');
    }

    if (typeof opts.charset !== 'undefined' && opts.charset !== 'utf-8' && opts.charset !== 'iso-8859-1') {
        throw new TypeError('The charset option must be either utf-8, iso-8859-1, or undefined');
    }
    var charset = typeof opts.charset === 'undefined' ? defaults.charset : opts.charset;

    return {
        allowDots: typeof opts.allowDots === 'undefined' ? defaults.allowDots : !!opts.allowDots,
        allowPrototypes: typeof opts.allowPrototypes === 'boolean' ? opts.allowPrototypes : defaults.allowPrototypes,
        allowSparse: typeof opts.allowSparse === 'boolean' ? opts.allowSparse : defaults.allowSparse,
        arrayLimit: typeof opts.arrayLimit === 'number' ? opts.arrayLimit : defaults.arrayLimit,
        charset: charset,
        charsetSentinel: typeof opts.charsetSentinel === 'boolean' ? opts.charsetSentinel : defaults.charsetSentinel,
        comma: typeof opts.comma === 'boolean' ? opts.comma : defaults.comma,
        decoder: typeof opts.decoder === 'function' ? opts.decoder : defaults.decoder,
        delimiter: typeof opts.delimiter === 'string' || utils.isRegExp(opts.delimiter) ? opts.delimiter : defaults.delimiter,
        // eslint-disable-next-line no-implicit-coercion, no-extra-parens
        depth: (typeof opts.depth === 'number' || opts.depth === false) ? +opts.depth : defaults.depth,
        ignoreQueryPrefix: opts.ignoreQueryPrefix === true,
        interpretNumericEntities: typeof opts.interpretNumericEntities === 'boolean' ? opts.interpretNumericEntities : defaults.interpretNumericEntities,
        parameterLimit: typeof opts.parameterLimit === 'number' ? opts.parameterLimit : defaults.parameterLimit,
        parseArrays: opts.parseArrays !== false,
        plainObjects: typeof opts.plainObjects === 'boolean' ? opts.plainObjects : defaults.plainObjects,
        strictNullHandling: typeof opts.strictNullHandling === 'boolean' ? opts.strictNullHandling : defaults.strictNullHandling
    };
};

module.exports = function (str, opts) {
    var options = normalizeParseOptions(opts);

    if (str === '' || str === null || typeof str === 'undefined') {
        return options.plainObjects ? Object.create(null) : {};
    }

    var tempObj = typeof str === 'string' ? parseValues(str, options) : str;
    var obj = options.plainObjects ? Object.create(null) : {};

    // Iterate over the keys and setup the new object

    var keys = Object.keys(tempObj);
    for (var i = 0; i < keys.length; ++i) {
        var key = keys[i];
        var newObj = parseKeys(key, tempObj[key], options, typeof str === 'string');
        obj = utils.merge(obj, newObj, options);
    }

    if (options.allowSparse === true) {
        return obj;
    }

    return utils.compact(obj);
};


/***/ }),

/***/ 8261:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var getSideChannel = __webpack_require__(7478);
var utils = __webpack_require__(2769);
var formats = __webpack_require__(5798);
var has = Object.prototype.hasOwnProperty;

var arrayPrefixGenerators = {
    brackets: function brackets(prefix) {
        return prefix + '[]';
    },
    comma: 'comma',
    indices: function indices(prefix, key) {
        return prefix + '[' + key + ']';
    },
    repeat: function repeat(prefix) {
        return prefix;
    }
};

var isArray = Array.isArray;
var split = String.prototype.split;
var push = Array.prototype.push;
var pushToArray = function (arr, valueOrArray) {
    push.apply(arr, isArray(valueOrArray) ? valueOrArray : [valueOrArray]);
};

var toISO = Date.prototype.toISOString;

var defaultFormat = formats['default'];
var defaults = {
    addQueryPrefix: false,
    allowDots: false,
    charset: 'utf-8',
    charsetSentinel: false,
    delimiter: '&',
    encode: true,
    encoder: utils.encode,
    encodeValuesOnly: false,
    format: defaultFormat,
    formatter: formats.formatters[defaultFormat],
    // deprecated
    indices: false,
    serializeDate: function serializeDate(date) {
        return toISO.call(date);
    },
    skipNulls: false,
    strictNullHandling: false
};

var isNonNullishPrimitive = function isNonNullishPrimitive(v) {
    return typeof v === 'string'
        || typeof v === 'number'
        || typeof v === 'boolean'
        || typeof v === 'symbol'
        || typeof v === 'bigint';
};

var sentinel = {};

var stringify = function stringify(
    object,
    prefix,
    generateArrayPrefix,
    strictNullHandling,
    skipNulls,
    encoder,
    filter,
    sort,
    allowDots,
    serializeDate,
    format,
    formatter,
    encodeValuesOnly,
    charset,
    sideChannel
) {
    var obj = object;

    var tmpSc = sideChannel;
    var step = 0;
    var findFlag = false;
    while ((tmpSc = tmpSc.get(sentinel)) !== void undefined && !findFlag) {
        // Where object last appeared in the ref tree
        var pos = tmpSc.get(object);
        step += 1;
        if (typeof pos !== 'undefined') {
            if (pos === step) {
                throw new RangeError('Cyclic object value');
            } else {
                findFlag = true; // Break while
            }
        }
        if (typeof tmpSc.get(sentinel) === 'undefined') {
            step = 0;
        }
    }

    if (typeof filter === 'function') {
        obj = filter(prefix, obj);
    } else if (obj instanceof Date) {
        obj = serializeDate(obj);
    } else if (generateArrayPrefix === 'comma' && isArray(obj)) {
        obj = utils.maybeMap(obj, function (value) {
            if (value instanceof Date) {
                return serializeDate(value);
            }
            return value;
        });
    }

    if (obj === null) {
        if (strictNullHandling) {
            return encoder && !encodeValuesOnly ? encoder(prefix, defaults.encoder, charset, 'key', format) : prefix;
        }

        obj = '';
    }

    if (isNonNullishPrimitive(obj) || utils.isBuffer(obj)) {
        if (encoder) {
            var keyValue = encodeValuesOnly ? prefix : encoder(prefix, defaults.encoder, charset, 'key', format);
            if (generateArrayPrefix === 'comma' && encodeValuesOnly) {
                var valuesArray = split.call(String(obj), ',');
                var valuesJoined = '';
                for (var i = 0; i < valuesArray.length; ++i) {
                    valuesJoined += (i === 0 ? '' : ',') + formatter(encoder(valuesArray[i], defaults.encoder, charset, 'value', format));
                }
                return [formatter(keyValue) + '=' + valuesJoined];
            }
            return [formatter(keyValue) + '=' + formatter(encoder(obj, defaults.encoder, charset, 'value', format))];
        }
        return [formatter(prefix) + '=' + formatter(String(obj))];
    }

    var values = [];

    if (typeof obj === 'undefined') {
        return values;
    }

    var objKeys;
    if (generateArrayPrefix === 'comma' && isArray(obj)) {
        // we need to join elements in
        objKeys = [{ value: obj.length > 0 ? obj.join(',') || null : void undefined }];
    } else if (isArray(filter)) {
        objKeys = filter;
    } else {
        var keys = Object.keys(obj);
        objKeys = sort ? keys.sort(sort) : keys;
    }

    for (var j = 0; j < objKeys.length; ++j) {
        var key = objKeys[j];
        var value = typeof key === 'object' && typeof key.value !== 'undefined' ? key.value : obj[key];

        if (skipNulls && value === null) {
            continue;
        }

        var keyPrefix = isArray(obj)
            ? typeof generateArrayPrefix === 'function' ? generateArrayPrefix(prefix, key) : prefix
            : prefix + (allowDots ? '.' + key : '[' + key + ']');

        sideChannel.set(object, step);
        var valueSideChannel = getSideChannel();
        valueSideChannel.set(sentinel, sideChannel);
        pushToArray(values, stringify(
            value,
            keyPrefix,
            generateArrayPrefix,
            strictNullHandling,
            skipNulls,
            encoder,
            filter,
            sort,
            allowDots,
            serializeDate,
            format,
            formatter,
            encodeValuesOnly,
            charset,
            valueSideChannel
        ));
    }

    return values;
};

var normalizeStringifyOptions = function normalizeStringifyOptions(opts) {
    if (!opts) {
        return defaults;
    }

    if (opts.encoder !== null && typeof opts.encoder !== 'undefined' && typeof opts.encoder !== 'function') {
        throw new TypeError('Encoder has to be a function.');
    }

    var charset = opts.charset || defaults.charset;
    if (typeof opts.charset !== 'undefined' && opts.charset !== 'utf-8' && opts.charset !== 'iso-8859-1') {
        throw new TypeError('The charset option must be either utf-8, iso-8859-1, or undefined');
    }

    var format = formats['default'];
    if (typeof opts.format !== 'undefined') {
        if (!has.call(formats.formatters, opts.format)) {
            throw new TypeError('Unknown format option provided.');
        }
        format = opts.format;
    }
    var formatter = formats.formatters[format];

    var filter = defaults.filter;
    if (typeof opts.filter === 'function' || isArray(opts.filter)) {
        filter = opts.filter;
    }

    return {
        addQueryPrefix: typeof opts.addQueryPrefix === 'boolean' ? opts.addQueryPrefix : defaults.addQueryPrefix,
        allowDots: typeof opts.allowDots === 'undefined' ? defaults.allowDots : !!opts.allowDots,
        charset: charset,
        charsetSentinel: typeof opts.charsetSentinel === 'boolean' ? opts.charsetSentinel : defaults.charsetSentinel,
        delimiter: typeof opts.delimiter === 'undefined' ? defaults.delimiter : opts.delimiter,
        encode: typeof opts.encode === 'boolean' ? opts.encode : defaults.encode,
        encoder: typeof opts.encoder === 'function' ? opts.encoder : defaults.encoder,
        encodeValuesOnly: typeof opts.encodeValuesOnly === 'boolean' ? opts.encodeValuesOnly : defaults.encodeValuesOnly,
        filter: filter,
        format: format,
        formatter: formatter,
        serializeDate: typeof opts.serializeDate === 'function' ? opts.serializeDate : defaults.serializeDate,
        skipNulls: typeof opts.skipNulls === 'boolean' ? opts.skipNulls : defaults.skipNulls,
        sort: typeof opts.sort === 'function' ? opts.sort : null,
        strictNullHandling: typeof opts.strictNullHandling === 'boolean' ? opts.strictNullHandling : defaults.strictNullHandling
    };
};

module.exports = function (object, opts) {
    var obj = object;
    var options = normalizeStringifyOptions(opts);

    var objKeys;
    var filter;

    if (typeof options.filter === 'function') {
        filter = options.filter;
        obj = filter('', obj);
    } else if (isArray(options.filter)) {
        filter = options.filter;
        objKeys = filter;
    }

    var keys = [];

    if (typeof obj !== 'object' || obj === null) {
        return '';
    }

    var arrayFormat;
    if (opts && opts.arrayFormat in arrayPrefixGenerators) {
        arrayFormat = opts.arrayFormat;
    } else if (opts && 'indices' in opts) {
        arrayFormat = opts.indices ? 'indices' : 'repeat';
    } else {
        arrayFormat = 'indices';
    }

    var generateArrayPrefix = arrayPrefixGenerators[arrayFormat];

    if (!objKeys) {
        objKeys = Object.keys(obj);
    }

    if (options.sort) {
        objKeys.sort(options.sort);
    }

    var sideChannel = getSideChannel();
    for (var i = 0; i < objKeys.length; ++i) {
        var key = objKeys[i];

        if (options.skipNulls && obj[key] === null) {
            continue;
        }
        pushToArray(keys, stringify(
            obj[key],
            key,
            generateArrayPrefix,
            options.strictNullHandling,
            options.skipNulls,
            options.encode ? options.encoder : null,
            options.filter,
            options.sort,
            options.allowDots,
            options.serializeDate,
            options.format,
            options.formatter,
            options.encodeValuesOnly,
            options.charset,
            sideChannel
        ));
    }

    var joined = keys.join(options.delimiter);
    var prefix = options.addQueryPrefix === true ? '?' : '';

    if (options.charsetSentinel) {
        if (options.charset === 'iso-8859-1') {
            // encodeURIComponent('&#10003;'), the "numeric entity" representation of a checkmark
            prefix += 'utf8=%26%2310003%3B&';
        } else {
            // encodeURIComponent('✓')
            prefix += 'utf8=%E2%9C%93&';
        }
    }

    return joined.length > 0 ? prefix + joined : '';
};


/***/ }),

/***/ 2769:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var formats = __webpack_require__(5798);

var has = Object.prototype.hasOwnProperty;
var isArray = Array.isArray;

var hexTable = (function () {
    var array = [];
    for (var i = 0; i < 256; ++i) {
        array.push('%' + ((i < 16 ? '0' : '') + i.toString(16)).toUpperCase());
    }

    return array;
}());

var compactQueue = function compactQueue(queue) {
    while (queue.length > 1) {
        var item = queue.pop();
        var obj = item.obj[item.prop];

        if (isArray(obj)) {
            var compacted = [];

            for (var j = 0; j < obj.length; ++j) {
                if (typeof obj[j] !== 'undefined') {
                    compacted.push(obj[j]);
                }
            }

            item.obj[item.prop] = compacted;
        }
    }
};

var arrayToObject = function arrayToObject(source, options) {
    var obj = options && options.plainObjects ? Object.create(null) : {};
    for (var i = 0; i < source.length; ++i) {
        if (typeof source[i] !== 'undefined') {
            obj[i] = source[i];
        }
    }

    return obj;
};

var merge = function merge(target, source, options) {
    /* eslint no-param-reassign: 0 */
    if (!source) {
        return target;
    }

    if (typeof source !== 'object') {
        if (isArray(target)) {
            target.push(source);
        } else if (target && typeof target === 'object') {
            if ((options && (options.plainObjects || options.allowPrototypes)) || !has.call(Object.prototype, source)) {
                target[source] = true;
            }
        } else {
            return [target, source];
        }

        return target;
    }

    if (!target || typeof target !== 'object') {
        return [target].concat(source);
    }

    var mergeTarget = target;
    if (isArray(target) && !isArray(source)) {
        mergeTarget = arrayToObject(target, options);
    }

    if (isArray(target) && isArray(source)) {
        source.forEach(function (item, i) {
            if (has.call(target, i)) {
                var targetItem = target[i];
                if (targetItem && typeof targetItem === 'object' && item && typeof item === 'object') {
                    target[i] = merge(targetItem, item, options);
                } else {
                    target.push(item);
                }
            } else {
                target[i] = item;
            }
        });
        return target;
    }

    return Object.keys(source).reduce(function (acc, key) {
        var value = source[key];

        if (has.call(acc, key)) {
            acc[key] = merge(acc[key], value, options);
        } else {
            acc[key] = value;
        }
        return acc;
    }, mergeTarget);
};

var assign = function assignSingleSource(target, source) {
    return Object.keys(source).reduce(function (acc, key) {
        acc[key] = source[key];
        return acc;
    }, target);
};

var decode = function (str, decoder, charset) {
    var strWithoutPlus = str.replace(/\+/g, ' ');
    if (charset === 'iso-8859-1') {
        // unescape never throws, no try...catch needed:
        return strWithoutPlus.replace(/%[0-9a-f]{2}/gi, unescape);
    }
    // utf-8
    try {
        return decodeURIComponent(strWithoutPlus);
    } catch (e) {
        return strWithoutPlus;
    }
};

var encode = function encode(str, defaultEncoder, charset, kind, format) {
    // This code was originally written by Brian White (mscdex) for the io.js core querystring library.
    // It has been adapted here for stricter adherence to RFC 3986
    if (str.length === 0) {
        return str;
    }

    var string = str;
    if (typeof str === 'symbol') {
        string = Symbol.prototype.toString.call(str);
    } else if (typeof str !== 'string') {
        string = String(str);
    }

    if (charset === 'iso-8859-1') {
        return escape(string).replace(/%u[0-9a-f]{4}/gi, function ($0) {
            return '%26%23' + parseInt($0.slice(2), 16) + '%3B';
        });
    }

    var out = '';
    for (var i = 0; i < string.length; ++i) {
        var c = string.charCodeAt(i);

        if (
            c === 0x2D // -
            || c === 0x2E // .
            || c === 0x5F // _
            || c === 0x7E // ~
            || (c >= 0x30 && c <= 0x39) // 0-9
            || (c >= 0x41 && c <= 0x5A) // a-z
            || (c >= 0x61 && c <= 0x7A) // A-Z
            || (format === formats.RFC1738 && (c === 0x28 || c === 0x29)) // ( )
        ) {
            out += string.charAt(i);
            continue;
        }

        if (c < 0x80) {
            out = out + hexTable[c];
            continue;
        }

        if (c < 0x800) {
            out = out + (hexTable[0xC0 | (c >> 6)] + hexTable[0x80 | (c & 0x3F)]);
            continue;
        }

        if (c < 0xD800 || c >= 0xE000) {
            out = out + (hexTable[0xE0 | (c >> 12)] + hexTable[0x80 | ((c >> 6) & 0x3F)] + hexTable[0x80 | (c & 0x3F)]);
            continue;
        }

        i += 1;
        c = 0x10000 + (((c & 0x3FF) << 10) | (string.charCodeAt(i) & 0x3FF));
        /* eslint operator-linebreak: [2, "before"] */
        out += hexTable[0xF0 | (c >> 18)]
            + hexTable[0x80 | ((c >> 12) & 0x3F)]
            + hexTable[0x80 | ((c >> 6) & 0x3F)]
            + hexTable[0x80 | (c & 0x3F)];
    }

    return out;
};

var compact = function compact(value) {
    var queue = [{ obj: { o: value }, prop: 'o' }];
    var refs = [];

    for (var i = 0; i < queue.length; ++i) {
        var item = queue[i];
        var obj = item.obj[item.prop];

        var keys = Object.keys(obj);
        for (var j = 0; j < keys.length; ++j) {
            var key = keys[j];
            var val = obj[key];
            if (typeof val === 'object' && val !== null && refs.indexOf(val) === -1) {
                queue.push({ obj: obj, prop: key });
                refs.push(val);
            }
        }
    }

    compactQueue(queue);

    return value;
};

var isRegExp = function isRegExp(obj) {
    return Object.prototype.toString.call(obj) === '[object RegExp]';
};

var isBuffer = function isBuffer(obj) {
    if (!obj || typeof obj !== 'object') {
        return false;
    }

    return !!(obj.constructor && obj.constructor.isBuffer && obj.constructor.isBuffer(obj));
};

var combine = function combine(a, b) {
    return [].concat(a, b);
};

var maybeMap = function maybeMap(val, fn) {
    if (isArray(val)) {
        var mapped = [];
        for (var i = 0; i < val.length; i += 1) {
            mapped.push(fn(val[i]));
        }
        return mapped;
    }
    return fn(val);
};

module.exports = {
    arrayToObject: arrayToObject,
    assign: assign,
    combine: combine,
    compact: compact,
    decode: decode,
    encode: encode,
    isBuffer: isBuffer,
    isRegExp: isRegExp,
    maybeMap: maybeMap,
    merge: merge
};


/***/ }),

/***/ 7478:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var GetIntrinsic = __webpack_require__(210);
var callBound = __webpack_require__(1924);
var inspect = __webpack_require__(631);

var $TypeError = GetIntrinsic('%TypeError%');
var $WeakMap = GetIntrinsic('%WeakMap%', true);
var $Map = GetIntrinsic('%Map%', true);

var $weakMapGet = callBound('WeakMap.prototype.get', true);
var $weakMapSet = callBound('WeakMap.prototype.set', true);
var $weakMapHas = callBound('WeakMap.prototype.has', true);
var $mapGet = callBound('Map.prototype.get', true);
var $mapSet = callBound('Map.prototype.set', true);
var $mapHas = callBound('Map.prototype.has', true);

/*
 * This function traverses the list returning the node corresponding to the
 * given key.
 *
 * That node is also moved to the head of the list, so that if it's accessed
 * again we don't need to traverse the whole list. By doing so, all the recently
 * used nodes can be accessed relatively quickly.
 */
var listGetNode = function (list, key) { // eslint-disable-line consistent-return
	for (var prev = list, curr; (curr = prev.next) !== null; prev = curr) {
		if (curr.key === key) {
			prev.next = curr.next;
			curr.next = list.next;
			list.next = curr; // eslint-disable-line no-param-reassign
			return curr;
		}
	}
};

var listGet = function (objects, key) {
	var node = listGetNode(objects, key);
	return node && node.value;
};
var listSet = function (objects, key, value) {
	var node = listGetNode(objects, key);
	if (node) {
		node.value = value;
	} else {
		// Prepend the new node to the beginning of the list
		objects.next = { // eslint-disable-line no-param-reassign
			key: key,
			next: objects.next,
			value: value
		};
	}
};
var listHas = function (objects, key) {
	return !!listGetNode(objects, key);
};

module.exports = function getSideChannel() {
	var $wm;
	var $m;
	var $o;
	var channel = {
		assert: function (key) {
			if (!channel.has(key)) {
				throw new $TypeError('Side channel does not contain ' + inspect(key));
			}
		},
		get: function (key) { // eslint-disable-line consistent-return
			if ($WeakMap && key && (typeof key === 'object' || typeof key === 'function')) {
				if ($wm) {
					return $weakMapGet($wm, key);
				}
			} else if ($Map) {
				if ($m) {
					return $mapGet($m, key);
				}
			} else {
				if ($o) { // eslint-disable-line no-lonely-if
					return listGet($o, key);
				}
			}
		},
		has: function (key) {
			if ($WeakMap && key && (typeof key === 'object' || typeof key === 'function')) {
				if ($wm) {
					return $weakMapHas($wm, key);
				}
			} else if ($Map) {
				if ($m) {
					return $mapHas($m, key);
				}
			} else {
				if ($o) { // eslint-disable-line no-lonely-if
					return listHas($o, key);
				}
			}
			return false;
		},
		set: function (key, value) {
			if ($WeakMap && key && (typeof key === 'object' || typeof key === 'function')) {
				if (!$wm) {
					$wm = new $WeakMap();
				}
				$weakMapSet($wm, key, value);
			} else if ($Map) {
				if (!$m) {
					$m = new $Map();
				}
				$mapSet($m, key, value);
			} else {
				if (!$o) {
					/*
					 * Initialize the linked list as an empty node, so that we don't have
					 * to special-case handling of the first node: we can always refer to
					 * it as (previous node).next, instead of something like (list).head
					 */
					$o = { key: {}, next: null };
				}
				listSet($o, key, value);
			}
		}
	};
	return channel;
};


/***/ }),

/***/ 7233:
/***/ (function(__unused_webpack_module, __webpack_exports__) {

"use strict";
class Emoji {
  constructor(name, fileName) {
    this.name = name;
    this.fileName = fileName;
  }

}

const defaultEmoji = [new Emoji('呵呵', 'hehe'), new Emoji('哈哈', 'haha'), new Emoji('吐舌', 'tushe'), new Emoji('啊', 'a'), new Emoji('酷', 'ku'), new Emoji('怒', 'nu'), new Emoji('开心', 'kaixin'), new Emoji('汗', 'han'), new Emoji('泪', 'lei'), new Emoji('黑线', 'heixian'), new Emoji('鄙视', 'bishi'), new Emoji('不高兴', 'bugaoxing'), new Emoji('真棒', 'zhenbang'), new Emoji('钱', 'qian'), new Emoji('疑问', 'yiwen'), new Emoji('阴险', 'yingxiang'), new Emoji('吐', 'tu'), new Emoji('咦', 'yi'), new Emoji('委屈', 'weiqu'), new Emoji('花心', 'huaxin'), new Emoji('呼~', 'hu'), new Emoji('笑眼', 'xiaoyan'), new Emoji('冷', 'len'), new Emoji('太开心', 'taikaixin'), new Emoji('滑稽', 'huaji'), new Emoji('勉强', 'mianqiang'), new Emoji('狂汗', 'kuanhan'), new Emoji('乖', 'guai'), new Emoji('睡觉', 'shuijiao'), new Emoji('惊哭', 'jingku'), new Emoji('生气', 'shengqi'), new Emoji('惊讶', 'jingya'), new Emoji('喷', 'pen'), new Emoji('突然兴奋', 'turanxingfen'), new Emoji('挖鼻', 'wabi'), new Emoji('摊手', 'tanshou'), new Emoji('捂嘴笑', 'wuzuixiao'), new Emoji('喝酒', 'hejiu'), new Emoji('犀利', 'xili'), new Emoji('懒得理', 'landeli'), new Emoji('炸药', 'zhayao'), new Emoji('吃瓜', 'chigua'), new Emoji('小乖', 'xiaoguai'), new Emoji('你懂的', 'nidongde'), new Emoji('嘿嘿嘿', 'heiheihei'), new Emoji('欢呼', 'huanhu'), new Emoji('笑尿', 'xiaoniao'), new Emoji('酸爽', 'suanshuang'), new Emoji('紧张', 'jinzhang'), new Emoji('暗中观察', 'anzhongguancha'), new Emoji('小红脸', 'xiaohonglian'), new Emoji('呀咩爹', 'yamiedie'), new Emoji('微微一笑', 'weiweiyixiao'), new Emoji('what', 'what'), new Emoji('托腮', 'tuosai'), new Emoji('噗', 'pu'), new Emoji('困成狗', 'kunchenggou'), new Emoji('柯基暗中观察', 'kejianzhongguancha'), new Emoji('菜狗', 'caigou'), new Emoji('老虎', 'laohu'), new Emoji('嗷呜', 'aowu'), new Emoji('奥特曼', 'aoteman'), new Emoji('黑头高兴', 'heitougaoxing'), new Emoji('黑头瞪眼', 'heitoudengyan'), new Emoji('望远镜', 'wangyuanjing'), new Emoji('不听', 'butin'), new Emoji('干饭', 'ganfan'), new Emoji('大拇指', 'damuzhi'), new Emoji('胜利', 'shengli'), new Emoji('haha', 'haha2'), new Emoji('OK', 'ok'), new Emoji('红领巾', 'honglingjin'), new Emoji('爱心', 'aixin'), new Emoji('心碎', 'xinsui'), new Emoji('玫瑰', 'meigui'), new Emoji('礼物', 'liwu'), new Emoji('烟花', 'yanhua'), new Emoji('彩虹', 'caihong'), new Emoji('太阳', 'taiyang'), new Emoji('星星月亮', 'xingxingyueliang'), new Emoji('蛋糕', 'dangao'), new Emoji('茶杯', 'chabei'), new Emoji('香蕉', 'xiangjiao'), new Emoji('便便', 'bianbian'), new Emoji('药丸', 'yaowan'), new Emoji('钱币', 'qianbi'), new Emoji('蜡烛', 'lazhu'), new Emoji('沙发', 'shafa'), new Emoji('音乐', 'yinyue'), new Emoji('灯泡', 'dengpao'), new Emoji('手纸', 'shouzhi')];
/* harmony default export */ __webpack_exports__["Z"] = ([...defaultEmoji]);

/***/ }),

/***/ 655:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__assign": function() { return /* binding */ __assign; },
/* harmony export */   "__asyncDelegator": function() { return /* binding */ __asyncDelegator; },
/* harmony export */   "__asyncGenerator": function() { return /* binding */ __asyncGenerator; },
/* harmony export */   "__asyncValues": function() { return /* binding */ __asyncValues; },
/* harmony export */   "__await": function() { return /* binding */ __await; },
/* harmony export */   "__awaiter": function() { return /* binding */ __awaiter; },
/* harmony export */   "__classPrivateFieldGet": function() { return /* binding */ __classPrivateFieldGet; },
/* harmony export */   "__classPrivateFieldIn": function() { return /* binding */ __classPrivateFieldIn; },
/* harmony export */   "__classPrivateFieldSet": function() { return /* binding */ __classPrivateFieldSet; },
/* harmony export */   "__createBinding": function() { return /* binding */ __createBinding; },
/* harmony export */   "__decorate": function() { return /* binding */ __decorate; },
/* harmony export */   "__exportStar": function() { return /* binding */ __exportStar; },
/* harmony export */   "__extends": function() { return /* binding */ __extends; },
/* harmony export */   "__generator": function() { return /* binding */ __generator; },
/* harmony export */   "__importDefault": function() { return /* binding */ __importDefault; },
/* harmony export */   "__importStar": function() { return /* binding */ __importStar; },
/* harmony export */   "__makeTemplateObject": function() { return /* binding */ __makeTemplateObject; },
/* harmony export */   "__metadata": function() { return /* binding */ __metadata; },
/* harmony export */   "__param": function() { return /* binding */ __param; },
/* harmony export */   "__read": function() { return /* binding */ __read; },
/* harmony export */   "__rest": function() { return /* binding */ __rest; },
/* harmony export */   "__spread": function() { return /* binding */ __spread; },
/* harmony export */   "__spreadArray": function() { return /* binding */ __spreadArray; },
/* harmony export */   "__spreadArrays": function() { return /* binding */ __spreadArrays; },
/* harmony export */   "__values": function() { return /* binding */ __values; }
/* harmony export */ });
/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});

function __exportStar(m, o) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

/** @deprecated */
function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

/** @deprecated */
function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}

function __classPrivateFieldIn(state, receiver) {
    if (receiver === null || (typeof receiver !== "object" && typeof receiver !== "function")) throw new TypeError("Cannot use 'in' operator on non-object");
    return typeof state === "function" ? receiver === state : state.has(receiver);
}


/***/ }),

/***/ 2238:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/////////////////////////////////////////////////////////////////////////////////
/* UAParser.js v0.7.31
   Copyright © 2012-2021 Faisal Salman <f@faisalman.com>
   MIT License *//*
   Detect Browser, Engine, OS, CPU, and Device type/model from User-Agent data.
   Supports browser & node.js environment. 
   Demo   : https://faisalman.github.io/ua-parser-js
   Source : https://github.com/faisalman/ua-parser-js */
/////////////////////////////////////////////////////////////////////////////////

(function (window, undefined) {

    'use strict';

    //////////////
    // Constants
    /////////////


    var LIBVERSION  = '0.7.31',
        EMPTY       = '',
        UNKNOWN     = '?',
        FUNC_TYPE   = 'function',
        UNDEF_TYPE  = 'undefined',
        OBJ_TYPE    = 'object',
        STR_TYPE    = 'string',
        MAJOR       = 'major',
        MODEL       = 'model',
        NAME        = 'name',
        TYPE        = 'type',
        VENDOR      = 'vendor',
        VERSION     = 'version',
        ARCHITECTURE= 'architecture',
        CONSOLE     = 'console',
        MOBILE      = 'mobile',
        TABLET      = 'tablet',
        SMARTTV     = 'smarttv',
        WEARABLE    = 'wearable',
        EMBEDDED    = 'embedded',
        UA_MAX_LENGTH = 255;

    var AMAZON  = 'Amazon',
        APPLE   = 'Apple',
        ASUS    = 'ASUS',
        BLACKBERRY = 'BlackBerry',
        BROWSER = 'Browser',
        CHROME  = 'Chrome',
        EDGE    = 'Edge',
        FIREFOX = 'Firefox',
        GOOGLE  = 'Google',
        HUAWEI  = 'Huawei',
        LG      = 'LG',
        MICROSOFT = 'Microsoft',
        MOTOROLA  = 'Motorola',
        OPERA   = 'Opera',
        SAMSUNG = 'Samsung',
        SONY    = 'Sony',
        XIAOMI  = 'Xiaomi',
        ZEBRA   = 'Zebra',
        FACEBOOK   = 'Facebook';

    ///////////
    // Helper
    //////////

    var extend = function (regexes, extensions) {
            var mergedRegexes = {};
            for (var i in regexes) {
                if (extensions[i] && extensions[i].length % 2 === 0) {
                    mergedRegexes[i] = extensions[i].concat(regexes[i]);
                } else {
                    mergedRegexes[i] = regexes[i];
                }
            }
            return mergedRegexes;
        },
        enumerize = function (arr) {
            var enums = {};
            for (var i=0; i<arr.length; i++) {
                enums[arr[i].toUpperCase()] = arr[i];
            }
            return enums;
        },
        has = function (str1, str2) {
            return typeof str1 === STR_TYPE ? lowerize(str2).indexOf(lowerize(str1)) !== -1 : false;
        },
        lowerize = function (str) {
            return str.toLowerCase();
        },
        majorize = function (version) {
            return typeof(version) === STR_TYPE ? version.replace(/[^\d\.]/g, EMPTY).split('.')[0] : undefined;
        },
        trim = function (str, len) {
            if (typeof(str) === STR_TYPE) {
                str = str.replace(/^\s\s*/, EMPTY).replace(/\s\s*$/, EMPTY);
                return typeof(len) === UNDEF_TYPE ? str : str.substring(0, UA_MAX_LENGTH);
            }
    };

    ///////////////
    // Map helper
    //////////////

    var rgxMapper = function (ua, arrays) {

            var i = 0, j, k, p, q, matches, match;

            // loop through all regexes maps
            while (i < arrays.length && !matches) {

                var regex = arrays[i],       // even sequence (0,2,4,..)
                    props = arrays[i + 1];   // odd sequence (1,3,5,..)
                j = k = 0;

                // try matching uastring with regexes
                while (j < regex.length && !matches) {

                    matches = regex[j++].exec(ua);

                    if (!!matches) {
                        for (p = 0; p < props.length; p++) {
                            match = matches[++k];
                            q = props[p];
                            // check if given property is actually array
                            if (typeof q === OBJ_TYPE && q.length > 0) {
                                if (q.length === 2) {
                                    if (typeof q[1] == FUNC_TYPE) {
                                        // assign modified match
                                        this[q[0]] = q[1].call(this, match);
                                    } else {
                                        // assign given value, ignore regex match
                                        this[q[0]] = q[1];
                                    }
                                } else if (q.length === 3) {
                                    // check whether function or regex
                                    if (typeof q[1] === FUNC_TYPE && !(q[1].exec && q[1].test)) {
                                        // call function (usually string mapper)
                                        this[q[0]] = match ? q[1].call(this, match, q[2]) : undefined;
                                    } else {
                                        // sanitize match using given regex
                                        this[q[0]] = match ? match.replace(q[1], q[2]) : undefined;
                                    }
                                } else if (q.length === 4) {
                                        this[q[0]] = match ? q[3].call(this, match.replace(q[1], q[2])) : undefined;
                                }
                            } else {
                                this[q] = match ? match : undefined;
                            }
                        }
                    }
                }
                i += 2;
            }
        },

        strMapper = function (str, map) {

            for (var i in map) {
                // check if current value is array
                if (typeof map[i] === OBJ_TYPE && map[i].length > 0) {
                    for (var j = 0; j < map[i].length; j++) {
                        if (has(map[i][j], str)) {
                            return (i === UNKNOWN) ? undefined : i;
                        }
                    }
                } else if (has(map[i], str)) {
                    return (i === UNKNOWN) ? undefined : i;
                }
            }
            return str;
    };

    ///////////////
    // String map
    //////////////

    // Safari < 3.0
    var oldSafariMap = {
            '1.0'   : '/8',
            '1.2'   : '/1',
            '1.3'   : '/3',
            '2.0'   : '/412',
            '2.0.2' : '/416',
            '2.0.3' : '/417',
            '2.0.4' : '/419',
            '?'     : '/'
        },
        windowsVersionMap = {
            'ME'        : '4.90',
            'NT 3.11'   : 'NT3.51',
            'NT 4.0'    : 'NT4.0',
            '2000'      : 'NT 5.0',
            'XP'        : ['NT 5.1', 'NT 5.2'],
            'Vista'     : 'NT 6.0',
            '7'         : 'NT 6.1',
            '8'         : 'NT 6.2',
            '8.1'       : 'NT 6.3',
            '10'        : ['NT 6.4', 'NT 10.0'],
            'RT'        : 'ARM'
    };

    //////////////
    // Regex map
    /////////////

    var regexes = {

        browser : [[

            /\b(?:crmo|crios)\/([\w\.]+)/i                                      // Chrome for Android/iOS
            ], [VERSION, [NAME, 'Chrome']], [
            /edg(?:e|ios|a)?\/([\w\.]+)/i                                       // Microsoft Edge
            ], [VERSION, [NAME, 'Edge']], [

            // Presto based
            /(opera mini)\/([-\w\.]+)/i,                                        // Opera Mini
            /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,                 // Opera Mobi/Tablet
            /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i                           // Opera
            ], [NAME, VERSION], [
            /opios[\/ ]+([\w\.]+)/i                                             // Opera mini on iphone >= 8.0
            ], [VERSION, [NAME, OPERA+' Mini']], [
            /\bopr\/([\w\.]+)/i                                                 // Opera Webkit
            ], [VERSION, [NAME, OPERA]], [

            // Mixed
            /(kindle)\/([\w\.]+)/i,                                             // Kindle
            /(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i,      // Lunascape/Maxthon/Netfront/Jasmine/Blazer
            // Trident based
            /(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i,               // Avant/IEMobile/SlimBrowser
            /(ba?idubrowser)[\/ ]?([\w\.]+)/i,                                  // Baidu Browser
            /(?:ms|\()(ie) ([\w\.]+)/i,                                         // Internet Explorer

            // Webkit/KHTML based                                               // Flock/RockMelt/Midori/Epiphany/Silk/Skyfire/Bolt/Iron/Iridium/PhantomJS/Bowser/QupZilla/Falkon
            /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale|qqbrowserlite|qq)\/([-\w\.]+)/i,
                                                                                // Rekonq/Puffin/Brave/Whale/QQBrowserLite/QQ, aka ShouQ
            /(weibo)__([\d\.]+)/i                                               // Weibo
            ], [NAME, VERSION], [
            /(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i                 // UCBrowser
            ], [VERSION, [NAME, 'UC'+BROWSER]], [
            /\bqbcore\/([\w\.]+)/i                                              // WeChat Desktop for Windows Built-in Browser
            ], [VERSION, [NAME, 'WeChat(Win) Desktop']], [
            /micromessenger\/([\w\.]+)/i                                        // WeChat
            ], [VERSION, [NAME, 'WeChat']], [
            /konqueror\/([\w\.]+)/i                                             // Konqueror
            ], [VERSION, [NAME, 'Konqueror']], [
            /trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i                       // IE11
            ], [VERSION, [NAME, 'IE']], [
            /yabrowser\/([\w\.]+)/i                                             // Yandex
            ], [VERSION, [NAME, 'Yandex']], [
            /(avast|avg)\/([\w\.]+)/i                                           // Avast/AVG Secure Browser
            ], [[NAME, /(.+)/, '$1 Secure '+BROWSER], VERSION], [
            /\bfocus\/([\w\.]+)/i                                               // Firefox Focus
            ], [VERSION, [NAME, FIREFOX+' Focus']], [
            /\bopt\/([\w\.]+)/i                                                 // Opera Touch
            ], [VERSION, [NAME, OPERA+' Touch']], [
            /coc_coc\w+\/([\w\.]+)/i                                            // Coc Coc Browser
            ], [VERSION, [NAME, 'Coc Coc']], [
            /dolfin\/([\w\.]+)/i                                                // Dolphin
            ], [VERSION, [NAME, 'Dolphin']], [
            /coast\/([\w\.]+)/i                                                 // Opera Coast
            ], [VERSION, [NAME, OPERA+' Coast']], [
            /miuibrowser\/([\w\.]+)/i                                           // MIUI Browser
            ], [VERSION, [NAME, 'MIUI '+BROWSER]], [
            /fxios\/([-\w\.]+)/i                                                // Firefox for iOS
            ], [VERSION, [NAME, FIREFOX]], [
            /\bqihu|(qi?ho?o?|360)browser/i                                     // 360
            ], [[NAME, '360 '+BROWSER]], [
            /(oculus|samsung|sailfish)browser\/([\w\.]+)/i
            ], [[NAME, /(.+)/, '$1 '+BROWSER], VERSION], [                      // Oculus/Samsung/Sailfish Browser
            /(comodo_dragon)\/([\w\.]+)/i                                       // Comodo Dragon
            ], [[NAME, /_/g, ' '], VERSION], [
            /(electron)\/([\w\.]+) safari/i,                                    // Electron-based App
            /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,                   // Tesla
            /m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i            // QQBrowser/Baidu App/2345 Browser
            ], [NAME, VERSION], [
            /(metasr)[\/ ]?([\w\.]+)/i,                                         // SouGouBrowser
            /(lbbrowser)/i                                                      // LieBao Browser
            ], [NAME], [

            // WebView
            /((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i       // Facebook App for iOS & Android
            ], [[NAME, FACEBOOK], VERSION], [
            /safari (line)\/([\w\.]+)/i,                                        // Line App for iOS
            /\b(line)\/([\w\.]+)\/iab/i,                                        // Line App for Android
            /(chromium|instagram)[\/ ]([-\w\.]+)/i                              // Chromium/Instagram
            ], [NAME, VERSION], [
            /\bgsa\/([\w\.]+) .*safari\//i                                      // Google Search Appliance on iOS
            ], [VERSION, [NAME, 'GSA']], [

            /headlesschrome(?:\/([\w\.]+)| )/i                                  // Chrome Headless
            ], [VERSION, [NAME, CHROME+' Headless']], [

            / wv\).+(chrome)\/([\w\.]+)/i                                       // Chrome WebView
            ], [[NAME, CHROME+' WebView'], VERSION], [

            /droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i           // Android Browser
            ], [VERSION, [NAME, 'Android '+BROWSER]], [

            /(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i       // Chrome/OmniWeb/Arora/Tizen/Nokia
            ], [NAME, VERSION], [

            /version\/([\w\.]+) .*mobile\/\w+ (safari)/i                        // Mobile Safari
            ], [VERSION, [NAME, 'Mobile Safari']], [
            /version\/([\w\.]+) .*(mobile ?safari|safari)/i                     // Safari & Safari Mobile
            ], [VERSION, NAME], [
            /webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i                      // Safari < 3.0
            ], [NAME, [VERSION, strMapper, oldSafariMap]], [

            /(webkit|khtml)\/([\w\.]+)/i
            ], [NAME, VERSION], [

            // Gecko based
            /(navigator|netscape\d?)\/([-\w\.]+)/i                              // Netscape
            ], [[NAME, 'Netscape'], VERSION], [
            /mobile vr; rv:([\w\.]+)\).+firefox/i                               // Firefox Reality
            ], [VERSION, [NAME, FIREFOX+' Reality']], [
            /ekiohf.+(flow)\/([\w\.]+)/i,                                       // Flow
            /(swiftfox)/i,                                                      // Swiftfox
            /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i,
                                                                                // IceDragon/Iceweasel/Camino/Chimera/Fennec/Maemo/Minimo/Conkeror/Klar
            /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,
                                                                                // Firefox/SeaMonkey/K-Meleon/IceCat/IceApe/Firebird/Phoenix
            /(firefox)\/([\w\.]+)/i,                                            // Other Firefox-based
            /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,                         // Mozilla

            // Other
            /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,
                                                                                // Polaris/Lynx/Dillo/iCab/Doris/Amaya/w3m/NetSurf/Sleipnir/Obigo/Mosaic/Go/ICE/UP.Browser
            /(links) \(([\w\.]+)/i                                              // Links
            ], [NAME, VERSION]
        ],

        cpu : [[

            /(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i                     // AMD64 (x64)
            ], [[ARCHITECTURE, 'amd64']], [

            /(ia32(?=;))/i                                                      // IA32 (quicktime)
            ], [[ARCHITECTURE, lowerize]], [

            /((?:i[346]|x)86)[;\)]/i                                            // IA32 (x86)
            ], [[ARCHITECTURE, 'ia32']], [

            /\b(aarch64|arm(v?8e?l?|_?64))\b/i                                 // ARM64
            ], [[ARCHITECTURE, 'arm64']], [

            /\b(arm(?:v[67])?ht?n?[fl]p?)\b/i                                   // ARMHF
            ], [[ARCHITECTURE, 'armhf']], [

            // PocketPC mistakenly identified as PowerPC
            /windows (ce|mobile); ppc;/i
            ], [[ARCHITECTURE, 'arm']], [

            /((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i                            // PowerPC
            ], [[ARCHITECTURE, /ower/, EMPTY, lowerize]], [

            /(sun4\w)[;\)]/i                                                    // SPARC
            ], [[ARCHITECTURE, 'sparc']], [

            /((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i
                                                                                // IA64, 68K, ARM/64, AVR/32, IRIX/64, MIPS/64, SPARC/64, PA-RISC
            ], [[ARCHITECTURE, lowerize]]
        ],

        device : [[

            //////////////////////////
            // MOBILES & TABLETS
            // Ordered by popularity
            /////////////////////////

            // Samsung
            /\b(sch-i[89]0\d|shw-m380s|sm-[pt]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i
            ], [MODEL, [VENDOR, SAMSUNG], [TYPE, TABLET]], [
            /\b((?:s[cgp]h|gt|sm)-\w+|galaxy nexus)/i,
            /samsung[- ]([-\w]+)/i,
            /sec-(sgh\w+)/i
            ], [MODEL, [VENDOR, SAMSUNG], [TYPE, MOBILE]], [

            // Apple
            /\((ip(?:hone|od)[\w ]*);/i                                         // iPod/iPhone
            ], [MODEL, [VENDOR, APPLE], [TYPE, MOBILE]], [
            /\((ipad);[-\w\),; ]+apple/i,                                       // iPad
            /applecoremedia\/[\w\.]+ \((ipad)/i,
            /\b(ipad)\d\d?,\d\d?[;\]].+ios/i
            ], [MODEL, [VENDOR, APPLE], [TYPE, TABLET]], [

            // Huawei
            /\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i
            ], [MODEL, [VENDOR, HUAWEI], [TYPE, TABLET]], [
            /(?:huawei|honor)([-\w ]+)[;\)]/i,
            /\b(nexus 6p|\w{2,4}-[atu]?[ln][01259x][012359][an]?)\b(?!.+d\/s)/i
            ], [MODEL, [VENDOR, HUAWEI], [TYPE, MOBILE]], [

            // Xiaomi
            /\b(poco[\w ]+)(?: bui|\))/i,                                       // Xiaomi POCO
            /\b; (\w+) build\/hm\1/i,                                           // Xiaomi Hongmi 'numeric' models
            /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,                             // Xiaomi Hongmi
            /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,                   // Xiaomi Redmi
            /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i // Xiaomi Mi
            ], [[MODEL, /_/g, ' '], [VENDOR, XIAOMI], [TYPE, MOBILE]], [
            /\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i                        // Mi Pad tablets
            ],[[MODEL, /_/g, ' '], [VENDOR, XIAOMI], [TYPE, TABLET]], [

            // OPPO
            /; (\w+) bui.+ oppo/i,
            /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i
            ], [MODEL, [VENDOR, 'OPPO'], [TYPE, MOBILE]], [

            // Vivo
            /vivo (\w+)(?: bui|\))/i,
            /\b(v[12]\d{3}\w?[at])(?: bui|;)/i
            ], [MODEL, [VENDOR, 'Vivo'], [TYPE, MOBILE]], [

            // Realme
            /\b(rmx[12]\d{3})(?: bui|;|\))/i
            ], [MODEL, [VENDOR, 'Realme'], [TYPE, MOBILE]], [

            // Motorola
            /\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,
            /\bmot(?:orola)?[- ](\w*)/i,
            /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i
            ], [MODEL, [VENDOR, MOTOROLA], [TYPE, MOBILE]], [
            /\b(mz60\d|xoom[2 ]{0,2}) build\//i
            ], [MODEL, [VENDOR, MOTOROLA], [TYPE, TABLET]], [

            // LG
            /((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i
            ], [MODEL, [VENDOR, LG], [TYPE, TABLET]], [
            /(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,
            /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,
            /\blg-?([\d\w]+) bui/i
            ], [MODEL, [VENDOR, LG], [TYPE, MOBILE]], [

            // Lenovo
            /(ideatab[-\w ]+)/i,
            /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i
            ], [MODEL, [VENDOR, 'Lenovo'], [TYPE, TABLET]], [

            // Nokia
            /(?:maemo|nokia).*(n900|lumia \d+)/i,
            /nokia[-_ ]?([-\w\.]*)/i
            ], [[MODEL, /_/g, ' '], [VENDOR, 'Nokia'], [TYPE, MOBILE]], [

            // Google
            /(pixel c)\b/i                                                      // Google Pixel C
            ], [MODEL, [VENDOR, GOOGLE], [TYPE, TABLET]], [
            /droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i                         // Google Pixel
            ], [MODEL, [VENDOR, GOOGLE], [TYPE, MOBILE]], [

            // Sony
            /droid.+ ([c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i
            ], [MODEL, [VENDOR, SONY], [TYPE, MOBILE]], [
            /sony tablet [ps]/i,
            /\b(?:sony)?sgp\w+(?: bui|\))/i
            ], [[MODEL, 'Xperia Tablet'], [VENDOR, SONY], [TYPE, TABLET]], [

            // OnePlus
            / (kb2005|in20[12]5|be20[12][59])\b/i,
            /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i
            ], [MODEL, [VENDOR, 'OnePlus'], [TYPE, MOBILE]], [

            // Amazon
            /(alexa)webm/i,
            /(kf[a-z]{2}wi)( bui|\))/i,                                         // Kindle Fire without Silk
            /(kf[a-z]+)( bui|\)).+silk\//i                                      // Kindle Fire HD
            ], [MODEL, [VENDOR, AMAZON], [TYPE, TABLET]], [
            /((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i                     // Fire Phone
            ], [[MODEL, /(.+)/g, 'Fire Phone $1'], [VENDOR, AMAZON], [TYPE, MOBILE]], [

            // BlackBerry
            /(playbook);[-\w\),; ]+(rim)/i                                      // BlackBerry PlayBook
            ], [MODEL, VENDOR, [TYPE, TABLET]], [
            /\b((?:bb[a-f]|st[hv])100-\d)/i,
            /\(bb10; (\w+)/i                                                    // BlackBerry 10
            ], [MODEL, [VENDOR, BLACKBERRY], [TYPE, MOBILE]], [

            // Asus
            /(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i
            ], [MODEL, [VENDOR, ASUS], [TYPE, TABLET]], [
            / (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i
            ], [MODEL, [VENDOR, ASUS], [TYPE, MOBILE]], [

            // HTC
            /(nexus 9)/i                                                        // HTC Nexus 9
            ], [MODEL, [VENDOR, 'HTC'], [TYPE, TABLET]], [
            /(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,                         // HTC

            // ZTE
            /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,
            /(alcatel|geeksphone|nexian|panasonic|sony)[-_ ]?([-\w]*)/i         // Alcatel/GeeksPhone/Nexian/Panasonic/Sony
            ], [VENDOR, [MODEL, /_/g, ' '], [TYPE, MOBILE]], [

            // Acer
            /droid.+; ([ab][1-7]-?[0178a]\d\d?)/i
            ], [MODEL, [VENDOR, 'Acer'], [TYPE, TABLET]], [

            // Meizu
            /droid.+; (m[1-5] note) bui/i,
            /\bmz-([-\w]{2,})/i
            ], [MODEL, [VENDOR, 'Meizu'], [TYPE, MOBILE]], [

            // Sharp
            /\b(sh-?[altvz]?\d\d[a-ekm]?)/i
            ], [MODEL, [VENDOR, 'Sharp'], [TYPE, MOBILE]], [

            // MIXED
            /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i,
                                                                                // BlackBerry/BenQ/Palm/Sony-Ericsson/Acer/Asus/Dell/Meizu/Motorola/Polytron
            /(hp) ([\w ]+\w)/i,                                                 // HP iPAQ
            /(asus)-?(\w+)/i,                                                   // Asus
            /(microsoft); (lumia[\w ]+)/i,                                      // Microsoft Lumia
            /(lenovo)[-_ ]?([-\w]+)/i,                                          // Lenovo
            /(jolla)/i,                                                         // Jolla
            /(oppo) ?([\w ]+) bui/i                                             // OPPO
            ], [VENDOR, MODEL, [TYPE, MOBILE]], [

            /(archos) (gamepad2?)/i,                                            // Archos
            /(hp).+(touchpad(?!.+tablet)|tablet)/i,                             // HP TouchPad
            /(kindle)\/([\w\.]+)/i,                                             // Kindle
            /(nook)[\w ]+build\/(\w+)/i,                                        // Nook
            /(dell) (strea[kpr\d ]*[\dko])/i,                                   // Dell Streak
            /(le[- ]+pan)[- ]+(\w{1,9}) bui/i,                                  // Le Pan Tablets
            /(trinity)[- ]*(t\d{3}) bui/i,                                      // Trinity Tablets
            /(gigaset)[- ]+(q\w{1,9}) bui/i,                                    // Gigaset Tablets
            /(vodafone) ([\w ]+)(?:\)| bui)/i                                   // Vodafone
            ], [VENDOR, MODEL, [TYPE, TABLET]], [

            /(surface duo)/i                                                    // Surface Duo
            ], [MODEL, [VENDOR, MICROSOFT], [TYPE, TABLET]], [
            /droid [\d\.]+; (fp\du?)(?: b|\))/i                                 // Fairphone
            ], [MODEL, [VENDOR, 'Fairphone'], [TYPE, MOBILE]], [
            /(u304aa)/i                                                         // AT&T
            ], [MODEL, [VENDOR, 'AT&T'], [TYPE, MOBILE]], [
            /\bsie-(\w*)/i                                                      // Siemens
            ], [MODEL, [VENDOR, 'Siemens'], [TYPE, MOBILE]], [
            /\b(rct\w+) b/i                                                     // RCA Tablets
            ], [MODEL, [VENDOR, 'RCA'], [TYPE, TABLET]], [
            /\b(venue[\d ]{2,7}) b/i                                            // Dell Venue Tablets
            ], [MODEL, [VENDOR, 'Dell'], [TYPE, TABLET]], [
            /\b(q(?:mv|ta)\w+) b/i                                              // Verizon Tablet
            ], [MODEL, [VENDOR, 'Verizon'], [TYPE, TABLET]], [
            /\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i                       // Barnes & Noble Tablet
            ], [MODEL, [VENDOR, 'Barnes & Noble'], [TYPE, TABLET]], [
            /\b(tm\d{3}\w+) b/i
            ], [MODEL, [VENDOR, 'NuVision'], [TYPE, TABLET]], [
            /\b(k88) b/i                                                        // ZTE K Series Tablet
            ], [MODEL, [VENDOR, 'ZTE'], [TYPE, TABLET]], [
            /\b(nx\d{3}j) b/i                                                   // ZTE Nubia
            ], [MODEL, [VENDOR, 'ZTE'], [TYPE, MOBILE]], [
            /\b(gen\d{3}) b.+49h/i                                              // Swiss GEN Mobile
            ], [MODEL, [VENDOR, 'Swiss'], [TYPE, MOBILE]], [
            /\b(zur\d{3}) b/i                                                   // Swiss ZUR Tablet
            ], [MODEL, [VENDOR, 'Swiss'], [TYPE, TABLET]], [
            /\b((zeki)?tb.*\b) b/i                                              // Zeki Tablets
            ], [MODEL, [VENDOR, 'Zeki'], [TYPE, TABLET]], [
            /\b([yr]\d{2}) b/i,
            /\b(dragon[- ]+touch |dt)(\w{5}) b/i                                // Dragon Touch Tablet
            ], [[VENDOR, 'Dragon Touch'], MODEL, [TYPE, TABLET]], [
            /\b(ns-?\w{0,9}) b/i                                                // Insignia Tablets
            ], [MODEL, [VENDOR, 'Insignia'], [TYPE, TABLET]], [
            /\b((nxa|next)-?\w{0,9}) b/i                                        // NextBook Tablets
            ], [MODEL, [VENDOR, 'NextBook'], [TYPE, TABLET]], [
            /\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i                  // Voice Xtreme Phones
            ], [[VENDOR, 'Voice'], MODEL, [TYPE, MOBILE]], [
            /\b(lvtel\-)?(v1[12]) b/i                                           // LvTel Phones
            ], [[VENDOR, 'LvTel'], MODEL, [TYPE, MOBILE]], [
            /\b(ph-1) /i                                                        // Essential PH-1
            ], [MODEL, [VENDOR, 'Essential'], [TYPE, MOBILE]], [
            /\b(v(100md|700na|7011|917g).*\b) b/i                               // Envizen Tablets
            ], [MODEL, [VENDOR, 'Envizen'], [TYPE, TABLET]], [
            /\b(trio[-\w\. ]+) b/i                                              // MachSpeed Tablets
            ], [MODEL, [VENDOR, 'MachSpeed'], [TYPE, TABLET]], [
            /\btu_(1491) b/i                                                    // Rotor Tablets
            ], [MODEL, [VENDOR, 'Rotor'], [TYPE, TABLET]], [
            /(shield[\w ]+) b/i                                                 // Nvidia Shield Tablets
            ], [MODEL, [VENDOR, 'Nvidia'], [TYPE, TABLET]], [
            /(sprint) (\w+)/i                                                   // Sprint Phones
            ], [VENDOR, MODEL, [TYPE, MOBILE]], [
            /(kin\.[onetw]{3})/i                                                // Microsoft Kin
            ], [[MODEL, /\./g, ' '], [VENDOR, MICROSOFT], [TYPE, MOBILE]], [
            /droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i             // Zebra
            ], [MODEL, [VENDOR, ZEBRA], [TYPE, TABLET]], [
            /droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i
            ], [MODEL, [VENDOR, ZEBRA], [TYPE, MOBILE]], [

            ///////////////////
            // CONSOLES
            ///////////////////

            /(ouya)/i,                                                          // Ouya
            /(nintendo) ([wids3utch]+)/i                                        // Nintendo
            ], [VENDOR, MODEL, [TYPE, CONSOLE]], [
            /droid.+; (shield) bui/i                                            // Nvidia
            ], [MODEL, [VENDOR, 'Nvidia'], [TYPE, CONSOLE]], [
            /(playstation [345portablevi]+)/i                                   // Playstation
            ], [MODEL, [VENDOR, SONY], [TYPE, CONSOLE]], [
            /\b(xbox(?: one)?(?!; xbox))[\); ]/i                                // Microsoft Xbox
            ], [MODEL, [VENDOR, MICROSOFT], [TYPE, CONSOLE]], [

            ///////////////////
            // SMARTTVS
            ///////////////////

            /smart-tv.+(samsung)/i                                              // Samsung
            ], [VENDOR, [TYPE, SMARTTV]], [
            /hbbtv.+maple;(\d+)/i
            ], [[MODEL, /^/, 'SmartTV'], [VENDOR, SAMSUNG], [TYPE, SMARTTV]], [
            /(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i        // LG SmartTV
            ], [[VENDOR, LG], [TYPE, SMARTTV]], [
            /(apple) ?tv/i                                                      // Apple TV
            ], [VENDOR, [MODEL, APPLE+' TV'], [TYPE, SMARTTV]], [
            /crkey/i                                                            // Google Chromecast
            ], [[MODEL, CHROME+'cast'], [VENDOR, GOOGLE], [TYPE, SMARTTV]], [
            /droid.+aft(\w)( bui|\))/i                                          // Fire TV
            ], [MODEL, [VENDOR, AMAZON], [TYPE, SMARTTV]], [
            /\(dtv[\);].+(aquos)/i                                              // Sharp
            ], [MODEL, [VENDOR, 'Sharp'], [TYPE, SMARTTV]], [
            /\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,                          // Roku
            /hbbtv\/\d+\.\d+\.\d+ +\([\w ]*; *(\w[^;]*);([^;]*)/i               // HbbTV devices
            ], [[VENDOR, trim], [MODEL, trim], [TYPE, SMARTTV]], [
            /\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i                   // SmartTV from Unidentified Vendors
            ], [[TYPE, SMARTTV]], [

            ///////////////////
            // WEARABLES
            ///////////////////

            /((pebble))app/i                                                    // Pebble
            ], [VENDOR, MODEL, [TYPE, WEARABLE]], [
            /droid.+; (glass) \d/i                                              // Google Glass
            ], [MODEL, [VENDOR, GOOGLE], [TYPE, WEARABLE]], [
            /droid.+; (wt63?0{2,3})\)/i
            ], [MODEL, [VENDOR, ZEBRA], [TYPE, WEARABLE]], [
            /(quest( 2)?)/i                                                     // Oculus Quest
            ], [MODEL, [VENDOR, FACEBOOK], [TYPE, WEARABLE]], [

            ///////////////////
            // EMBEDDED
            ///////////////////

            /(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i                              // Tesla
            ], [VENDOR, [TYPE, EMBEDDED]], [

            ////////////////////
            // MIXED (GENERIC)
            ///////////////////

            /droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i           // Android Phones from Unidentified Vendors
            ], [MODEL, [TYPE, MOBILE]], [
            /droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i       // Android Tablets from Unidentified Vendors
            ], [MODEL, [TYPE, TABLET]], [
            /\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i                      // Unidentifiable Tablet
            ], [[TYPE, TABLET]], [
            /(phone|mobile(?:[;\/]| safari)|pda(?=.+windows ce))/i              // Unidentifiable Mobile
            ], [[TYPE, MOBILE]], [
            /(android[-\w\. ]{0,9});.+buil/i                                    // Generic Android Device
            ], [MODEL, [VENDOR, 'Generic']]
        ],

        engine : [[

            /windows.+ edge\/([\w\.]+)/i                                       // EdgeHTML
            ], [VERSION, [NAME, EDGE+'HTML']], [

            /webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i                         // Blink
            ], [VERSION, [NAME, 'Blink']], [

            /(presto)\/([\w\.]+)/i,                                             // Presto
            /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i, // WebKit/Trident/NetFront/NetSurf/Amaya/Lynx/w3m/Goanna
            /ekioh(flow)\/([\w\.]+)/i,                                          // Flow
            /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,                           // KHTML/Tasman/Links
            /(icab)[\/ ]([23]\.[\d\.]+)/i                                       // iCab
            ], [NAME, VERSION], [

            /rv\:([\w\.]{1,9})\b.+(gecko)/i                                     // Gecko
            ], [VERSION, NAME]
        ],

        os : [[

            // Windows
            /microsoft (windows) (vista|xp)/i                                   // Windows (iTunes)
            ], [NAME, VERSION], [
            /(windows) nt 6\.2; (arm)/i,                                        // Windows RT
            /(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i,            // Windows Phone
            /(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i
            ], [NAME, [VERSION, strMapper, windowsVersionMap]], [
            /(win(?=3|9|n)|win 9x )([nt\d\.]+)/i
            ], [[NAME, 'Windows'], [VERSION, strMapper, windowsVersionMap]], [

            // iOS/macOS
            /ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,              // iOS
            /cfnetwork\/.+darwin/i
            ], [[VERSION, /_/g, '.'], [NAME, 'iOS']], [
            /(mac os x) ?([\w\. ]*)/i,
            /(macintosh|mac_powerpc\b)(?!.+haiku)/i                             // Mac OS
            ], [[NAME, 'Mac OS'], [VERSION, /_/g, '.']], [

            // Mobile OSes
            /droid ([\w\.]+)\b.+(android[- ]x86)/i                              // Android-x86
            ], [VERSION, NAME], [                                               // Android/WebOS/QNX/Bada/RIM/Maemo/MeeGo/Sailfish OS
            /(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,
            /(blackberry)\w*\/([\w\.]*)/i,                                      // Blackberry
            /(tizen|kaios)[\/ ]([\w\.]+)/i,                                     // Tizen/KaiOS
            /\((series40);/i                                                    // Series 40
            ], [NAME, VERSION], [
            /\(bb(10);/i                                                        // BlackBerry 10
            ], [VERSION, [NAME, BLACKBERRY]], [
            /(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i         // Symbian
            ], [VERSION, [NAME, 'Symbian']], [
            /mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i // Firefox OS
            ], [VERSION, [NAME, FIREFOX+' OS']], [
            /web0s;.+rt(tv)/i,
            /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i                              // WebOS
            ], [VERSION, [NAME, 'webOS']], [

            // Google Chromecast
            /crkey\/([\d\.]+)/i                                                 // Google Chromecast
            ], [VERSION, [NAME, CHROME+'cast']], [
            /(cros) [\w]+ ([\w\.]+\w)/i                                         // Chromium OS
            ], [[NAME, 'Chromium OS'], VERSION],[

            // Console
            /(nintendo|playstation) ([wids345portablevuch]+)/i,                 // Nintendo/Playstation
            /(xbox); +xbox ([^\);]+)/i,                                         // Microsoft Xbox (360, One, X, S, Series X, Series S)

            // Other
            /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,                            // Joli/Palm
            /(mint)[\/\(\) ]?(\w*)/i,                                           // Mint
            /(mageia|vectorlinux)[; ]/i,                                        // Mageia/VectorLinux
            /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,
                                                                                // Ubuntu/Debian/SUSE/Gentoo/Arch/Slackware/Fedora/Mandriva/CentOS/PCLinuxOS/RedHat/Zenwalk/Linpus/Raspbian/Plan9/Minix/RISCOS/Contiki/Deepin/Manjaro/elementary/Sabayon/Linspire
            /(hurd|linux) ?([\w\.]*)/i,                                         // Hurd/Linux
            /(gnu) ?([\w\.]*)/i,                                                // GNU
            /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, // FreeBSD/NetBSD/OpenBSD/PC-BSD/GhostBSD/DragonFly
            /(haiku) (\w+)/i                                                    // Haiku
            ], [NAME, VERSION], [
            /(sunos) ?([\w\.\d]*)/i                                             // Solaris
            ], [[NAME, 'Solaris'], VERSION], [
            /((?:open)?solaris)[-\/ ]?([\w\.]*)/i,                              // Solaris
            /(aix) ((\d)(?=\.|\)| )[\w\.])*/i,                                  // AIX
            /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux)/i,            // BeOS/OS2/AmigaOS/MorphOS/OpenVMS/Fuchsia/HP-UX
            /(unix) ?([\w\.]*)/i                                                // UNIX
            ], [NAME, VERSION]
        ]
    };

    /////////////////
    // Constructor
    ////////////////

    var UAParser = function (ua, extensions) {

        if (typeof ua === OBJ_TYPE) {
            extensions = ua;
            ua = undefined;
        }

        if (!(this instanceof UAParser)) {
            return new UAParser(ua, extensions).getResult();
        }

        var _ua = ua || ((typeof window !== UNDEF_TYPE && window.navigator && window.navigator.userAgent) ? window.navigator.userAgent : EMPTY);
        var _rgxmap = extensions ? extend(regexes, extensions) : regexes;

        this.getBrowser = function () {
            var _browser = {};
            _browser[NAME] = undefined;
            _browser[VERSION] = undefined;
            rgxMapper.call(_browser, _ua, _rgxmap.browser);
            _browser.major = majorize(_browser.version);
            return _browser;
        };
        this.getCPU = function () {
            var _cpu = {};
            _cpu[ARCHITECTURE] = undefined;
            rgxMapper.call(_cpu, _ua, _rgxmap.cpu);
            return _cpu;
        };
        this.getDevice = function () {
            var _device = {};
            _device[VENDOR] = undefined;
            _device[MODEL] = undefined;
            _device[TYPE] = undefined;
            rgxMapper.call(_device, _ua, _rgxmap.device);
            return _device;
        };
        this.getEngine = function () {
            var _engine = {};
            _engine[NAME] = undefined;
            _engine[VERSION] = undefined;
            rgxMapper.call(_engine, _ua, _rgxmap.engine);
            return _engine;
        };
        this.getOS = function () {
            var _os = {};
            _os[NAME] = undefined;
            _os[VERSION] = undefined;
            rgxMapper.call(_os, _ua, _rgxmap.os);
            return _os;
        };
        this.getResult = function () {
            return {
                ua      : this.getUA(),
                browser : this.getBrowser(),
                engine  : this.getEngine(),
                os      : this.getOS(),
                device  : this.getDevice(),
                cpu     : this.getCPU()
            };
        };
        this.getUA = function () {
            return _ua;
        };
        this.setUA = function (ua) {
            _ua = (typeof ua === STR_TYPE && ua.length > UA_MAX_LENGTH) ? trim(ua, UA_MAX_LENGTH) : ua;
            return this;
        };
        this.setUA(_ua);
        return this;
    };

    UAParser.VERSION = LIBVERSION;
    UAParser.BROWSER =  enumerize([NAME, VERSION, MAJOR]);
    UAParser.CPU = enumerize([ARCHITECTURE]);
    UAParser.DEVICE = enumerize([MODEL, VENDOR, TYPE, CONSOLE, MOBILE, SMARTTV, TABLET, WEARABLE, EMBEDDED]);
    UAParser.ENGINE = UAParser.OS = enumerize([NAME, VERSION]);

    ///////////
    // Export
    //////////

    // check js environment
    if (typeof(exports) !== UNDEF_TYPE) {
        // nodejs env
        if ("object" !== UNDEF_TYPE && module.exports) {
            exports = module.exports = UAParser;
        }
        exports.UAParser = UAParser;
    } else {
        // requirejs env (optional)
        if ("function" === FUNC_TYPE && __webpack_require__.amdO) {
            !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
                return UAParser;
            }).call(exports, __webpack_require__, exports, module),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
        } else if (typeof window !== UNDEF_TYPE) {
            // browser env
            window.UAParser = UAParser;
        }
    }

    // jQuery/Zepto specific (optional)
    // Note:
    //   In AMD env the global scope should be kept clean, but jQuery is an exception.
    //   jQuery always exports to global scope, unless jQuery.noConflict(true) is used,
    //   and we should catch that.
    var $ = typeof window !== UNDEF_TYPE && (window.jQuery || window.Zepto);
    if ($ && !$.ua) {
        var parser = new UAParser();
        $.ua = parser.getResult();
        $.ua.get = function () {
            return parser.getUA();
        };
        $.ua.set = function (ua) {
            parser.setUA(ua);
            var result = parser.getResult();
            for (var prop in result) {
                $.ua[prop] = result[prop];
            }
        };
    }

})(typeof window === 'object' ? window : this);


/***/ }),

/***/ 4998:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(5745);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to Shadow Root
var add = (__webpack_require__(2339)/* ["default"] */ .Z)
module.exports.__inject__ = function (shadowRoot) {
  add("0c6e3b0f", content, shadowRoot)
};

/***/ }),

/***/ 4957:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(3869);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to Shadow Root
var add = (__webpack_require__(2339)/* ["default"] */ .Z)
module.exports.__inject__ = function (shadowRoot) {
  add("68a2a989", content, shadowRoot)
};

/***/ }),

/***/ 8684:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(8313);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to Shadow Root
var add = (__webpack_require__(2339)/* ["default"] */ .Z)
module.exports.__inject__ = function (shadowRoot) {
  add("2da0652d", content, shadowRoot)
};

/***/ }),

/***/ 7386:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(555);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to Shadow Root
var add = (__webpack_require__(2339)/* ["default"] */ .Z)
module.exports.__inject__ = function (shadowRoot) {
  add("bcdabe32", content, shadowRoot)
};

/***/ }),

/***/ 9525:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(898);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to Shadow Root
var add = (__webpack_require__(2339)/* ["default"] */ .Z)
module.exports.__inject__ = function (shadowRoot) {
  add("3b5203bb", content, shadowRoot)
};

/***/ }),

/***/ 2339:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ addStylesToShadowDOM; }
});

;// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/listToStyles.js
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}

;// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/addStylesShadow.js


function addStylesToShadowDOM (parentId, list, shadowRoot) {
  var styles = listToStyles(parentId, list)
  addStyles(styles, shadowRoot)
}

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

function addStyles (styles /* Array<StyleObject> */, shadowRoot) {
  const injectedStyles =
    shadowRoot._injectedStyles ||
    (shadowRoot._injectedStyles = {})
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var style = injectedStyles[item.id]
    if (!style) {
      for (var j = 0; j < item.parts.length; j++) {
        addStyle(item.parts[j], shadowRoot)
      }
      injectedStyles[item.id] = true
    }
  }
}

function createStyleElement (shadowRoot) {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  shadowRoot.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */, shadowRoot) {
  var styleElement = createStyleElement(shadowRoot)
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

/***/ 4654:
/***/ (function() {

/* (ignored) */

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/amd options */
/******/ 	!function() {
/******/ 		__webpack_require__.amdO = {};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		__webpack_require__.p = "";
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";

;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
/* eslint-disable no-var */
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (({"NODE_ENV":"production","BASE_URL":"/themes/dream/source/lib/halo-comment@1.1.7/"}).NEED_CURRENTSCRIPT_POLYFILL) {
    var getCurrentScript = __webpack_require__(7679)
    currentScript = getCurrentScript()

    // for backward compatibility, because previously we directly included the polyfill
    if (!('currentScript' in document)) {
      Object.defineProperty(document, 'currentScript', { get: getCurrentScript })
    }
  }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

;// CONCATENATED MODULE: external "Vue"
var external_Vue_namespaceObject = Vue;
var external_Vue_default = /*#__PURE__*/__webpack_require__.n(external_Vue_namespaceObject);
;// CONCATENATED MODULE: ./node_modules/@vue/web-component-wrapper/dist/vue-wc-wrapper.js
const camelizeRE = /-(\w)/g;
const camelize = str => {
  return str.replace(camelizeRE, (_, c) => c ? c.toUpperCase() : '')
};

const hyphenateRE = /\B([A-Z])/g;
const hyphenate = str => {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
};

function getInitialProps (propsList) {
  const res = {};
  propsList.forEach(key => {
    res[key] = undefined;
  });
  return res
}

function injectHook (options, key, hook) {
  options[key] = [].concat(options[key] || []);
  options[key].unshift(hook);
}

function callHooks (vm, hook) {
  if (vm) {
    const hooks = vm.$options[hook] || [];
    hooks.forEach(hook => {
      hook.call(vm);
    });
  }
}

function createCustomEvent (name, args) {
  return new CustomEvent(name, {
    bubbles: false,
    cancelable: false,
    detail: args
  })
}

const isBoolean = val => /function Boolean/.test(String(val));
const isNumber = val => /function Number/.test(String(val));

function convertAttributeValue (value, name, { type } = {}) {
  if (isBoolean(type)) {
    if (value === 'true' || value === 'false') {
      return value === 'true'
    }
    if (value === '' || value === name || value != null) {
      return true
    }
    return value
  } else if (isNumber(type)) {
    const parsed = parseFloat(value, 10);
    return isNaN(parsed) ? value : parsed
  } else {
    return value
  }
}

function toVNodes (h, children) {
  const res = [];
  for (let i = 0, l = children.length; i < l; i++) {
    res.push(toVNode(h, children[i]));
  }
  return res
}

function toVNode (h, node) {
  if (node.nodeType === 3) {
    return node.data.trim() ? node.data : null
  } else if (node.nodeType === 1) {
    const data = {
      attrs: getAttributes(node),
      domProps: {
        innerHTML: node.innerHTML
      }
    };
    if (data.attrs.slot) {
      data.slot = data.attrs.slot;
      delete data.attrs.slot;
    }
    return h(node.tagName, data)
  } else {
    return null
  }
}

function getAttributes (node) {
  const res = {};
  for (let i = 0, l = node.attributes.length; i < l; i++) {
    const attr = node.attributes[i];
    res[attr.nodeName] = attr.nodeValue;
  }
  return res
}

function wrap (Vue, Component) {
  const isAsync = typeof Component === 'function' && !Component.cid;
  let isInitialized = false;
  let hyphenatedPropsList;
  let camelizedPropsList;
  let camelizedPropsMap;

  function initialize (Component) {
    if (isInitialized) return

    const options = typeof Component === 'function'
      ? Component.options
      : Component;

    // extract props info
    const propsList = Array.isArray(options.props)
      ? options.props
      : Object.keys(options.props || {});
    hyphenatedPropsList = propsList.map(hyphenate);
    camelizedPropsList = propsList.map(camelize);
    const originalPropsAsObject = Array.isArray(options.props) ? {} : options.props || {};
    camelizedPropsMap = camelizedPropsList.reduce((map, key, i) => {
      map[key] = originalPropsAsObject[propsList[i]];
      return map
    }, {});

    // proxy $emit to native DOM events
    injectHook(options, 'beforeCreate', function () {
      const emit = this.$emit;
      this.$emit = (name, ...args) => {
        this.$root.$options.customElement.dispatchEvent(createCustomEvent(name, args));
        return emit.call(this, name, ...args)
      };
    });

    injectHook(options, 'created', function () {
      // sync default props values to wrapper on created
      camelizedPropsList.forEach(key => {
        this.$root.props[key] = this[key];
      });
    });

    // proxy props as Element properties
    camelizedPropsList.forEach(key => {
      Object.defineProperty(CustomElement.prototype, key, {
        get () {
          return this._wrapper.props[key]
        },
        set (newVal) {
          this._wrapper.props[key] = newVal;
        },
        enumerable: false,
        configurable: true
      });
    });

    isInitialized = true;
  }

  function syncAttribute (el, key) {
    const camelized = camelize(key);
    const value = el.hasAttribute(key) ? el.getAttribute(key) : undefined;
    el._wrapper.props[camelized] = convertAttributeValue(
      value,
      key,
      camelizedPropsMap[camelized]
    );
  }

  class CustomElement extends HTMLElement {
    constructor () {
      const self = super();
      self.attachShadow({ mode: 'open' });

      const wrapper = self._wrapper = new Vue({
        name: 'shadow-root',
        customElement: self,
        shadowRoot: self.shadowRoot,
        data () {
          return {
            props: {},
            slotChildren: []
          }
        },
        render (h) {
          return h(Component, {
            ref: 'inner',
            props: this.props
          }, this.slotChildren)
        }
      });

      // Use MutationObserver to react to future attribute & slot content change
      const observer = new MutationObserver(mutations => {
        let hasChildrenChange = false;
        for (let i = 0; i < mutations.length; i++) {
          const m = mutations[i];
          if (isInitialized && m.type === 'attributes' && m.target === self) {
            syncAttribute(self, m.attributeName);
          } else {
            hasChildrenChange = true;
          }
        }
        if (hasChildrenChange) {
          wrapper.slotChildren = Object.freeze(toVNodes(
            wrapper.$createElement,
            self.childNodes
          ));
        }
      });
      observer.observe(self, {
        childList: true,
        subtree: true,
        characterData: true,
        attributes: true
      });
    }

    get vueComponent () {
      return this._wrapper.$refs.inner
    }

    connectedCallback () {
      const wrapper = this._wrapper;
      if (!wrapper._isMounted) {
        // initialize attributes
        const syncInitialAttributes = () => {
          wrapper.props = getInitialProps(camelizedPropsList);
          hyphenatedPropsList.forEach(key => {
            syncAttribute(this, key);
          });
        };

        if (isInitialized) {
          syncInitialAttributes();
        } else {
          // async & unresolved
          Component().then(resolved => {
            if (resolved.__esModule || resolved[Symbol.toStringTag] === 'Module') {
              resolved = resolved.default;
            }
            initialize(resolved);
            syncInitialAttributes();
          });
        }
        // initialize children
        wrapper.slotChildren = Object.freeze(toVNodes(
          wrapper.$createElement,
          this.childNodes
        ));
        wrapper.$mount();
        this.shadowRoot.appendChild(wrapper.$el);
      } else {
        callHooks(this.vueComponent, 'activated');
      }
    }

    disconnectedCallback () {
      callHooks(this.vueComponent, 'deactivated');
    }
  }

  if (!isAsync) {
    initialize(Component);
  }

  return CustomElement
}

/* harmony default export */ var vue_wc_wrapper = (wrap);

// EXTERNAL MODULE: ./node_modules/css-loader/dist/runtime/api.js
var api = __webpack_require__(3645);
;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/Comment.vue?vue&type=template&id=49a04c44&shadow
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.options !== undefined)?_c('div',{staticClass:"halo-comment",class:_vm.mergedConfigs.night ? 'night' : '',attrs:{"id":"halo-comment","stop-bullet-screen":_vm.stopBulletScreen}},[_c('keep-alive',[_c('comment-editor',{attrs:{"configs":_vm.mergedConfigs,"options":_vm.options,"target":_vm.target,"targetId":_vm.id}})],1),(!_vm.mergedConfigs.autoLoad && !_vm.list.loaded)?_c('div',{staticClass:"load-comment"},[_c('button',{staticClass:"btn btn-primary",attrs:{"type":"button"},on:{"click":_vm.handleGetComments}},[_vm._v("加载评论")])]):_vm._e(),(_vm.list.loaded)?_c('div',{staticClass:"comment-action"},[_c('h3',{staticClass:"comment-title"},[_vm._v(_vm._s(_vm.list.total)+" 条评论")]),_c('div',{staticClass:"comment-operation"},[(_vm.mergedConfigs.enableBulletScreen)?_c('span',{staticClass:"comment-bullet-screen",class:_vm.stopBulletScreen ? '' : 'operation-open',on:{"click":function($event){_vm.stopBulletScreen = !_vm.stopBulletScreen}}},[_vm._v("弹")]):_vm._e(),_c('svg',{staticClass:"comment-refresh",attrs:{"viewBox":"0 0 1024 1024","xmlns":"http://www.w3.org/2000/svg"},on:{"click":function($event){return _vm.handlePaginationChange(0)}}},[_c('path',{attrs:{"d":"M55.935033 264.48948c0 0 85.897017-132.548409 221.81443-203.673173 135.916406-71.121743 303.368504-50.646859 413.187968 18.319527 109.819465 68.970415 146.791894 127.160016 146.791894 127.160016l94.59499-53.879895c0 0 19.576483-9.697092 19.576483 12.932142l0 338.379961c0 0 0 30.17399-22.837719 19.395191-19.210878-9.062571-226.959086-127.198289-292.424528-164.466828-35.950145-16.035251-4.365101-29.062068-4.365101-29.062068l91.284402-52.173738c0 0-52.068992-65.209619-128.278989-99.744682-81.576231-42.501826-157.948384-47.541735-251.497925-12.224097-61.002644 23.025054-132.823368 81.988166-184.553949 169.082716L55.935033 264.48948 55.935033 264.48948 55.935033 264.48948zM904.056909 711.697844c0 0-85.897017 132.550423-221.816444 203.671159-135.917413 71.12275-303.366489 50.651895-413.186961-18.315498-109.825508-68.972429-146.790886-127.165052-146.790886-127.165052L27.662591 823.768348c0 0-19.572454 9.703135-19.572454-12.932142L8.090137 472.459267c0 0 0-30.170968 22.831676-19.397205 19.211885 9.067607 226.965129 127.198289 292.430571 164.470856 35.950145 16.035251 4.366109 29.058039 4.366109 29.058039l-91.285409 52.175753c0 0 52.071006 65.206598 128.279996 99.744682 81.57321 42.498804 157.942341 47.540728 251.496918 12.222082 60.998616-23.026061 132.820346-81.983131 184.546898-169.082716L904.056909 711.697844 904.056909 711.697844 904.056909 711.697844zM904.056909 711.697844"}})])])]):_vm._e(),_c('comment-loading',{directives:[{name:"show",rawName:"v-show",value:(_vm.list.loading),expression:"list.loading"}],attrs:{"configs":_vm.mergedConfigs}}),(_vm.list.data.length >= 1)?_c('ul',{staticClass:"comment-nodes"},[_vm._l((_vm.list.data),function(comment){return [_c('CommentNode',{key:comment.id,attrs:{"comment":comment,"replyNum":_vm.mergedConfigs.unfoldReplyNum,"configs":_vm.mergedConfigs,"options":_vm.options,"target":_vm.target,"targetId":_vm.id}})]})],2):(_vm.list.loaded && !_vm.list.loading)?_c('div',{staticClass:"comment-empty"},[_vm._v("暂无评论")]):_vm._e(),(_vm.list.pages > 1)?_c('pagination',{attrs:{"page":_vm.list.params.page,"size":_vm.list.size,"total":_vm.list.total},on:{"change":_vm.handlePaginationChange}}):_vm._e(),(_vm.mergedConfigs.enableBulletScreen)?_c('bullet-screen',{attrs:{"target":_vm.target,"id":_vm.id,"configs":_vm.mergedConfigs,"options":_vm.options,"stop-bullet-screen":_vm.stopBulletScreen},on:{"update:stopBulletScreen":function($event){_vm.stopBulletScreen=$event},"update:stop-bullet-screen":function($event){_vm.stopBulletScreen=$event}}}):_vm._e()],1):_vm._e()}
var staticRenderFns = []


;// CONCATENATED MODULE: ./node_modules/marked/lib/marked.esm.js
/**
 * marked - a markdown parser
 * Copyright (c) 2011-2022, Christopher Jeffrey. (MIT Licensed)
 * https://github.com/markedjs/marked
 */

/**
 * DO NOT EDIT THIS FILE
 * The code in this file is generated from files in ./src/
 */

function getDefaults() {
  return {
    baseUrl: null,
    breaks: false,
    extensions: null,
    gfm: true,
    headerIds: true,
    headerPrefix: '',
    highlight: null,
    langPrefix: 'language-',
    mangle: true,
    pedantic: false,
    renderer: null,
    sanitize: false,
    sanitizer: null,
    silent: false,
    smartLists: false,
    smartypants: false,
    tokenizer: null,
    walkTokens: null,
    xhtml: false
  };
}

let defaults = getDefaults();

function changeDefaults(newDefaults) {
  defaults = newDefaults;
}

/**
 * Helpers
 */
const escapeTest = /[&<>"']/;
const escapeReplace = /[&<>"']/g;
const escapeTestNoEncode = /[<>"']|&(?!#?\w+;)/;
const escapeReplaceNoEncode = /[<>"']|&(?!#?\w+;)/g;
const escapeReplacements = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;'
};
const getEscapeReplacement = (ch) => escapeReplacements[ch];
function marked_esm_escape(html, encode) {
  if (encode) {
    if (escapeTest.test(html)) {
      return html.replace(escapeReplace, getEscapeReplacement);
    }
  } else {
    if (escapeTestNoEncode.test(html)) {
      return html.replace(escapeReplaceNoEncode, getEscapeReplacement);
    }
  }

  return html;
}

const unescapeTest = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;

/**
 * @param {string} html
 */
function marked_esm_unescape(html) {
  // explicitly match decimal, hex, and named HTML entities
  return html.replace(unescapeTest, (_, n) => {
    n = n.toLowerCase();
    if (n === 'colon') return ':';
    if (n.charAt(0) === '#') {
      return n.charAt(1) === 'x'
        ? String.fromCharCode(parseInt(n.substring(2), 16))
        : String.fromCharCode(+n.substring(1));
    }
    return '';
  });
}

const caret = /(^|[^\[])\^/g;

/**
 * @param {string | RegExp} regex
 * @param {string} opt
 */
function edit(regex, opt) {
  regex = typeof regex === 'string' ? regex : regex.source;
  opt = opt || '';
  const obj = {
    replace: (name, val) => {
      val = val.source || val;
      val = val.replace(caret, '$1');
      regex = regex.replace(name, val);
      return obj;
    },
    getRegex: () => {
      return new RegExp(regex, opt);
    }
  };
  return obj;
}

const nonWordAndColonTest = /[^\w:]/g;
const originIndependentUrl = /^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;

/**
 * @param {boolean} sanitize
 * @param {string} base
 * @param {string} href
 */
function cleanUrl(sanitize, base, href) {
  if (sanitize) {
    let prot;
    try {
      prot = decodeURIComponent(marked_esm_unescape(href))
        .replace(nonWordAndColonTest, '')
        .toLowerCase();
    } catch (e) {
      return null;
    }
    if (prot.indexOf('javascript:') === 0 || prot.indexOf('vbscript:') === 0 || prot.indexOf('data:') === 0) {
      return null;
    }
  }
  if (base && !originIndependentUrl.test(href)) {
    href = resolveUrl(base, href);
  }
  try {
    href = encodeURI(href).replace(/%25/g, '%');
  } catch (e) {
    return null;
  }
  return href;
}

const baseUrls = {};
const justDomain = /^[^:]+:\/*[^/]*$/;
const protocol = /^([^:]+:)[\s\S]*$/;
const domain = /^([^:]+:\/*[^/]*)[\s\S]*$/;

/**
 * @param {string} base
 * @param {string} href
 */
function resolveUrl(base, href) {
  if (!baseUrls[' ' + base]) {
    // we can ignore everything in base after the last slash of its path component,
    // but we might need to add _that_
    // https://tools.ietf.org/html/rfc3986#section-3
    if (justDomain.test(base)) {
      baseUrls[' ' + base] = base + '/';
    } else {
      baseUrls[' ' + base] = rtrim(base, '/', true);
    }
  }
  base = baseUrls[' ' + base];
  const relativeBase = base.indexOf(':') === -1;

  if (href.substring(0, 2) === '//') {
    if (relativeBase) {
      return href;
    }
    return base.replace(protocol, '$1') + href;
  } else if (href.charAt(0) === '/') {
    if (relativeBase) {
      return href;
    }
    return base.replace(domain, '$1') + href;
  } else {
    return base + href;
  }
}

const noopTest = { exec: function noopTest() {} };

function merge(obj) {
  let i = 1,
    target,
    key;

  for (; i < arguments.length; i++) {
    target = arguments[i];
    for (key in target) {
      if (Object.prototype.hasOwnProperty.call(target, key)) {
        obj[key] = target[key];
      }
    }
  }

  return obj;
}

function splitCells(tableRow, count) {
  // ensure that every cell-delimiting pipe has a space
  // before it to distinguish it from an escaped pipe
  const row = tableRow.replace(/\|/g, (match, offset, str) => {
      let escaped = false,
        curr = offset;
      while (--curr >= 0 && str[curr] === '\\') escaped = !escaped;
      if (escaped) {
        // odd number of slashes means | is escaped
        // so we leave it alone
        return '|';
      } else {
        // add space before unescaped |
        return ' |';
      }
    }),
    cells = row.split(/ \|/);
  let i = 0;

  // First/last cell in a row cannot be empty if it has no leading/trailing pipe
  if (!cells[0].trim()) { cells.shift(); }
  if (cells.length > 0 && !cells[cells.length - 1].trim()) { cells.pop(); }

  if (cells.length > count) {
    cells.splice(count);
  } else {
    while (cells.length < count) cells.push('');
  }

  for (; i < cells.length; i++) {
    // leading or trailing whitespace is ignored per the gfm spec
    cells[i] = cells[i].trim().replace(/\\\|/g, '|');
  }
  return cells;
}

/**
 * Remove trailing 'c's. Equivalent to str.replace(/c*$/, '').
 * /c*$/ is vulnerable to REDOS.
 *
 * @param {string} str
 * @param {string} c
 * @param {boolean} invert Remove suffix of non-c chars instead. Default falsey.
 */
function rtrim(str, c, invert) {
  const l = str.length;
  if (l === 0) {
    return '';
  }

  // Length of suffix matching the invert condition.
  let suffLen = 0;

  // Step left until we fail to match the invert condition.
  while (suffLen < l) {
    const currChar = str.charAt(l - suffLen - 1);
    if (currChar === c && !invert) {
      suffLen++;
    } else if (currChar !== c && invert) {
      suffLen++;
    } else {
      break;
    }
  }

  return str.slice(0, l - suffLen);
}

function findClosingBracket(str, b) {
  if (str.indexOf(b[1]) === -1) {
    return -1;
  }
  const l = str.length;
  let level = 0,
    i = 0;
  for (; i < l; i++) {
    if (str[i] === '\\') {
      i++;
    } else if (str[i] === b[0]) {
      level++;
    } else if (str[i] === b[1]) {
      level--;
      if (level < 0) {
        return i;
      }
    }
  }
  return -1;
}

function checkSanitizeDeprecation(opt) {
  if (opt && opt.sanitize && !opt.silent) {
    console.warn('marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options');
  }
}

// copied from https://stackoverflow.com/a/5450113/806777
/**
 * @param {string} pattern
 * @param {number} count
 */
function repeatString(pattern, count) {
  if (count < 1) {
    return '';
  }
  let result = '';
  while (count > 1) {
    if (count & 1) {
      result += pattern;
    }
    count >>= 1;
    pattern += pattern;
  }
  return result + pattern;
}

function outputLink(cap, link, raw, lexer) {
  const href = link.href;
  const title = link.title ? marked_esm_escape(link.title) : null;
  const text = cap[1].replace(/\\([\[\]])/g, '$1');

  if (cap[0].charAt(0) !== '!') {
    lexer.state.inLink = true;
    const token = {
      type: 'link',
      raw,
      href,
      title,
      text,
      tokens: lexer.inlineTokens(text, [])
    };
    lexer.state.inLink = false;
    return token;
  }
  return {
    type: 'image',
    raw,
    href,
    title,
    text: marked_esm_escape(text)
  };
}

function indentCodeCompensation(raw, text) {
  const matchIndentToCode = raw.match(/^(\s+)(?:```)/);

  if (matchIndentToCode === null) {
    return text;
  }

  const indentToCode = matchIndentToCode[1];

  return text
    .split('\n')
    .map(node => {
      const matchIndentInNode = node.match(/^\s+/);
      if (matchIndentInNode === null) {
        return node;
      }

      const [indentInNode] = matchIndentInNode;

      if (indentInNode.length >= indentToCode.length) {
        return node.slice(indentToCode.length);
      }

      return node;
    })
    .join('\n');
}

/**
 * Tokenizer
 */
class Tokenizer {
  constructor(options) {
    this.options = options || defaults;
  }

  space(src) {
    const cap = this.rules.block.newline.exec(src);
    if (cap && cap[0].length > 0) {
      return {
        type: 'space',
        raw: cap[0]
      };
    }
  }

  code(src) {
    const cap = this.rules.block.code.exec(src);
    if (cap) {
      const text = cap[0].replace(/^ {1,4}/gm, '');
      return {
        type: 'code',
        raw: cap[0],
        codeBlockStyle: 'indented',
        text: !this.options.pedantic
          ? rtrim(text, '\n')
          : text
      };
    }
  }

  fences(src) {
    const cap = this.rules.block.fences.exec(src);
    if (cap) {
      const raw = cap[0];
      const text = indentCodeCompensation(raw, cap[3] || '');

      return {
        type: 'code',
        raw,
        lang: cap[2] ? cap[2].trim() : cap[2],
        text
      };
    }
  }

  heading(src) {
    const cap = this.rules.block.heading.exec(src);
    if (cap) {
      let text = cap[2].trim();

      // remove trailing #s
      if (/#$/.test(text)) {
        const trimmed = rtrim(text, '#');
        if (this.options.pedantic) {
          text = trimmed.trim();
        } else if (!trimmed || / $/.test(trimmed)) {
          // CommonMark requires space before trailing #s
          text = trimmed.trim();
        }
      }

      const token = {
        type: 'heading',
        raw: cap[0],
        depth: cap[1].length,
        text,
        tokens: []
      };
      this.lexer.inline(token.text, token.tokens);
      return token;
    }
  }

  hr(src) {
    const cap = this.rules.block.hr.exec(src);
    if (cap) {
      return {
        type: 'hr',
        raw: cap[0]
      };
    }
  }

  blockquote(src) {
    const cap = this.rules.block.blockquote.exec(src);
    if (cap) {
      const text = cap[0].replace(/^ *>[ \t]?/gm, '');

      return {
        type: 'blockquote',
        raw: cap[0],
        tokens: this.lexer.blockTokens(text, []),
        text
      };
    }
  }

  list(src) {
    let cap = this.rules.block.list.exec(src);
    if (cap) {
      let raw, istask, ischecked, indent, i, blankLine, endsWithBlankLine,
        line, nextLine, rawLine, itemContents, endEarly;

      let bull = cap[1].trim();
      const isordered = bull.length > 1;

      const list = {
        type: 'list',
        raw: '',
        ordered: isordered,
        start: isordered ? +bull.slice(0, -1) : '',
        loose: false,
        items: []
      };

      bull = isordered ? `\\d{1,9}\\${bull.slice(-1)}` : `\\${bull}`;

      if (this.options.pedantic) {
        bull = isordered ? bull : '[*+-]';
      }

      // Get next list item
      const itemRegex = new RegExp(`^( {0,3}${bull})((?:[\t ][^\\n]*)?(?:\\n|$))`);

      // Check if current bullet point can start a new List Item
      while (src) {
        endEarly = false;
        if (!(cap = itemRegex.exec(src))) {
          break;
        }

        if (this.rules.block.hr.test(src)) { // End list if bullet was actually HR (possibly move into itemRegex?)
          break;
        }

        raw = cap[0];
        src = src.substring(raw.length);

        line = cap[2].split('\n', 1)[0];
        nextLine = src.split('\n', 1)[0];

        if (this.options.pedantic) {
          indent = 2;
          itemContents = line.trimLeft();
        } else {
          indent = cap[2].search(/[^ ]/); // Find first non-space char
          indent = indent > 4 ? 1 : indent; // Treat indented code blocks (> 4 spaces) as having only 1 indent
          itemContents = line.slice(indent);
          indent += cap[1].length;
        }

        blankLine = false;

        if (!line && /^ *$/.test(nextLine)) { // Items begin with at most one blank line
          raw += nextLine + '\n';
          src = src.substring(nextLine.length + 1);
          endEarly = true;
        }

        if (!endEarly) {
          const nextBulletRegex = new RegExp(`^ {0,${Math.min(3, indent - 1)}}(?:[*+-]|\\d{1,9}[.)])((?: [^\\n]*)?(?:\\n|$))`);
          const hrRegex = new RegExp(`^ {0,${Math.min(3, indent - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`);

          // Check if following lines should be included in List Item
          while (src) {
            rawLine = src.split('\n', 1)[0];
            line = rawLine;

            // Re-align to follow commonmark nesting rules
            if (this.options.pedantic) {
              line = line.replace(/^ {1,4}(?=( {4})*[^ ])/g, '  ');
            }

            // End list item if found start of new bullet
            if (nextBulletRegex.test(line)) {
              break;
            }

            // Horizontal rule found
            if (hrRegex.test(src)) {
              break;
            }

            if (line.search(/[^ ]/) >= indent || !line.trim()) { // Dedent if possible
              itemContents += '\n' + line.slice(indent);
            } else if (!blankLine) { // Until blank line, item doesn't need indentation
              itemContents += '\n' + line;
            } else { // Otherwise, improper indentation ends this item
              break;
            }

            if (!blankLine && !line.trim()) { // Check if current line is blank
              blankLine = true;
            }

            raw += rawLine + '\n';
            src = src.substring(rawLine.length + 1);
          }
        }

        if (!list.loose) {
          // If the previous item ended with a blank line, the list is loose
          if (endsWithBlankLine) {
            list.loose = true;
          } else if (/\n *\n *$/.test(raw)) {
            endsWithBlankLine = true;
          }
        }

        // Check for task list items
        if (this.options.gfm) {
          istask = /^\[[ xX]\] /.exec(itemContents);
          if (istask) {
            ischecked = istask[0] !== '[ ] ';
            itemContents = itemContents.replace(/^\[[ xX]\] +/, '');
          }
        }

        list.items.push({
          type: 'list_item',
          raw,
          task: !!istask,
          checked: ischecked,
          loose: false,
          text: itemContents
        });

        list.raw += raw;
      }

      // Do not consume newlines at end of final item. Alternatively, make itemRegex *start* with any newlines to simplify/speed up endsWithBlankLine logic
      list.items[list.items.length - 1].raw = raw.trimRight();
      list.items[list.items.length - 1].text = itemContents.trimRight();
      list.raw = list.raw.trimRight();

      const l = list.items.length;

      // Item child tokens handled here at end because we needed to have the final item to trim it first
      for (i = 0; i < l; i++) {
        this.lexer.state.top = false;
        list.items[i].tokens = this.lexer.blockTokens(list.items[i].text, []);
        const spacers = list.items[i].tokens.filter(t => t.type === 'space');
        const hasMultipleLineBreaks = spacers.every(t => {
          const chars = t.raw.split('');
          let lineBreaks = 0;
          for (const char of chars) {
            if (char === '\n') {
              lineBreaks += 1;
            }
            if (lineBreaks > 1) {
              return true;
            }
          }

          return false;
        });

        if (!list.loose && spacers.length && hasMultipleLineBreaks) {
          // Having a single line break doesn't mean a list is loose. A single line break is terminating the last list item
          list.loose = true;
          list.items[i].loose = true;
        }
      }

      return list;
    }
  }

  html(src) {
    const cap = this.rules.block.html.exec(src);
    if (cap) {
      const token = {
        type: 'html',
        raw: cap[0],
        pre: !this.options.sanitizer
          && (cap[1] === 'pre' || cap[1] === 'script' || cap[1] === 'style'),
        text: cap[0]
      };
      if (this.options.sanitize) {
        token.type = 'paragraph';
        token.text = this.options.sanitizer ? this.options.sanitizer(cap[0]) : marked_esm_escape(cap[0]);
        token.tokens = [];
        this.lexer.inline(token.text, token.tokens);
      }
      return token;
    }
  }

  def(src) {
    const cap = this.rules.block.def.exec(src);
    if (cap) {
      if (cap[3]) cap[3] = cap[3].substring(1, cap[3].length - 1);
      const tag = cap[1].toLowerCase().replace(/\s+/g, ' ');
      return {
        type: 'def',
        tag,
        raw: cap[0],
        href: cap[2],
        title: cap[3]
      };
    }
  }

  table(src) {
    const cap = this.rules.block.table.exec(src);
    if (cap) {
      const item = {
        type: 'table',
        header: splitCells(cap[1]).map(c => { return { text: c }; }),
        align: cap[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
        rows: cap[3] && cap[3].trim() ? cap[3].replace(/\n[ \t]*$/, '').split('\n') : []
      };

      if (item.header.length === item.align.length) {
        item.raw = cap[0];

        let l = item.align.length;
        let i, j, k, row;
        for (i = 0; i < l; i++) {
          if (/^ *-+: *$/.test(item.align[i])) {
            item.align[i] = 'right';
          } else if (/^ *:-+: *$/.test(item.align[i])) {
            item.align[i] = 'center';
          } else if (/^ *:-+ *$/.test(item.align[i])) {
            item.align[i] = 'left';
          } else {
            item.align[i] = null;
          }
        }

        l = item.rows.length;
        for (i = 0; i < l; i++) {
          item.rows[i] = splitCells(item.rows[i], item.header.length).map(c => { return { text: c }; });
        }

        // parse child tokens inside headers and cells

        // header child tokens
        l = item.header.length;
        for (j = 0; j < l; j++) {
          item.header[j].tokens = [];
          this.lexer.inlineTokens(item.header[j].text, item.header[j].tokens);
        }

        // cell child tokens
        l = item.rows.length;
        for (j = 0; j < l; j++) {
          row = item.rows[j];
          for (k = 0; k < row.length; k++) {
            row[k].tokens = [];
            this.lexer.inlineTokens(row[k].text, row[k].tokens);
          }
        }

        return item;
      }
    }
  }

  lheading(src) {
    const cap = this.rules.block.lheading.exec(src);
    if (cap) {
      const token = {
        type: 'heading',
        raw: cap[0],
        depth: cap[2].charAt(0) === '=' ? 1 : 2,
        text: cap[1],
        tokens: []
      };
      this.lexer.inline(token.text, token.tokens);
      return token;
    }
  }

  paragraph(src) {
    const cap = this.rules.block.paragraph.exec(src);
    if (cap) {
      const token = {
        type: 'paragraph',
        raw: cap[0],
        text: cap[1].charAt(cap[1].length - 1) === '\n'
          ? cap[1].slice(0, -1)
          : cap[1],
        tokens: []
      };
      this.lexer.inline(token.text, token.tokens);
      return token;
    }
  }

  text(src) {
    const cap = this.rules.block.text.exec(src);
    if (cap) {
      const token = {
        type: 'text',
        raw: cap[0],
        text: cap[0],
        tokens: []
      };
      this.lexer.inline(token.text, token.tokens);
      return token;
    }
  }

  escape(src) {
    const cap = this.rules.inline.escape.exec(src);
    if (cap) {
      return {
        type: 'escape',
        raw: cap[0],
        text: marked_esm_escape(cap[1])
      };
    }
  }

  tag(src) {
    const cap = this.rules.inline.tag.exec(src);
    if (cap) {
      if (!this.lexer.state.inLink && /^<a /i.test(cap[0])) {
        this.lexer.state.inLink = true;
      } else if (this.lexer.state.inLink && /^<\/a>/i.test(cap[0])) {
        this.lexer.state.inLink = false;
      }
      if (!this.lexer.state.inRawBlock && /^<(pre|code|kbd|script)(\s|>)/i.test(cap[0])) {
        this.lexer.state.inRawBlock = true;
      } else if (this.lexer.state.inRawBlock && /^<\/(pre|code|kbd|script)(\s|>)/i.test(cap[0])) {
        this.lexer.state.inRawBlock = false;
      }

      return {
        type: this.options.sanitize
          ? 'text'
          : 'html',
        raw: cap[0],
        inLink: this.lexer.state.inLink,
        inRawBlock: this.lexer.state.inRawBlock,
        text: this.options.sanitize
          ? (this.options.sanitizer
            ? this.options.sanitizer(cap[0])
            : marked_esm_escape(cap[0]))
          : cap[0]
      };
    }
  }

  link(src) {
    const cap = this.rules.inline.link.exec(src);
    if (cap) {
      const trimmedUrl = cap[2].trim();
      if (!this.options.pedantic && /^</.test(trimmedUrl)) {
        // commonmark requires matching angle brackets
        if (!(/>$/.test(trimmedUrl))) {
          return;
        }

        // ending angle bracket cannot be escaped
        const rtrimSlash = rtrim(trimmedUrl.slice(0, -1), '\\');
        if ((trimmedUrl.length - rtrimSlash.length) % 2 === 0) {
          return;
        }
      } else {
        // find closing parenthesis
        const lastParenIndex = findClosingBracket(cap[2], '()');
        if (lastParenIndex > -1) {
          const start = cap[0].indexOf('!') === 0 ? 5 : 4;
          const linkLen = start + cap[1].length + lastParenIndex;
          cap[2] = cap[2].substring(0, lastParenIndex);
          cap[0] = cap[0].substring(0, linkLen).trim();
          cap[3] = '';
        }
      }
      let href = cap[2];
      let title = '';
      if (this.options.pedantic) {
        // split pedantic href and title
        const link = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(href);

        if (link) {
          href = link[1];
          title = link[3];
        }
      } else {
        title = cap[3] ? cap[3].slice(1, -1) : '';
      }

      href = href.trim();
      if (/^</.test(href)) {
        if (this.options.pedantic && !(/>$/.test(trimmedUrl))) {
          // pedantic allows starting angle bracket without ending angle bracket
          href = href.slice(1);
        } else {
          href = href.slice(1, -1);
        }
      }
      return outputLink(cap, {
        href: href ? href.replace(this.rules.inline._escapes, '$1') : href,
        title: title ? title.replace(this.rules.inline._escapes, '$1') : title
      }, cap[0], this.lexer);
    }
  }

  reflink(src, links) {
    let cap;
    if ((cap = this.rules.inline.reflink.exec(src))
        || (cap = this.rules.inline.nolink.exec(src))) {
      let link = (cap[2] || cap[1]).replace(/\s+/g, ' ');
      link = links[link.toLowerCase()];
      if (!link || !link.href) {
        const text = cap[0].charAt(0);
        return {
          type: 'text',
          raw: text,
          text
        };
      }
      return outputLink(cap, link, cap[0], this.lexer);
    }
  }

  emStrong(src, maskedSrc, prevChar = '') {
    let match = this.rules.inline.emStrong.lDelim.exec(src);
    if (!match) return;

    // _ can't be between two alphanumerics. \p{L}\p{N} includes non-english alphabet/numbers as well
    if (match[3] && prevChar.match(/[\p{L}\p{N}]/u)) return;

    const nextChar = match[1] || match[2] || '';

    if (!nextChar || (nextChar && (prevChar === '' || this.rules.inline.punctuation.exec(prevChar)))) {
      const lLength = match[0].length - 1;
      let rDelim, rLength, delimTotal = lLength, midDelimTotal = 0;

      const endReg = match[0][0] === '*' ? this.rules.inline.emStrong.rDelimAst : this.rules.inline.emStrong.rDelimUnd;
      endReg.lastIndex = 0;

      // Clip maskedSrc to same section of string as src (move to lexer?)
      maskedSrc = maskedSrc.slice(-1 * src.length + lLength);

      while ((match = endReg.exec(maskedSrc)) != null) {
        rDelim = match[1] || match[2] || match[3] || match[4] || match[5] || match[6];

        if (!rDelim) continue; // skip single * in __abc*abc__

        rLength = rDelim.length;

        if (match[3] || match[4]) { // found another Left Delim
          delimTotal += rLength;
          continue;
        } else if (match[5] || match[6]) { // either Left or Right Delim
          if (lLength % 3 && !((lLength + rLength) % 3)) {
            midDelimTotal += rLength;
            continue; // CommonMark Emphasis Rules 9-10
          }
        }

        delimTotal -= rLength;

        if (delimTotal > 0) continue; // Haven't found enough closing delimiters

        // Remove extra characters. *a*** -> *a*
        rLength = Math.min(rLength, rLength + delimTotal + midDelimTotal);

        // Create `em` if smallest delimiter has odd char count. *a***
        if (Math.min(lLength, rLength) % 2) {
          const text = src.slice(1, lLength + match.index + rLength);
          return {
            type: 'em',
            raw: src.slice(0, lLength + match.index + rLength + 1),
            text,
            tokens: this.lexer.inlineTokens(text, [])
          };
        }

        // Create 'strong' if smallest delimiter has even char count. **a***
        const text = src.slice(2, lLength + match.index + rLength - 1);
        return {
          type: 'strong',
          raw: src.slice(0, lLength + match.index + rLength + 1),
          text,
          tokens: this.lexer.inlineTokens(text, [])
        };
      }
    }
  }

  codespan(src) {
    const cap = this.rules.inline.code.exec(src);
    if (cap) {
      let text = cap[2].replace(/\n/g, ' ');
      const hasNonSpaceChars = /[^ ]/.test(text);
      const hasSpaceCharsOnBothEnds = /^ /.test(text) && / $/.test(text);
      if (hasNonSpaceChars && hasSpaceCharsOnBothEnds) {
        text = text.substring(1, text.length - 1);
      }
      text = marked_esm_escape(text, true);
      return {
        type: 'codespan',
        raw: cap[0],
        text
      };
    }
  }

  br(src) {
    const cap = this.rules.inline.br.exec(src);
    if (cap) {
      return {
        type: 'br',
        raw: cap[0]
      };
    }
  }

  del(src) {
    const cap = this.rules.inline.del.exec(src);
    if (cap) {
      return {
        type: 'del',
        raw: cap[0],
        text: cap[2],
        tokens: this.lexer.inlineTokens(cap[2], [])
      };
    }
  }

  autolink(src, mangle) {
    const cap = this.rules.inline.autolink.exec(src);
    if (cap) {
      let text, href;
      if (cap[2] === '@') {
        text = marked_esm_escape(this.options.mangle ? mangle(cap[1]) : cap[1]);
        href = 'mailto:' + text;
      } else {
        text = marked_esm_escape(cap[1]);
        href = text;
      }

      return {
        type: 'link',
        raw: cap[0],
        text,
        href,
        tokens: [
          {
            type: 'text',
            raw: text,
            text
          }
        ]
      };
    }
  }

  url(src, mangle) {
    let cap;
    if (cap = this.rules.inline.url.exec(src)) {
      let text, href;
      if (cap[2] === '@') {
        text = marked_esm_escape(this.options.mangle ? mangle(cap[0]) : cap[0]);
        href = 'mailto:' + text;
      } else {
        // do extended autolink path validation
        let prevCapZero;
        do {
          prevCapZero = cap[0];
          cap[0] = this.rules.inline._backpedal.exec(cap[0])[0];
        } while (prevCapZero !== cap[0]);
        text = marked_esm_escape(cap[0]);
        if (cap[1] === 'www.') {
          href = 'http://' + text;
        } else {
          href = text;
        }
      }
      return {
        type: 'link',
        raw: cap[0],
        text,
        href,
        tokens: [
          {
            type: 'text',
            raw: text,
            text
          }
        ]
      };
    }
  }

  inlineText(src, smartypants) {
    const cap = this.rules.inline.text.exec(src);
    if (cap) {
      let text;
      if (this.lexer.state.inRawBlock) {
        text = this.options.sanitize ? (this.options.sanitizer ? this.options.sanitizer(cap[0]) : marked_esm_escape(cap[0])) : cap[0];
      } else {
        text = marked_esm_escape(this.options.smartypants ? smartypants(cap[0]) : cap[0]);
      }
      return {
        type: 'text',
        raw: cap[0],
        text
      };
    }
  }
}

/**
 * Block-Level Grammar
 */
const block = {
  newline: /^(?: *(?:\n|$))+/,
  code: /^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,
  fences: /^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?=\n|$)|$)/,
  hr: /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,
  heading: /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,
  blockquote: /^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,
  list: /^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/,
  html: '^ {0,3}(?:' // optional indentation
    + '<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)' // (1)
    + '|comment[^\\n]*(\\n+|$)' // (2)
    + '|<\\?[\\s\\S]*?(?:\\?>\\n*|$)' // (3)
    + '|<![A-Z][\\s\\S]*?(?:>\\n*|$)' // (4)
    + '|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)' // (5)
    + '|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)' // (6)
    + '|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)' // (7) open tag
    + '|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)' // (7) closing tag
    + ')',
  def: /^ {0,3}\[(label)\]: *(?:\n *)?<?([^\s>]+)>?(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,
  table: noopTest,
  lheading: /^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,
  // regex template, placeholders will be replaced according to different paragraph
  // interruption rules of commonmark and the original markdown spec:
  _paragraph: /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,
  text: /^[^\n]+/
};

block._label = /(?!\s*\])(?:\\.|[^\[\]\\])+/;
block._title = /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/;
block.def = edit(block.def)
  .replace('label', block._label)
  .replace('title', block._title)
  .getRegex();

block.bullet = /(?:[*+-]|\d{1,9}[.)])/;
block.listItemStart = edit(/^( *)(bull) */)
  .replace('bull', block.bullet)
  .getRegex();

block.list = edit(block.list)
  .replace(/bull/g, block.bullet)
  .replace('hr', '\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))')
  .replace('def', '\\n+(?=' + block.def.source + ')')
  .getRegex();

block._tag = 'address|article|aside|base|basefont|blockquote|body|caption'
  + '|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption'
  + '|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe'
  + '|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option'
  + '|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr'
  + '|track|ul';
block._comment = /<!--(?!-?>)[\s\S]*?(?:-->|$)/;
block.html = edit(block.html, 'i')
  .replace('comment', block._comment)
  .replace('tag', block._tag)
  .replace('attribute', / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/)
  .getRegex();

block.paragraph = edit(block._paragraph)
  .replace('hr', block.hr)
  .replace('heading', ' {0,3}#{1,6} ')
  .replace('|lheading', '') // setex headings don't interrupt commonmark paragraphs
  .replace('|table', '')
  .replace('blockquote', ' {0,3}>')
  .replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n')
  .replace('list', ' {0,3}(?:[*+-]|1[.)]) ') // only lists starting from 1 can interrupt
  .replace('html', '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)')
  .replace('tag', block._tag) // pars can be interrupted by type (6) html blocks
  .getRegex();

block.blockquote = edit(block.blockquote)
  .replace('paragraph', block.paragraph)
  .getRegex();

/**
 * Normal Block Grammar
 */

block.normal = merge({}, block);

/**
 * GFM Block Grammar
 */

block.gfm = merge({}, block.normal, {
  table: '^ *([^\\n ].*\\|.*)\\n' // Header
    + ' {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?' // Align
    + '(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)' // Cells
});

block.gfm.table = edit(block.gfm.table)
  .replace('hr', block.hr)
  .replace('heading', ' {0,3}#{1,6} ')
  .replace('blockquote', ' {0,3}>')
  .replace('code', ' {4}[^\\n]')
  .replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n')
  .replace('list', ' {0,3}(?:[*+-]|1[.)]) ') // only lists starting from 1 can interrupt
  .replace('html', '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)')
  .replace('tag', block._tag) // tables can be interrupted by type (6) html blocks
  .getRegex();

block.gfm.paragraph = edit(block._paragraph)
  .replace('hr', block.hr)
  .replace('heading', ' {0,3}#{1,6} ')
  .replace('|lheading', '') // setex headings don't interrupt commonmark paragraphs
  .replace('table', block.gfm.table) // interrupt paragraphs with table
  .replace('blockquote', ' {0,3}>')
  .replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n')
  .replace('list', ' {0,3}(?:[*+-]|1[.)]) ') // only lists starting from 1 can interrupt
  .replace('html', '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)')
  .replace('tag', block._tag) // pars can be interrupted by type (6) html blocks
  .getRegex();
/**
 * Pedantic grammar (original John Gruber's loose markdown specification)
 */

block.pedantic = merge({}, block.normal, {
  html: edit(
    '^ *(?:comment *(?:\\n|\\s*$)'
    + '|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)' // closed tag
    + '|<tag(?:"[^"]*"|\'[^\']*\'|\\s[^\'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))')
    .replace('comment', block._comment)
    .replace(/tag/g, '(?!(?:'
      + 'a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub'
      + '|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)'
      + '\\b)\\w+(?!:|[^\\w\\s@]*@)\\b')
    .getRegex(),
  def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
  heading: /^(#{1,6})(.*)(?:\n+|$)/,
  fences: noopTest, // fences not supported
  paragraph: edit(block.normal._paragraph)
    .replace('hr', block.hr)
    .replace('heading', ' *#{1,6} *[^\n]')
    .replace('lheading', block.lheading)
    .replace('blockquote', ' {0,3}>')
    .replace('|fences', '')
    .replace('|list', '')
    .replace('|html', '')
    .getRegex()
});

/**
 * Inline-Level Grammar
 */
const inline = {
  escape: /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
  autolink: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/,
  url: noopTest,
  tag: '^comment'
    + '|^</[a-zA-Z][\\w:-]*\\s*>' // self-closing tag
    + '|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>' // open tag
    + '|^<\\?[\\s\\S]*?\\?>' // processing instruction, e.g. <?php ?>
    + '|^<![a-zA-Z]+\\s[\\s\\S]*?>' // declaration, e.g. <!DOCTYPE html>
    + '|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>', // CDATA section
  link: /^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,
  reflink: /^!?\[(label)\]\[(ref)\]/,
  nolink: /^!?\[(ref)\](?:\[\])?/,
  reflinkSearch: 'reflink|nolink(?!\\()',
  emStrong: {
    lDelim: /^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,
    //        (1) and (2) can only be a Right Delimiter. (3) and (4) can only be Left.  (5) and (6) can be either Left or Right.
    //          () Skip orphan inside strong  () Consume to delim (1) #***                (2) a***#, a***                   (3) #***a, ***a                 (4) ***#              (5) #***#                 (6) a***a
    rDelimAst: /^[^_*]*?\_\_[^_*]*?\*[^_*]*?(?=\_\_)|[^*]+(?=[^*])|[punct_](\*+)(?=[\s]|$)|[^punct*_\s](\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|[^punct*_\s](\*+)(?=[^punct*_\s])/,
    rDelimUnd: /^[^_*]*?\*\*[^_*]*?\_[^_*]*?(?=\*\*)|[^_]+(?=[^_])|[punct*](\_+)(?=[\s]|$)|[^punct*_\s](\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/ // ^- Not allowed for _
  },
  code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,
  br: /^( {2,}|\\)\n(?!\s*$)/,
  del: noopTest,
  text: /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,
  punctuation: /^([\spunctuation])/
};

// list of punctuation marks from CommonMark spec
// without * and _ to handle the different emphasis markers * and _
inline._punctuation = '!"#$%&\'()+\\-.,/:;<=>?@\\[\\]`^{|}~';
inline.punctuation = edit(inline.punctuation).replace(/punctuation/g, inline._punctuation).getRegex();

// sequences em should skip over [title](link), `code`, <html>
inline.blockSkip = /\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g;
inline.escapedEmSt = /\\\*|\\_/g;

inline._comment = edit(block._comment).replace('(?:-->|$)', '-->').getRegex();

inline.emStrong.lDelim = edit(inline.emStrong.lDelim)
  .replace(/punct/g, inline._punctuation)
  .getRegex();

inline.emStrong.rDelimAst = edit(inline.emStrong.rDelimAst, 'g')
  .replace(/punct/g, inline._punctuation)
  .getRegex();

inline.emStrong.rDelimUnd = edit(inline.emStrong.rDelimUnd, 'g')
  .replace(/punct/g, inline._punctuation)
  .getRegex();

inline._escapes = /\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g;

inline._scheme = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/;
inline._email = /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/;
inline.autolink = edit(inline.autolink)
  .replace('scheme', inline._scheme)
  .replace('email', inline._email)
  .getRegex();

inline._attribute = /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/;

inline.tag = edit(inline.tag)
  .replace('comment', inline._comment)
  .replace('attribute', inline._attribute)
  .getRegex();

inline._label = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/;
inline._href = /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/;
inline._title = /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/;

inline.link = edit(inline.link)
  .replace('label', inline._label)
  .replace('href', inline._href)
  .replace('title', inline._title)
  .getRegex();

inline.reflink = edit(inline.reflink)
  .replace('label', inline._label)
  .replace('ref', block._label)
  .getRegex();

inline.nolink = edit(inline.nolink)
  .replace('ref', block._label)
  .getRegex();

inline.reflinkSearch = edit(inline.reflinkSearch, 'g')
  .replace('reflink', inline.reflink)
  .replace('nolink', inline.nolink)
  .getRegex();

/**
 * Normal Inline Grammar
 */

inline.normal = merge({}, inline);

/**
 * Pedantic Inline Grammar
 */

inline.pedantic = merge({}, inline.normal, {
  strong: {
    start: /^__|\*\*/,
    middle: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
    endAst: /\*\*(?!\*)/g,
    endUnd: /__(?!_)/g
  },
  em: {
    start: /^_|\*/,
    middle: /^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,
    endAst: /\*(?!\*)/g,
    endUnd: /_(?!_)/g
  },
  link: edit(/^!?\[(label)\]\((.*?)\)/)
    .replace('label', inline._label)
    .getRegex(),
  reflink: edit(/^!?\[(label)\]\s*\[([^\]]*)\]/)
    .replace('label', inline._label)
    .getRegex()
});

/**
 * GFM Inline Grammar
 */

inline.gfm = merge({}, inline.normal, {
  escape: edit(inline.escape).replace('])', '~|])').getRegex(),
  _extended_email: /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,
  url: /^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,
  _backpedal: /(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,
  del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,
  text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/
});

inline.gfm.url = edit(inline.gfm.url, 'i')
  .replace('email', inline.gfm._extended_email)
  .getRegex();
/**
 * GFM + Line Breaks Inline Grammar
 */

inline.breaks = merge({}, inline.gfm, {
  br: edit(inline.br).replace('{2,}', '*').getRegex(),
  text: edit(inline.gfm.text)
    .replace('\\b_', '\\b_| {2,}\\n')
    .replace(/\{2,\}/g, '*')
    .getRegex()
});

/**
 * smartypants text replacement
 * @param {string} text
 */
function smartypants(text) {
  return text
    // em-dashes
    .replace(/---/g, '\u2014')
    // en-dashes
    .replace(/--/g, '\u2013')
    // opening singles
    .replace(/(^|[-\u2014/(\[{"\s])'/g, '$1\u2018')
    // closing singles & apostrophes
    .replace(/'/g, '\u2019')
    // opening doubles
    .replace(/(^|[-\u2014/(\[{\u2018\s])"/g, '$1\u201c')
    // closing doubles
    .replace(/"/g, '\u201d')
    // ellipses
    .replace(/\.{3}/g, '\u2026');
}

/**
 * mangle email addresses
 * @param {string} text
 */
function mangle(text) {
  let out = '',
    i,
    ch;

  const l = text.length;
  for (i = 0; i < l; i++) {
    ch = text.charCodeAt(i);
    if (Math.random() > 0.5) {
      ch = 'x' + ch.toString(16);
    }
    out += '&#' + ch + ';';
  }

  return out;
}

/**
 * Block Lexer
 */
class Lexer {
  constructor(options) {
    this.tokens = [];
    this.tokens.links = Object.create(null);
    this.options = options || defaults;
    this.options.tokenizer = this.options.tokenizer || new Tokenizer();
    this.tokenizer = this.options.tokenizer;
    this.tokenizer.options = this.options;
    this.tokenizer.lexer = this;
    this.inlineQueue = [];
    this.state = {
      inLink: false,
      inRawBlock: false,
      top: true
    };

    const rules = {
      block: block.normal,
      inline: inline.normal
    };

    if (this.options.pedantic) {
      rules.block = block.pedantic;
      rules.inline = inline.pedantic;
    } else if (this.options.gfm) {
      rules.block = block.gfm;
      if (this.options.breaks) {
        rules.inline = inline.breaks;
      } else {
        rules.inline = inline.gfm;
      }
    }
    this.tokenizer.rules = rules;
  }

  /**
   * Expose Rules
   */
  static get rules() {
    return {
      block,
      inline
    };
  }

  /**
   * Static Lex Method
   */
  static lex(src, options) {
    const lexer = new Lexer(options);
    return lexer.lex(src);
  }

  /**
   * Static Lex Inline Method
   */
  static lexInline(src, options) {
    const lexer = new Lexer(options);
    return lexer.inlineTokens(src);
  }

  /**
   * Preprocessing
   */
  lex(src) {
    src = src
      .replace(/\r\n|\r/g, '\n');

    this.blockTokens(src, this.tokens);

    let next;
    while (next = this.inlineQueue.shift()) {
      this.inlineTokens(next.src, next.tokens);
    }

    return this.tokens;
  }

  /**
   * Lexing
   */
  blockTokens(src, tokens = []) {
    if (this.options.pedantic) {
      src = src.replace(/\t/g, '    ').replace(/^ +$/gm, '');
    } else {
      src = src.replace(/^( *)(\t+)/gm, (_, leading, tabs) => {
        return leading + '    '.repeat(tabs.length);
      });
    }

    let token, lastToken, cutSrc, lastParagraphClipped;

    while (src) {
      if (this.options.extensions
        && this.options.extensions.block
        && this.options.extensions.block.some((extTokenizer) => {
          if (token = extTokenizer.call({ lexer: this }, src, tokens)) {
            src = src.substring(token.raw.length);
            tokens.push(token);
            return true;
          }
          return false;
        })) {
        continue;
      }

      // newline
      if (token = this.tokenizer.space(src)) {
        src = src.substring(token.raw.length);
        if (token.raw.length === 1 && tokens.length > 0) {
          // if there's a single \n as a spacer, it's terminating the last line,
          // so move it there so that we don't get unecessary paragraph tags
          tokens[tokens.length - 1].raw += '\n';
        } else {
          tokens.push(token);
        }
        continue;
      }

      // code
      if (token = this.tokenizer.code(src)) {
        src = src.substring(token.raw.length);
        lastToken = tokens[tokens.length - 1];
        // An indented code block cannot interrupt a paragraph.
        if (lastToken && (lastToken.type === 'paragraph' || lastToken.type === 'text')) {
          lastToken.raw += '\n' + token.raw;
          lastToken.text += '\n' + token.text;
          this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
        } else {
          tokens.push(token);
        }
        continue;
      }

      // fences
      if (token = this.tokenizer.fences(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }

      // heading
      if (token = this.tokenizer.heading(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }

      // hr
      if (token = this.tokenizer.hr(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }

      // blockquote
      if (token = this.tokenizer.blockquote(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }

      // list
      if (token = this.tokenizer.list(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }

      // html
      if (token = this.tokenizer.html(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }

      // def
      if (token = this.tokenizer.def(src)) {
        src = src.substring(token.raw.length);
        lastToken = tokens[tokens.length - 1];
        if (lastToken && (lastToken.type === 'paragraph' || lastToken.type === 'text')) {
          lastToken.raw += '\n' + token.raw;
          lastToken.text += '\n' + token.raw;
          this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
        } else if (!this.tokens.links[token.tag]) {
          this.tokens.links[token.tag] = {
            href: token.href,
            title: token.title
          };
        }
        continue;
      }

      // table (gfm)
      if (token = this.tokenizer.table(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }

      // lheading
      if (token = this.tokenizer.lheading(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }

      // top-level paragraph
      // prevent paragraph consuming extensions by clipping 'src' to extension start
      cutSrc = src;
      if (this.options.extensions && this.options.extensions.startBlock) {
        let startIndex = Infinity;
        const tempSrc = src.slice(1);
        let tempStart;
        this.options.extensions.startBlock.forEach(function(getStartIndex) {
          tempStart = getStartIndex.call({ lexer: this }, tempSrc);
          if (typeof tempStart === 'number' && tempStart >= 0) { startIndex = Math.min(startIndex, tempStart); }
        });
        if (startIndex < Infinity && startIndex >= 0) {
          cutSrc = src.substring(0, startIndex + 1);
        }
      }
      if (this.state.top && (token = this.tokenizer.paragraph(cutSrc))) {
        lastToken = tokens[tokens.length - 1];
        if (lastParagraphClipped && lastToken.type === 'paragraph') {
          lastToken.raw += '\n' + token.raw;
          lastToken.text += '\n' + token.text;
          this.inlineQueue.pop();
          this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
        } else {
          tokens.push(token);
        }
        lastParagraphClipped = (cutSrc.length !== src.length);
        src = src.substring(token.raw.length);
        continue;
      }

      // text
      if (token = this.tokenizer.text(src)) {
        src = src.substring(token.raw.length);
        lastToken = tokens[tokens.length - 1];
        if (lastToken && lastToken.type === 'text') {
          lastToken.raw += '\n' + token.raw;
          lastToken.text += '\n' + token.text;
          this.inlineQueue.pop();
          this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
        } else {
          tokens.push(token);
        }
        continue;
      }

      if (src) {
        const errMsg = 'Infinite loop on byte: ' + src.charCodeAt(0);
        if (this.options.silent) {
          console.error(errMsg);
          break;
        } else {
          throw new Error(errMsg);
        }
      }
    }

    this.state.top = true;
    return tokens;
  }

  inline(src, tokens) {
    this.inlineQueue.push({ src, tokens });
  }

  /**
   * Lexing/Compiling
   */
  inlineTokens(src, tokens = []) {
    let token, lastToken, cutSrc;

    // String with links masked to avoid interference with em and strong
    let maskedSrc = src;
    let match;
    let keepPrevChar, prevChar;

    // Mask out reflinks
    if (this.tokens.links) {
      const links = Object.keys(this.tokens.links);
      if (links.length > 0) {
        while ((match = this.tokenizer.rules.inline.reflinkSearch.exec(maskedSrc)) != null) {
          if (links.includes(match[0].slice(match[0].lastIndexOf('[') + 1, -1))) {
            maskedSrc = maskedSrc.slice(0, match.index) + '[' + repeatString('a', match[0].length - 2) + ']' + maskedSrc.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex);
          }
        }
      }
    }
    // Mask out other blocks
    while ((match = this.tokenizer.rules.inline.blockSkip.exec(maskedSrc)) != null) {
      maskedSrc = maskedSrc.slice(0, match.index) + '[' + repeatString('a', match[0].length - 2) + ']' + maskedSrc.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
    }

    // Mask out escaped em & strong delimiters
    while ((match = this.tokenizer.rules.inline.escapedEmSt.exec(maskedSrc)) != null) {
      maskedSrc = maskedSrc.slice(0, match.index) + '++' + maskedSrc.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex);
    }

    while (src) {
      if (!keepPrevChar) {
        prevChar = '';
      }
      keepPrevChar = false;

      // extensions
      if (this.options.extensions
        && this.options.extensions.inline
        && this.options.extensions.inline.some((extTokenizer) => {
          if (token = extTokenizer.call({ lexer: this }, src, tokens)) {
            src = src.substring(token.raw.length);
            tokens.push(token);
            return true;
          }
          return false;
        })) {
        continue;
      }

      // escape
      if (token = this.tokenizer.escape(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }

      // tag
      if (token = this.tokenizer.tag(src)) {
        src = src.substring(token.raw.length);
        lastToken = tokens[tokens.length - 1];
        if (lastToken && token.type === 'text' && lastToken.type === 'text') {
          lastToken.raw += token.raw;
          lastToken.text += token.text;
        } else {
          tokens.push(token);
        }
        continue;
      }

      // link
      if (token = this.tokenizer.link(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }

      // reflink, nolink
      if (token = this.tokenizer.reflink(src, this.tokens.links)) {
        src = src.substring(token.raw.length);
        lastToken = tokens[tokens.length - 1];
        if (lastToken && token.type === 'text' && lastToken.type === 'text') {
          lastToken.raw += token.raw;
          lastToken.text += token.text;
        } else {
          tokens.push(token);
        }
        continue;
      }

      // em & strong
      if (token = this.tokenizer.emStrong(src, maskedSrc, prevChar)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }

      // code
      if (token = this.tokenizer.codespan(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }

      // br
      if (token = this.tokenizer.br(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }

      // del (gfm)
      if (token = this.tokenizer.del(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }

      // autolink
      if (token = this.tokenizer.autolink(src, mangle)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }

      // url (gfm)
      if (!this.state.inLink && (token = this.tokenizer.url(src, mangle))) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }

      // text
      // prevent inlineText consuming extensions by clipping 'src' to extension start
      cutSrc = src;
      if (this.options.extensions && this.options.extensions.startInline) {
        let startIndex = Infinity;
        const tempSrc = src.slice(1);
        let tempStart;
        this.options.extensions.startInline.forEach(function(getStartIndex) {
          tempStart = getStartIndex.call({ lexer: this }, tempSrc);
          if (typeof tempStart === 'number' && tempStart >= 0) { startIndex = Math.min(startIndex, tempStart); }
        });
        if (startIndex < Infinity && startIndex >= 0) {
          cutSrc = src.substring(0, startIndex + 1);
        }
      }
      if (token = this.tokenizer.inlineText(cutSrc, smartypants)) {
        src = src.substring(token.raw.length);
        if (token.raw.slice(-1) !== '_') { // Track prevChar before string of ____ started
          prevChar = token.raw.slice(-1);
        }
        keepPrevChar = true;
        lastToken = tokens[tokens.length - 1];
        if (lastToken && lastToken.type === 'text') {
          lastToken.raw += token.raw;
          lastToken.text += token.text;
        } else {
          tokens.push(token);
        }
        continue;
      }

      if (src) {
        const errMsg = 'Infinite loop on byte: ' + src.charCodeAt(0);
        if (this.options.silent) {
          console.error(errMsg);
          break;
        } else {
          throw new Error(errMsg);
        }
      }
    }

    return tokens;
  }
}

/**
 * Renderer
 */
class Renderer {
  constructor(options) {
    this.options = options || defaults;
  }

  code(code, infostring, escaped) {
    const lang = (infostring || '').match(/\S*/)[0];
    if (this.options.highlight) {
      const out = this.options.highlight(code, lang);
      if (out != null && out !== code) {
        escaped = true;
        code = out;
      }
    }

    code = code.replace(/\n$/, '') + '\n';

    if (!lang) {
      return '<pre><code>'
        + (escaped ? code : marked_esm_escape(code, true))
        + '</code></pre>\n';
    }

    return '<pre><code class="'
      + this.options.langPrefix
      + marked_esm_escape(lang, true)
      + '">'
      + (escaped ? code : marked_esm_escape(code, true))
      + '</code></pre>\n';
  }

  /**
   * @param {string} quote
   */
  blockquote(quote) {
    return `<blockquote>\n${quote}</blockquote>\n`;
  }

  html(html) {
    return html;
  }

  /**
   * @param {string} text
   * @param {string} level
   * @param {string} raw
   * @param {any} slugger
   */
  heading(text, level, raw, slugger) {
    if (this.options.headerIds) {
      const id = this.options.headerPrefix + slugger.slug(raw);
      return `<h${level} id="${id}">${text}</h${level}>\n`;
    }

    // ignore IDs
    return `<h${level}>${text}</h${level}>\n`;
  }

  hr() {
    return this.options.xhtml ? '<hr/>\n' : '<hr>\n';
  }

  list(body, ordered, start) {
    const type = ordered ? 'ol' : 'ul',
      startatt = (ordered && start !== 1) ? (' start="' + start + '"') : '';
    return '<' + type + startatt + '>\n' + body + '</' + type + '>\n';
  }

  /**
   * @param {string} text
   */
  listitem(text) {
    return `<li>${text}</li>\n`;
  }

  checkbox(checked) {
    return '<input '
      + (checked ? 'checked="" ' : '')
      + 'disabled="" type="checkbox"'
      + (this.options.xhtml ? ' /' : '')
      + '> ';
  }

  /**
   * @param {string} text
   */
  paragraph(text) {
    return `<p>${text}</p>\n`;
  }

  /**
   * @param {string} header
   * @param {string} body
   */
  table(header, body) {
    if (body) body = `<tbody>${body}</tbody>`;

    return '<table>\n'
      + '<thead>\n'
      + header
      + '</thead>\n'
      + body
      + '</table>\n';
  }

  /**
   * @param {string} content
   */
  tablerow(content) {
    return `<tr>\n${content}</tr>\n`;
  }

  tablecell(content, flags) {
    const type = flags.header ? 'th' : 'td';
    const tag = flags.align
      ? `<${type} align="${flags.align}">`
      : `<${type}>`;
    return tag + content + `</${type}>\n`;
  }

  /**
   * span level renderer
   * @param {string} text
   */
  strong(text) {
    return `<strong>${text}</strong>`;
  }

  /**
   * @param {string} text
   */
  em(text) {
    return `<em>${text}</em>`;
  }

  /**
   * @param {string} text
   */
  codespan(text) {
    return `<code>${text}</code>`;
  }

  br() {
    return this.options.xhtml ? '<br/>' : '<br>';
  }

  /**
   * @param {string} text
   */
  del(text) {
    return `<del>${text}</del>`;
  }

  /**
   * @param {string} href
   * @param {string} title
   * @param {string} text
   */
  link(href, title, text) {
    href = cleanUrl(this.options.sanitize, this.options.baseUrl, href);
    if (href === null) {
      return text;
    }
    let out = '<a href="' + marked_esm_escape(href) + '"';
    if (title) {
      out += ' title="' + title + '"';
    }
    out += '>' + text + '</a>';
    return out;
  }

  /**
   * @param {string} href
   * @param {string} title
   * @param {string} text
   */
  image(href, title, text) {
    href = cleanUrl(this.options.sanitize, this.options.baseUrl, href);
    if (href === null) {
      return text;
    }

    let out = `<img src="${href}" alt="${text}"`;
    if (title) {
      out += ` title="${title}"`;
    }
    out += this.options.xhtml ? '/>' : '>';
    return out;
  }

  text(text) {
    return text;
  }
}

/**
 * TextRenderer
 * returns only the textual part of the token
 */
class TextRenderer {
  // no need for block level renderers
  strong(text) {
    return text;
  }

  em(text) {
    return text;
  }

  codespan(text) {
    return text;
  }

  del(text) {
    return text;
  }

  html(text) {
    return text;
  }

  text(text) {
    return text;
  }

  link(href, title, text) {
    return '' + text;
  }

  image(href, title, text) {
    return '' + text;
  }

  br() {
    return '';
  }
}

/**
 * Slugger generates header id
 */
class Slugger {
  constructor() {
    this.seen = {};
  }

  /**
   * @param {string} value
   */
  serialize(value) {
    return value
      .toLowerCase()
      .trim()
      // remove html tags
      .replace(/<[!\/a-z].*?>/ig, '')
      // remove unwanted chars
      .replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g, '')
      .replace(/\s/g, '-');
  }

  /**
   * Finds the next safe (unique) slug to use
   * @param {string} originalSlug
   * @param {boolean} isDryRun
   */
  getNextSafeSlug(originalSlug, isDryRun) {
    let slug = originalSlug;
    let occurenceAccumulator = 0;
    if (this.seen.hasOwnProperty(slug)) {
      occurenceAccumulator = this.seen[originalSlug];
      do {
        occurenceAccumulator++;
        slug = originalSlug + '-' + occurenceAccumulator;
      } while (this.seen.hasOwnProperty(slug));
    }
    if (!isDryRun) {
      this.seen[originalSlug] = occurenceAccumulator;
      this.seen[slug] = 0;
    }
    return slug;
  }

  /**
   * Convert string to unique id
   * @param {object} [options]
   * @param {boolean} [options.dryrun] Generates the next unique slug without
   * updating the internal accumulator.
   */
  slug(value, options = {}) {
    const slug = this.serialize(value);
    return this.getNextSafeSlug(slug, options.dryrun);
  }
}

/**
 * Parsing & Compiling
 */
class Parser {
  constructor(options) {
    this.options = options || defaults;
    this.options.renderer = this.options.renderer || new Renderer();
    this.renderer = this.options.renderer;
    this.renderer.options = this.options;
    this.textRenderer = new TextRenderer();
    this.slugger = new Slugger();
  }

  /**
   * Static Parse Method
   */
  static parse(tokens, options) {
    const parser = new Parser(options);
    return parser.parse(tokens);
  }

  /**
   * Static Parse Inline Method
   */
  static parseInline(tokens, options) {
    const parser = new Parser(options);
    return parser.parseInline(tokens);
  }

  /**
   * Parse Loop
   */
  parse(tokens, top = true) {
    let out = '',
      i,
      j,
      k,
      l2,
      l3,
      row,
      cell,
      header,
      body,
      token,
      ordered,
      start,
      loose,
      itemBody,
      item,
      checked,
      task,
      checkbox,
      ret;

    const l = tokens.length;
    for (i = 0; i < l; i++) {
      token = tokens[i];

      // Run any renderer extensions
      if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[token.type]) {
        ret = this.options.extensions.renderers[token.type].call({ parser: this }, token);
        if (ret !== false || !['space', 'hr', 'heading', 'code', 'table', 'blockquote', 'list', 'html', 'paragraph', 'text'].includes(token.type)) {
          out += ret || '';
          continue;
        }
      }

      switch (token.type) {
        case 'space': {
          continue;
        }
        case 'hr': {
          out += this.renderer.hr();
          continue;
        }
        case 'heading': {
          out += this.renderer.heading(
            this.parseInline(token.tokens),
            token.depth,
            marked_esm_unescape(this.parseInline(token.tokens, this.textRenderer)),
            this.slugger);
          continue;
        }
        case 'code': {
          out += this.renderer.code(token.text,
            token.lang,
            token.escaped);
          continue;
        }
        case 'table': {
          header = '';

          // header
          cell = '';
          l2 = token.header.length;
          for (j = 0; j < l2; j++) {
            cell += this.renderer.tablecell(
              this.parseInline(token.header[j].tokens),
              { header: true, align: token.align[j] }
            );
          }
          header += this.renderer.tablerow(cell);

          body = '';
          l2 = token.rows.length;
          for (j = 0; j < l2; j++) {
            row = token.rows[j];

            cell = '';
            l3 = row.length;
            for (k = 0; k < l3; k++) {
              cell += this.renderer.tablecell(
                this.parseInline(row[k].tokens),
                { header: false, align: token.align[k] }
              );
            }

            body += this.renderer.tablerow(cell);
          }
          out += this.renderer.table(header, body);
          continue;
        }
        case 'blockquote': {
          body = this.parse(token.tokens);
          out += this.renderer.blockquote(body);
          continue;
        }
        case 'list': {
          ordered = token.ordered;
          start = token.start;
          loose = token.loose;
          l2 = token.items.length;

          body = '';
          for (j = 0; j < l2; j++) {
            item = token.items[j];
            checked = item.checked;
            task = item.task;

            itemBody = '';
            if (item.task) {
              checkbox = this.renderer.checkbox(checked);
              if (loose) {
                if (item.tokens.length > 0 && item.tokens[0].type === 'paragraph') {
                  item.tokens[0].text = checkbox + ' ' + item.tokens[0].text;
                  if (item.tokens[0].tokens && item.tokens[0].tokens.length > 0 && item.tokens[0].tokens[0].type === 'text') {
                    item.tokens[0].tokens[0].text = checkbox + ' ' + item.tokens[0].tokens[0].text;
                  }
                } else {
                  item.tokens.unshift({
                    type: 'text',
                    text: checkbox
                  });
                }
              } else {
                itemBody += checkbox;
              }
            }

            itemBody += this.parse(item.tokens, loose);
            body += this.renderer.listitem(itemBody, task, checked);
          }

          out += this.renderer.list(body, ordered, start);
          continue;
        }
        case 'html': {
          // TODO parse inline content if parameter markdown=1
          out += this.renderer.html(token.text);
          continue;
        }
        case 'paragraph': {
          out += this.renderer.paragraph(this.parseInline(token.tokens));
          continue;
        }
        case 'text': {
          body = token.tokens ? this.parseInline(token.tokens) : token.text;
          while (i + 1 < l && tokens[i + 1].type === 'text') {
            token = tokens[++i];
            body += '\n' + (token.tokens ? this.parseInline(token.tokens) : token.text);
          }
          out += top ? this.renderer.paragraph(body) : body;
          continue;
        }

        default: {
          const errMsg = 'Token with "' + token.type + '" type was not found.';
          if (this.options.silent) {
            console.error(errMsg);
            return;
          } else {
            throw new Error(errMsg);
          }
        }
      }
    }

    return out;
  }

  /**
   * Parse Inline Tokens
   */
  parseInline(tokens, renderer) {
    renderer = renderer || this.renderer;
    let out = '',
      i,
      token,
      ret;

    const l = tokens.length;
    for (i = 0; i < l; i++) {
      token = tokens[i];

      // Run any renderer extensions
      if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[token.type]) {
        ret = this.options.extensions.renderers[token.type].call({ parser: this }, token);
        if (ret !== false || !['escape', 'html', 'link', 'image', 'strong', 'em', 'codespan', 'br', 'del', 'text'].includes(token.type)) {
          out += ret || '';
          continue;
        }
      }

      switch (token.type) {
        case 'escape': {
          out += renderer.text(token.text);
          break;
        }
        case 'html': {
          out += renderer.html(token.text);
          break;
        }
        case 'link': {
          out += renderer.link(token.href, token.title, this.parseInline(token.tokens, renderer));
          break;
        }
        case 'image': {
          out += renderer.image(token.href, token.title, token.text);
          break;
        }
        case 'strong': {
          out += renderer.strong(this.parseInline(token.tokens, renderer));
          break;
        }
        case 'em': {
          out += renderer.em(this.parseInline(token.tokens, renderer));
          break;
        }
        case 'codespan': {
          out += renderer.codespan(token.text);
          break;
        }
        case 'br': {
          out += renderer.br();
          break;
        }
        case 'del': {
          out += renderer.del(this.parseInline(token.tokens, renderer));
          break;
        }
        case 'text': {
          out += renderer.text(token.text);
          break;
        }
        default: {
          const errMsg = 'Token with "' + token.type + '" type was not found.';
          if (this.options.silent) {
            console.error(errMsg);
            return;
          } else {
            throw new Error(errMsg);
          }
        }
      }
    }
    return out;
  }
}

/**
 * Marked
 */
function marked(src, opt, callback) {
  // throw error in case of non string input
  if (typeof src === 'undefined' || src === null) {
    throw new Error('marked(): input parameter is undefined or null');
  }
  if (typeof src !== 'string') {
    throw new Error('marked(): input parameter is of type '
      + Object.prototype.toString.call(src) + ', string expected');
  }

  if (typeof opt === 'function') {
    callback = opt;
    opt = null;
  }

  opt = merge({}, marked.defaults, opt || {});
  checkSanitizeDeprecation(opt);

  if (callback) {
    const highlight = opt.highlight;
    let tokens;

    try {
      tokens = Lexer.lex(src, opt);
    } catch (e) {
      return callback(e);
    }

    const done = function(err) {
      let out;

      if (!err) {
        try {
          if (opt.walkTokens) {
            marked.walkTokens(tokens, opt.walkTokens);
          }
          out = Parser.parse(tokens, opt);
        } catch (e) {
          err = e;
        }
      }

      opt.highlight = highlight;

      return err
        ? callback(err)
        : callback(null, out);
    };

    if (!highlight || highlight.length < 3) {
      return done();
    }

    delete opt.highlight;

    if (!tokens.length) return done();

    let pending = 0;
    marked.walkTokens(tokens, function(token) {
      if (token.type === 'code') {
        pending++;
        setTimeout(() => {
          highlight(token.text, token.lang, function(err, code) {
            if (err) {
              return done(err);
            }
            if (code != null && code !== token.text) {
              token.text = code;
              token.escaped = true;
            }

            pending--;
            if (pending === 0) {
              done();
            }
          });
        }, 0);
      }
    });

    if (pending === 0) {
      done();
    }

    return;
  }

  try {
    const tokens = Lexer.lex(src, opt);
    if (opt.walkTokens) {
      marked.walkTokens(tokens, opt.walkTokens);
    }
    return Parser.parse(tokens, opt);
  } catch (e) {
    e.message += '\nPlease report this to https://github.com/markedjs/marked.';
    if (opt.silent) {
      return '<p>An error occurred:</p><pre>'
        + marked_esm_escape(e.message + '', true)
        + '</pre>';
    }
    throw e;
  }
}

/**
 * Options
 */

marked.options =
marked.setOptions = function(opt) {
  merge(marked.defaults, opt);
  changeDefaults(marked.defaults);
  return marked;
};

marked.getDefaults = getDefaults;

marked.defaults = defaults;

/**
 * Use Extension
 */

marked.use = function(...args) {
  const opts = merge({}, ...args);
  const extensions = marked.defaults.extensions || { renderers: {}, childTokens: {} };
  let hasExtensions;

  args.forEach((pack) => {
    // ==-- Parse "addon" extensions --== //
    if (pack.extensions) {
      hasExtensions = true;
      pack.extensions.forEach((ext) => {
        if (!ext.name) {
          throw new Error('extension name required');
        }
        if (ext.renderer) { // Renderer extensions
          const prevRenderer = extensions.renderers ? extensions.renderers[ext.name] : null;
          if (prevRenderer) {
            // Replace extension with func to run new extension but fall back if false
            extensions.renderers[ext.name] = function(...args) {
              let ret = ext.renderer.apply(this, args);
              if (ret === false) {
                ret = prevRenderer.apply(this, args);
              }
              return ret;
            };
          } else {
            extensions.renderers[ext.name] = ext.renderer;
          }
        }
        if (ext.tokenizer) { // Tokenizer Extensions
          if (!ext.level || (ext.level !== 'block' && ext.level !== 'inline')) {
            throw new Error("extension level must be 'block' or 'inline'");
          }
          if (extensions[ext.level]) {
            extensions[ext.level].unshift(ext.tokenizer);
          } else {
            extensions[ext.level] = [ext.tokenizer];
          }
          if (ext.start) { // Function to check for start of token
            if (ext.level === 'block') {
              if (extensions.startBlock) {
                extensions.startBlock.push(ext.start);
              } else {
                extensions.startBlock = [ext.start];
              }
            } else if (ext.level === 'inline') {
              if (extensions.startInline) {
                extensions.startInline.push(ext.start);
              } else {
                extensions.startInline = [ext.start];
              }
            }
          }
        }
        if (ext.childTokens) { // Child tokens to be visited by walkTokens
          extensions.childTokens[ext.name] = ext.childTokens;
        }
      });
    }

    // ==-- Parse "overwrite" extensions --== //
    if (pack.renderer) {
      const renderer = marked.defaults.renderer || new Renderer();
      for (const prop in pack.renderer) {
        const prevRenderer = renderer[prop];
        // Replace renderer with func to run extension, but fall back if false
        renderer[prop] = (...args) => {
          let ret = pack.renderer[prop].apply(renderer, args);
          if (ret === false) {
            ret = prevRenderer.apply(renderer, args);
          }
          return ret;
        };
      }
      opts.renderer = renderer;
    }
    if (pack.tokenizer) {
      const tokenizer = marked.defaults.tokenizer || new Tokenizer();
      for (const prop in pack.tokenizer) {
        const prevTokenizer = tokenizer[prop];
        // Replace tokenizer with func to run extension, but fall back if false
        tokenizer[prop] = (...args) => {
          let ret = pack.tokenizer[prop].apply(tokenizer, args);
          if (ret === false) {
            ret = prevTokenizer.apply(tokenizer, args);
          }
          return ret;
        };
      }
      opts.tokenizer = tokenizer;
    }

    // ==-- Parse WalkTokens extensions --== //
    if (pack.walkTokens) {
      const walkTokens = marked.defaults.walkTokens;
      opts.walkTokens = function(token) {
        pack.walkTokens.call(this, token);
        if (walkTokens) {
          walkTokens.call(this, token);
        }
      };
    }

    if (hasExtensions) {
      opts.extensions = extensions;
    }

    marked.setOptions(opts);
  });
};

/**
 * Run callback for every token
 */

marked.walkTokens = function(tokens, callback) {
  for (const token of tokens) {
    callback.call(marked, token);
    switch (token.type) {
      case 'table': {
        for (const cell of token.header) {
          marked.walkTokens(cell.tokens, callback);
        }
        for (const row of token.rows) {
          for (const cell of row) {
            marked.walkTokens(cell.tokens, callback);
          }
        }
        break;
      }
      case 'list': {
        marked.walkTokens(token.items, callback);
        break;
      }
      default: {
        if (marked.defaults.extensions && marked.defaults.extensions.childTokens && marked.defaults.extensions.childTokens[token.type]) { // Walk any extensions
          marked.defaults.extensions.childTokens[token.type].forEach(function(childTokens) {
            marked.walkTokens(token[childTokens], callback);
          });
        } else if (token.tokens) {
          marked.walkTokens(token.tokens, callback);
        }
      }
    }
  }
};

/**
 * Parse Inline
 * @param {string} src
 */
marked.parseInline = function(src, opt) {
  // throw error in case of non string input
  if (typeof src === 'undefined' || src === null) {
    throw new Error('marked.parseInline(): input parameter is undefined or null');
  }
  if (typeof src !== 'string') {
    throw new Error('marked.parseInline(): input parameter is of type '
      + Object.prototype.toString.call(src) + ', string expected');
  }

  opt = merge({}, marked.defaults, opt || {});
  checkSanitizeDeprecation(opt);

  try {
    const tokens = Lexer.lexInline(src, opt);
    if (opt.walkTokens) {
      marked.walkTokens(tokens, opt.walkTokens);
    }
    return Parser.parseInline(tokens, opt);
  } catch (e) {
    e.message += '\nPlease report this to https://github.com/markedjs/marked.';
    if (opt.silent) {
      return '<p>An error occurred:</p><pre>'
        + marked_esm_escape(e.message + '', true)
        + '</pre>';
    }
    throw e;
  }
};

/**
 * Expose
 */
marked.Parser = Parser;
marked.parser = Parser.parse;
marked.Renderer = Renderer;
marked.TextRenderer = TextRenderer;
marked.Lexer = Lexer;
marked.lexer = Lexer.lex;
marked.Tokenizer = Tokenizer;
marked.Slugger = Slugger;
marked.parse = marked;

const options = marked.options;
const setOptions = marked.setOptions;
const use = marked.use;
const walkTokens = marked.walkTokens;
const parseInline = marked.parseInline;
const parse = (/* unused pure expression or super */ null && (marked));
const parser = Parser.parse;
const lexer = Lexer.lex;



;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/CommentEditor.vue?vue&type=template&id=519ba41f&
var CommentEditorvue_type_template_id_519ba41f_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"comment-editor",attrs:{"role":"form"}},[_c('div',{staticClass:"avatar-body"},[(_vm.configs.enableBloggerOperation && _vm.bloggerComment)?_c('div',{staticClass:"blogger-avatar",attrs:{"title":"博主登录"}},[_c('avatar',{staticStyle:{"cursor":"pointer"},attrs:{"src":_vm.avatar,"configs":_vm.configs}}),_c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 170 170"}},[_c('path',{attrs:{"fill":"var(--comment-theme)","d":"M114.7,34.7c-19.4-41-38.7-41-58.1,0C11.4,31,1.8,47.7,27.6,85c-25.8,37.3-16.2,54,29,50.3c19.4,41,38.7,41,58.1,0\n\tc45.2,3.7,54.9-13,29.1-50.3C169.6,47.7,159.9,31,114.7,34.7z M82.4,110.9"}}),_c('path',{attrs:{"fill":"rgba(255, 255, 255, 0.8)","d":"M117.4,75.9l-35,35c-2.6,2.6-6.9,2.6-9.6,0L50.5,88.6c-2.6-2.6-2.6-6.9,0-9.6s6.9-2.6,9.6,0l17.5,17.5\n\tl30.2-30.2c2.6-2.6,6.9-2.6,9.6,0C120,68.9,120,73.2,117.4,75.9L117.4,75.9z"}})])],1):_c('avatar',{staticStyle:{"cursor":"pointer"},attrs:{"src":_vm.avatar,"configs":_vm.configs,"title":"点击头像试试"},on:{"click":_vm.randomAuthor}})],1),_c('form',{staticClass:"comment-form"},[(_vm.configs.enableBloggerOperation && _vm.bloggerComment)?_c('div',{staticClass:"blogger-info"},[_c('div',[_c('p',{staticClass:"blogger-name"},[_vm._v(_vm._s(this.globalData.blogger.nickname))]),_c('p',{staticClass:"blogger-email"},[_vm._v(_vm._s(this.globalData.blogger.email))])]),_c('button',{staticClass:"btn",attrs:{"type":"button"},on:{"click":function($event){_vm.bloggerComment = false}}},[_vm._v("切换访客")])]):_c('div',{staticClass:"author-info"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.comment.author),expression:"comment.author"}],attrs:{"id":"author","aria-required":"true","placeholder":(this.configs.anonymousUserName ? '' : '* ') + (this.configs.getQQInfo ? '昵称（输入QQ自动获取）' : '昵称'),"required":"required","type":"text"},domProps:{"value":(_vm.comment.author)},on:{"blur":function($event){_vm.configs.getQQInfo && _vm.handleQQInfo()},"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.comment, "author", $event.target.value)}}}),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.comment.email),expression:"comment.email"}],class:!this.comment.email || _vm.isEmail() ? '' : 'error',attrs:{"id":"email","placeholder":"邮箱","type":"text"},domProps:{"value":(_vm.comment.email)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.comment, "email", $event.target.value)}}}),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.comment.authorUrl),expression:"comment.authorUrl"}],attrs:{"id":"authorUrl","placeholder":"网址","type":"text"},domProps:{"value":(_vm.comment.authorUrl)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.comment, "authorUrl", $event.target.value)}}})]),_c('div',{directives:[{name:"show",rawName:"v-show",value:(!_vm.previewMode),expression:"!previewMode"}],staticClass:"comment-textarea"},[_c('textarea',{directives:[{name:"model",rawName:"v-model",value:(_vm.comment.content),expression:"comment.content"}],ref:"commentTextarea",class:!_vm.comment.content || _vm.comment.content.length < 1023 ? '' : 'error',attrs:{"placeholder":_vm.options.comment_content_placeholder || '撰写评论...',"aria-required":"true","required":"required"},domProps:{"value":(_vm.comment.content)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.comment, "content", $event.target.value)}}}),_c('span',{staticClass:"edit-picker"},[_c('span',{staticClass:"edit-btn",class:_vm.emojiDialogVisible ? 'edit-open' : '',on:{"click":_vm.handleToggleDialogEmoji}},[_c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","width":"18","height":"18"}},[_vm._v(" > "),_c('path',{attrs:{"d":"M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-5-7h2a3 3 0 0 0 6 0h2a5 5 0 0 1-10 0zm1-2a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm8 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"}})])]),(_vm.configs.enableImageUpload)?_c('span',{staticClass:"edit-btn",class:_vm.imageDialogVisible ? 'edit-open' : '',on:{"click":_vm.handleImageUpload}},[_c('svg',{attrs:{"viewBox":"0 0 1024 1024","xmlns":"http://www.w3.org/2000/svg","width":"18","height":"18"}},[_c('path',{attrs:{"d":"M896 128a64 64 0 0 1 64 64v640a64 64 0 0 1-64 64H128a64 64 0 0 1-64-64V192a64 64 0 0 1 64-64h768zM288 409.6L128 569.536V832h768v-83.2l-204.8-204.8-134.4 134.4-268.8-268.8zM896 192H128v288L288 320l268.8 268.8 134.4-134.4 204.8 204.8V192z"}}),_c('path',{attrs:{"d":"M774.08 356.736a44.8 44.8 0 1 0 0-89.6 44.8 44.8 0 0 0 0 89.6z"}})])]):_vm._e(),_c('transition',{attrs:{"name":"emoji-fade"}},[_c('keep-alive',[(_vm.emojiDialogVisible)?_c('EmojiPicker',{attrs:{"pack":_vm.emojiPack},on:{"select":_vm.handleSelectEmoji}}):_vm._e()],1)],1)],1)]),(_vm.previewMode)?_c('div',{staticClass:"comment-preview markdown-content",domProps:{"innerHTML":_vm._s(_vm.renderedContent)}}):_vm._e(),_c('ul',[(this.replyComment)?_c('li',[_c('button',{staticClass:"btn",attrs:{"type":"button"},on:{"click":function($event){_vm.globalData.replyId = 0}}},[_vm._v("取消")])]):_vm._e(),(_vm.comment.content)?_c('li',[_c('button',{staticClass:"btn",attrs:{"type":"button"},on:{"click":function($event){_vm.previewMode = !_vm.previewMode}}},[_vm._v(" "+_vm._s(_vm.previewMode ? '编辑' : '预览')+" ")])]):_vm._e(),_c('li',[_c('button',{staticClass:"btn btn-primary",class:_vm.commentSumbit ? 'btn-forbid' : '',attrs:{"type":"button"},on:{"click":_vm.handleSubmitClick}},[_vm._v(" "+_vm._s(_vm.commentSumbit ? '提交中 ~' : '提交')+" ")])])]),_c('div',{staticClass:"comment-alert"},[(_vm.infoAlertVisible)?_vm._l((_vm.infoes),function(info,index){return _c('div',{key:index,staticClass:"alert info"},[_c('span',{staticClass:"closebtn",on:{"click":_vm.clearAlertClose}},[_vm._v("×")]),_c('strong',[_vm._v(_vm._s(info))])])}):_vm._e(),(_vm.successAlertVisible)?_vm._l((_vm.successes),function(success,index){return _c('div',{key:index,staticClass:"alert success"},[_c('span',{staticClass:"closebtn",on:{"click":_vm.clearAlertClose}},[_vm._v("×")]),_c('strong',[_vm._v(_vm._s(success))])])}):_vm._e(),(_vm.warningAlertVisible)?_vm._l((_vm.warnings),function(warning,index){return _c('div',{key:index,staticClass:"alert warning"},[_c('span',{staticClass:"closebtn",on:{"click":_vm.clearAlertClose}},[_vm._v("×")]),_c('strong',[_vm._v(_vm._s(warning))])])}):_vm._e()],2)])])}
var CommentEditorvue_type_template_id_519ba41f_staticRenderFns = []


// EXTERNAL MODULE: ./node_modules/core-js/modules/es.error.cause.js
var es_error_cause = __webpack_require__(1703);
// EXTERNAL MODULE: ./node_modules/md5/md5.js
var md5 = __webpack_require__(2568);
var md5_default = /*#__PURE__*/__webpack_require__.n(md5);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.includes.js
var es_array_includes = __webpack_require__(6699);
;// CONCATENATED MODULE: ./src/utils/util.js


/**
 * time ago
 * @param {*} time
 */
function timeAgo(time) {
  const currentTime = new Date().getTime();
  const between = currentTime - time;
  const days = Math.floor(between / (24 * 3600 * 1000));

  if (days === 0) {
    const leave1 = between % (24 * 3600 * 1000);
    const hours = Math.floor(leave1 / (3600 * 1000));

    if (hours === 0) {
      const leave2 = leave1 % (3600 * 1000);
      const minutes = Math.floor(leave2 / (60 * 1000));

      if (minutes === 0) {
        const leave3 = leave2 % (60 * 1000);
        const seconds = Math.round(leave3 / 1000);
        return seconds + ' 秒前';
      }

      return minutes + ' 分钟前';
    }

    return hours + ' 小时前';
  }

  if (days < 0) return '刚刚';

  if (days <= 7) {
    return days + ' 天前';
  } else {
    return formatDate(time, 'yyyy/MM/dd hh:mm');
  }
}

function formatDate(date, fmt) {
  date = new Date(date);

  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
  }

  let o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  };

  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + '';
      fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? str : padLeftZero(str));
    }
  }

  return fmt;
}

function padLeftZero(str) {
  return ('00' + str).substr(str.length);
} // From <https://www.w3resource.com/javascript-exercises/javascript-regexp-exercise-9.php>


function isUrl(str) {
  let regexp = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
  return regexp.test(str);
}
function isEmpty(content) {
  return content === null || content === undefined || content === '';
}
function isObject(value) {
  return value && typeof value === 'object' && value.constructor === Object;
}
function validEmail(email) {
  const re = /^[A-Za-z0-9]+([-_.][A-Za-z0-9]+)*@([A-Za-z0-9]+[-.])+[A-Za-z]{2,8}$/;
  return re.test(email);
}
function isQQMail(mail) {
  var re = /^[1-9][0-9]{4,9}@qq.com$/gim;
  return !isEmpty(mail) && re.test(mail.trim());
}
function isQQ(qq) {
  var re = /^[1-9][0-9]{4,9}$/gim;
  return re.test(qq);
}
function qqMailToQQ(mail) {
  return !isEmpty(mail) && mail.trim().substring(0, mail.lastIndexOf('@'));
}
const queryStringify = query => {
  return Object.keys(query).map(key => `${key}=${encodeURIComponent(query[key] || '')}`).join('&');
};
function getUrlKey(name) {
  return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.href) || '')[1].replace(/\+/g, '%20')) || null;
}
/**
 * 滚动到指定控件
 * @param element 需要被跳转到的控件
 * @param time 跳转时间
 * @param headingsOffset 控件距离页面顶部的距离
 * @param callback 跳转完成后执行的函数
 */

function animateScroll(element, time, headingsOffset, callback) {
  let rect = element.getBoundingClientRect();
  let currentY = window.scrollY;
  let targetY = currentY + rect.top - headingsOffset;
  let speed = (targetY - currentY) / time;
  let offset = currentY > targetY ? -1 : 1;
  let requestId;

  function step() {
    currentY += speed;

    if (currentY * offset < targetY * offset) {
      window.scrollTo(0, currentY);
      requestId = window.requestAnimationFrame(step);
    } else {
      window.scrollTo(0, targetY);
      window.cancelAnimationFrame(requestId);
      callback && callback();
    }
  }

  requestId = window.requestAnimationFrame(step);
}
/**
 * 解码html文档编码
 * @param text
 * @param encode 是否需要支持html
 */

function decodeHtml(text, encode) {
  if (!encode) {
    return text.replace(/&gt;(\s|&nbsp;)/g, '> ');
  }

  let elem = document.createElement('div');
  elem.innerHTML = text;
  const html = elem.innerText || elem.textContent;
  elem = null;
  return html;
}
/**
 * 编码html文档
 * @param html
 * @param encode 是否需要支持html
 */

function encodeHtml(html, encode) {
  if (encode) {
    return html;
  }

  return html.replace(/[<&"]/g, function (c) {
    return {
      '<': '&lt;',
      '&': '&amp;',
      '"': '&quot;'
    }[c];
  });
}
/**
 * 生成评论摘要，去除html标签
 * @param html
 * @returns {any}
 */

function buildSummary(html) {
  return html.replace(/<\/*([^/\s>]+)[^>]*>/g, function (c, match) {
    if (['img', 'ul', 'ol', 'span', 'div', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'input', 'code'].includes(match)) {
      return '';
    }

    if (['hr', 'br', 'p', 'li', 'a', 'blockquote'].includes(match)) {
      return ' ';
    }

    return c;
  });
}
/**
 * 生成一个指定范围的随机数
 * @param minNum 最小值
 * @param maxNum 最大值
 * @returns {number}
 */

function buildRandomNum(minNum = 0, maxNum = 1) {
  return Math.random() * (maxNum - minNum) + minNum;
}
/**
 * 生成一个随机的昵称
 * @returns {string}
 */

function buildNickName() {
  let desc = ['追梦', '放风筝', '打酱油', '耍帅', '卖萌', '发嗲', '发呆', '傻笑', '打盹', '可爱', '善良', '邪恶', '笨笨', '聪明', '美丽', '智慧', '温柔', '调皮', '动人', '活泼', '任性', '苗条', '纯洁', '娇小', '体贴', '贪嘴', '朴实', '机灵', '机智', '搞笑'];
  let name = ['法师', '猛男', '少女', '勇士', '帅哥', '英雄', '老者', '小矮人', '天才', '旺财', '小熊', '少年', '驴', '猪', '恶龙', '天使', '恶魔', '仙女', '哥布林', '企鹅', '小提莫', '爵士', '骑士', '国王', '公主', '王子', '太监', '猪儿虫', '猫猫', '上仙'];
  return `${desc[Math.floor(Math.random() * desc.length)]}的${name[Math.floor(Math.random() * name.length)]}`;
}
// EXTERNAL MODULE: ./node_modules/@halo-dev/content-api/lib/index.js
var lib = __webpack_require__(3977);
;// CONCATENATED MODULE: ./src/plugins/api-client.js

const haloRestApiClient = new lib.HaloRestAPIClient({
  baseUrl:  true ? '' : 0
});
const apiClient = new lib.ContentApiClient(haloRestApiClient);
/* harmony default export */ var api_client = (apiClient);
// EXTERNAL MODULE: ./node_modules/@halo-dev/admin-api/lib/index.js
var admin_api_lib = __webpack_require__(5597);
;// CONCATENATED MODULE: ./src/plugins/admin-client.js
 // let accessToken = localStorage && localStorage.getItem('HALO__Access-Token')
// accessToken = accessToken ? JSON.parse(accessToken) : undefined
// if (accessToken && accessToken.expire > new Date().getTime()) {
//   accessToken = accessToken['value']['access_token']
// } else {
//   accessToken = undefined
// }
//
// //halo http 请求客户端.
// const haloRestApiClient = new HaloRestAPIClient({
//   baseUrl: process.env.NODE_ENV === 'production' ? '' : 'http://localhost:8090',
//   auth: { adminToken: accessToken }
// })
//
// // 通过 haloRestApiCLient 创建 adminApiClient。
// const adminClient = new AdminApiClient(haloRestApiClient)

let accessToken = localStorage && localStorage.getItem('HALO__Access-Token');
accessToken = accessToken ? JSON.parse(accessToken) : undefined;
let adminClient = {};

if (accessToken && accessToken['value']) {
  //halo http 请求客户端.
  const haloRestApiClient = new admin_api_lib.HaloRestAPIClient({
    baseUrl:  true ? '' : 0
  }); // 通过 haloRestApiCLient 创建 adminApiClient。

  adminClient = new admin_api_lib.AdminApiClient(haloRestApiClient);
  haloRestApiClient.interceptors.request.use(config => {
    config.headers['Admin-Authorization'] = accessToken['value']['access_token'];
    return config;
  }, error => {
    return Promise.reject(error);
  });
  let isRefreshingToken = false;
  let pendingRequests = [];
  haloRestApiClient.interceptors.response.use(response => {
    return response;
  }, async error => {
    const response = error.response;
    const data = response ? response.data : null;

    if (admin_api_lib.Axios.isCancel(error) || /Network Error/.test(error.message) || !data || data.status !== 401) {
      return Promise.reject(error);
    }

    const originalRequest = error.config;

    if (isRefreshingToken) {
      return new Promise(resolve => {
        pendingRequests.push(() => {
          resolve((0,admin_api_lib.Axios)(originalRequest));
        });
      });
    }

    isRefreshingToken = true;

    try {
      accessToken['value'] = await adminClient.refreshToken(accessToken['value']['refresh_token']).then(response => response.data);
      accessToken.expire = new Date().getTime() + accessToken['value']['expired_in'] * 1000;
      localStorage.setItem('HALO__Access-Token', JSON.stringify(accessToken));
      pendingRequests.forEach(callback => callback());
      pendingRequests = [];
      return (0,admin_api_lib.Axios)(originalRequest);
    } catch (e) {
      return Promise.reject(e);
    } finally {
      isRefreshingToken = false;
    }
  });
}

/* harmony default export */ var admin_client = (adminClient);
// EXTERNAL MODULE: ./node_modules/autosize/dist/autosize.js
var autosize = __webpack_require__(9367);
var autosize_default = /*#__PURE__*/__webpack_require__.n(autosize);
;// CONCATENATED MODULE: ./src/utils/globals.js
// 全局数据不多，因此不使用vuex
const globalData = {
  replyId: 0,
  blogger: undefined
};
/* harmony default export */ var globals = (globalData);
;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/dreamEmoji/EmojiPicker.vue?vue&type=template&id=3bab4a7c&
var EmojiPickervue_type_template_id_3bab4a7c_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('EmojiList',{attrs:{"data":_vm.pack},on:{"select":_vm.onSelectEmoji}})}
var EmojiPickervue_type_template_id_3bab4a7c_staticRenderFns = []


;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/dreamEmoji/EmojiList.vue?vue&type=template&id=1daa5e6e&
var EmojiListvue_type_template_id_1daa5e6e_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"emoji-container"},_vm._l((_vm.data),function(emoji,index){return _c('DreamEmoji',{key:index,attrs:{"data":emoji},nativeOn:{"click":function($event){return _vm.onSelect(emoji)}}})}),1)}
var EmojiListvue_type_template_id_1daa5e6e_staticRenderFns = []


;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/dreamEmoji/DreamEmoji.vue?vue&type=template&id=2a4d7e70&
var DreamEmojivue_type_template_id_2a4d7e70_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',{staticClass:"emoji-item",attrs:{"title":_vm.data.name}},[_c('img',{attrs:{"alt":_vm.data.name,"src":_vm.dreamSrc,"onerror":"this.src='data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=='"}})])}
var DreamEmojivue_type_template_id_2a4d7e70_staticRenderFns = []


;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40[0].rules[0].use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/dreamEmoji/DreamEmoji.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var DreamEmojivue_type_script_lang_js_ = ({
  name: 'DreamEmoji',
  props: {
    data: {
      type: Object
    },
    url: {
      type: String,
      required: false,
      default: `${"/themes/dream/source/lib/halo-comment@1.1.7/"}assets/emoji/`
    }
  },
  computed: {
    dreamSrc() {
      return this.url + this.data.fileName + '.png';
    }

  }
});
;// CONCATENATED MODULE: ./src/components/dreamEmoji/DreamEmoji.vue?vue&type=script&lang=js&
 /* harmony default export */ var dreamEmoji_DreamEmojivue_type_script_lang_js_ = (DreamEmojivue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

;// CONCATENATED MODULE: ./src/components/dreamEmoji/DreamEmoji.vue





/* normalize component */
;
var component = normalizeComponent(
  dreamEmoji_DreamEmojivue_type_script_lang_js_,
  DreamEmojivue_type_template_id_2a4d7e70_render,
  DreamEmojivue_type_template_id_2a4d7e70_staticRenderFns,
  false,
  null,
  null,
  null
  ,true
)

/* harmony default export */ var DreamEmoji = (component.exports);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40[0].rules[0].use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/dreamEmoji/EmojiList.vue?vue&type=script&lang=js&
//
//
//
//
//
//

/* harmony default export */ var EmojiListvue_type_script_lang_js_ = ({
  name: 'EmojiList',
  components: {
    DreamEmoji: DreamEmoji
  },
  props: {
    data: {
      type: Object
    }
  },
  methods: {
    onSelect(emoji) {
      this.$emit('select', emoji);
    }

  },
  watch: {
    data() {
      this.$refs['container-emoji'].scrollTop = 0;
    }

  }
});
;// CONCATENATED MODULE: ./src/components/dreamEmoji/EmojiList.vue?vue&type=script&lang=js&
 /* harmony default export */ var dreamEmoji_EmojiListvue_type_script_lang_js_ = (EmojiListvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./src/components/dreamEmoji/EmojiList.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(5908)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var EmojiList_component = normalizeComponent(
  dreamEmoji_EmojiListvue_type_script_lang_js_,
  EmojiListvue_type_template_id_1daa5e6e_render,
  EmojiListvue_type_template_id_1daa5e6e_staticRenderFns,
  false,
  injectStyles,
  null,
  null
  ,true
)

/* harmony default export */ var EmojiList = (EmojiList_component.exports);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40[0].rules[0].use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/dreamEmoji/EmojiPicker.vue?vue&type=script&lang=js&
//
//
//
//

/* harmony default export */ var EmojiPickervue_type_script_lang_js_ = ({
  name: 'EmojiPicker',
  props: {
    pack: {
      type: Array,
      required: true
    }
  },
  components: {
    EmojiList: EmojiList
  },
  data: () => ({
    mapEmojis: {}
  }),
  methods: {
    onSelectEmoji(data) {
      this.$emit('select', data);
    }

  }
});
;// CONCATENATED MODULE: ./src/components/dreamEmoji/EmojiPicker.vue?vue&type=script&lang=js&
 /* harmony default export */ var dreamEmoji_EmojiPickervue_type_script_lang_js_ = (EmojiPickervue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./src/components/dreamEmoji/EmojiPicker.vue





/* normalize component */
;
var EmojiPicker_component = normalizeComponent(
  dreamEmoji_EmojiPickervue_type_script_lang_js_,
  EmojiPickervue_type_template_id_3bab4a7c_render,
  EmojiPickervue_type_template_id_3bab4a7c_staticRenderFns,
  false,
  null,
  null,
  null
  ,true
)

/* harmony default export */ var EmojiPicker = (EmojiPicker_component.exports);
// EXTERNAL MODULE: ./src/components/dreamEmoji/emojis.js
var emojis = __webpack_require__(7233);
;// CONCATENATED MODULE: ./src/components/dreamEmoji/renderedEmoji.js
function renderedEmojiHtml(html) {
  const emojiData = (__webpack_require__(7233)/* ["default"] */ .Z);

  for (let emoji of emojiData) {
    let name = emoji.name;
    let img = `<img class="dream-emoji" src="${"/themes/dream/source/lib/halo-comment@1.1.7/"}assets/emoji/${emoji.fileName}.png" alt="${name}"/>`;
    html = html.replace(new RegExp(`\\[/${name}\\]`, 'gm'), img);
  }

  return html;
}
;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/Avatar.vue?vue&type=template&id=02263e34&
var Avatarvue_type_template_id_02263e34_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('img',{staticClass:"avatar",attrs:{"alt":_vm.author ? _vm.author + "'s avatar" : 'avatar',"src":_vm.configs.avatarLoading},on:{"click":_vm.click,"load":_vm.handleAvatarLoading,"error":_vm.handleAvatarError}})}
var Avatarvue_type_template_id_02263e34_staticRenderFns = []


;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40[0].rules[0].use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/Avatar.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Avatarvue_type_script_lang_js_ = ({
  name: 'Avatar',
  props: {
    src: {
      type: String,
      required: true
    },
    author: {
      type: String,
      required: false
    },
    configs: {
      type: Object,
      required: true
    }
  },
  methods: {
    handleAvatarLoading(e) {
      const img = e.target || e.srcElement;

      if (!img.finish) {
        img.finish = true;
        img.src = this.src;
      }
    },

    handleAvatarError(e) {
      const img = e.target || e.srcElement;
      img.onerror = null;
      img.finish = true;
      img.src = this.configs.defaultAvatar;
    },

    click() {
      this.$emit('click');
    }

  }
});
;// CONCATENATED MODULE: ./src/components/Avatar.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Avatarvue_type_script_lang_js_ = (Avatarvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./src/components/Avatar.vue





/* normalize component */
;
var Avatar_component = normalizeComponent(
  components_Avatarvue_type_script_lang_js_,
  Avatarvue_type_template_id_02263e34_render,
  Avatarvue_type_template_id_02263e34_staticRenderFns,
  false,
  null,
  null,
  null
  ,true
)

/* harmony default export */ var Avatar = (Avatar_component.exports);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40[0].rules[0].use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/CommentEditor.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//












/* harmony default export */ var CommentEditorvue_type_script_lang_js_ = ({
  name: 'CommentEditor',
  components: {
    Avatar: Avatar,
    EmojiPicker: EmojiPicker
  },
  props: {
    targetId: {
      type: Number,
      required: false,
      default: 0
    },
    target: {
      type: String,
      required: false,
      default: 'posts',
      validator: function (value) {
        return ['posts', 'sheets', 'journals'].indexOf(value) !== -1;
      }
    },
    replyComment: {
      type: Object,
      required: false,
      default: () => {}
    },
    options: {
      required: false,
      default: []
    },
    configs: {
      type: Object,
      required: true
    }
  },

  data() {
    return {
      emojiPack: emojis/* default */.Z,
      emojiDialogVisible: false,
      imageDialogVisible: false,
      comment: {
        author: null,
        authorUrl: null,
        email: null,
        content: ''
      },
      previewMode: false,
      globalData: globals,
      bloggerComment: true,
      commentSumbit: false,
      infoes: [],
      warnings: [],
      successes: []
    };
  },

  computed: {
    renderedContent() {
      return this.comment.content ? marked.parse(renderedEmojiHtml(encodeHtml(this.comment.content, this.configs.commentHtml))) : '';
    },

    avatar() {
      const gravatarDefault = this.options.comment_gravatar_default;
      const gravatarSource = this.options.gravatar_source || '//cn.gravatar.com/avatar/';
      let email = this.configs.enableBloggerOperation ? this.globalData.blogger.email : this.comment.email;

      if (!email || !validEmail(email)) {
        return `${gravatarSource}?d=${gravatarDefault}`;
      }

      const gravatarMd5 = md5_default()(email);
      return `${gravatarSource}${gravatarMd5}?s=256&d=${gravatarDefault}`;
    },

    infoAlertVisible() {
      return this.infoes !== null && this.infoes.length > 0;
    },

    warningAlertVisible() {
      return this.warnings !== null && this.warnings.length > 0;
    },

    successAlertVisible() {
      return this.successes !== null && this.successes.length > 0;
    }

  },

  created() {
    // Get info from local storage
    const author = localStorage.getItem('comment-author');
    const authorUrl = localStorage.getItem('comment-authorUrl');
    const email = localStorage.getItem('comment-email');
    this.comment.author = author ? author : '';
    this.comment.authorUrl = authorUrl ? authorUrl : '';
    this.comment.email = email ? email : '';
  },

  activated() {
    autosize_default()(this.$el.querySelector('textarea'));
  },

  methods: {
    randomAuthor() {
      this.comment.author = buildNickName();
    },

    isEmail() {
      return validEmail(this.comment.email);
    },

    handleQQInfo() {
      if (!isQQ(this.comment.author)) {
        return;
      }

      fetch('https://api.nsmao.net/api/qq/v1/query?key=YvmkHw55XwyW0W8N4FJVwkrbjo&qq=' + this.comment.author).then(response => response.json()).then(data => {
        this.comment.email = this.comment.author + '@qq.com';
        this.comment.author = data?.data?.name;
      }).catch(error => {
        this.clearAlertClose();
        this.warnings.push('使用QQ获取昵称失败: ' + error);
      });
    },

    handleSubmitClick() {
      if (isEmpty(this.comment.content)) {
        this.warnings.push('评论内容不能为空');
        return;
      }

      let apiComment = admin_client.comment;

      if (!this.configs.enableBloggerOperation || !this.bloggerComment) {
        apiComment = api_client.comment;

        if (isEmpty(this.comment.author)) {
          if (this.configs.anonymousUserName) {
            this.comment.author = this.configs.anonymousUserName;
          } else {
            this.warnings.push('评论者昵称不能为空');
            return;
          }
        }
      } // Submit the comment


      this.comment.postId = this.targetId;

      if (this.replyComment) {
        // Set parent id if available
        this.comment.parentId = this.replyComment.id;
      }

      this.commentSumbit = true;
      apiComment.create(this.target, this.comment).then(response => {
        // Store comment author, email, authorUrl
        if (!this.configs.enableBloggerOperation || !this.bloggerComment) {
          localStorage.setItem('comment-author', this.comment.author);
          localStorage.setItem('comment-email', this.comment.email);
          localStorage.setItem('comment-authorUrl', this.comment.authorUrl);
        } // clear comment


        this.comment.content = '';
        this.previewMode = false;
        this.handleCommentCreated(response.data);

        try {
          window.onCommentSuccessEvent && window.onCommentSuccessEvent(this.comment, this.target);
        } catch (e) {
          console.error('onCommentSuccessEvent执行异常', e);
        }
      }).catch(error => {
        this.handleFailedToCreateComment(error);

        try {
          window.onCommentErrorEvent && window.onCommentErrorEvent(this.comment, error);
        } catch (e) {
          console.error('onCommentErrorEvent执行异常', e);
        }
      }).finally(() => setTimeout(() => this.commentSumbit = false, 300));
    },

    handleCommentCreated(createdComment) {
      this.clearAlertClose();

      if (createdComment.status === 'PUBLISHED') {
        this.successes.push('评论成功，刷新即可显示最新评论！');
      } else {
        // Show tips
        this.infoes.push('您的评论已经投递至博主，等待博主审核！');
      }
    },

    handleFailedToCreateComment(response) {
      this.clearAlertClose();

      if (response.status === 400) {
        this.warnings.push(response.data.message);

        if (response.data) {
          const errorDetail = response.data.data;

          if (isObject(errorDetail)) {
            Object.keys(errorDetail).forEach(key => {
              this.warnings.push(errorDetail[key]);
            });
          }
        }
      } else if (response.status === 401) {
        this.warnings.push('评论失败，博主关闭了评论功能！');
      }
    },

    handleToggleDialogEmoji() {
      this.emojiDialogVisible = !this.emojiDialogVisible;
    },

    handleImageUpload() {
      if (this.imageDialogVisible || !this.configs.imageUploadApi) return;
      const fileElem = document.createElement('input');
      fileElem.setAttribute('type', 'file');
      fileElem.style.display = 'none';
      fileElem.accept = 'image/*';
      fileElem.addEventListener('change', () => {
        const file = fileElem.files[0];
        if (!file) return;
        this.imageDialogVisible = true;
        this.infoes.push('图片上传中，请稍后……');
        const formData = new FormData();
        formData.append('image', file);
        fetch(this.configs.imageUploadApi, {
          method: 'POST',
          body: formData
        }).then(response => {
          this.clearAlertClose();

          if (response.status !== 200) {
            throw new Error(`错误状态码：${response.status}, ${response.text()}`);
          }

          return response.json();
        }).then(data => {
          if (data.code && String(data.code) !== '200' || data.status && String(data.status) !== '200') {
            this.warnings.push(`图片上传失败：${data.message ? data.message : data}`);
            return;
          }

          let image = data.data;
          this.comment.content += `\n![${image.name}](${image.url})\n`;
          this.successes.push('图片上传成功！');
        }).catch(e => {
          this.clearAlertClose();
          this.warnings.push(`图片上传失败：${e}`);
        }).finally(() => this.imageDialogVisible = false);
      });
      fileElem.click();
    },

    handleSelectEmoji(emoji) {
      this.comment.content += `[/${emoji.name}]`;
    },

    clearAlertClose() {
      this.infoes = [];
      this.warnings = [];
      this.successes = [];
    }

  }
});
;// CONCATENATED MODULE: ./src/components/CommentEditor.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_CommentEditorvue_type_script_lang_js_ = (CommentEditorvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./src/components/CommentEditor.vue





/* normalize component */
;
var CommentEditor_component = normalizeComponent(
  components_CommentEditorvue_type_script_lang_js_,
  CommentEditorvue_type_template_id_519ba41f_render,
  CommentEditorvue_type_template_id_519ba41f_staticRenderFns,
  false,
  null,
  null,
  null
  ,true
)

/* harmony default export */ var CommentEditor = (CommentEditor_component.exports);
;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/CommentNode.vue?vue&type=template&id=0589b13a&
var CommentNodevue_type_template_id_0589b13a_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.comment.no <= _vm.replyNum)?_c('li',{staticClass:"comment",class:_vm.commentClass,attrs:{"id":'li-comment-' + _vm.comment.id,"itemprop":"comment","itemtype":"https://schema.org/Comment"}},[_c('div',{ref:'comment-' + _vm.comment.id,staticClass:"comment-body",attrs:{"id":'comment-' + _vm.comment.id}},[_c('div',{staticClass:"avatar-body"},[(_vm.comment.authorUrl && _vm.comment.authorUrl !== '')?_c('a',{attrs:{"href":_vm.comment.authorUrl,"rel":"nofollow","target":"_blank"}},[_c('avatar',{attrs:{"src":_vm.avatar,"author":_vm.comment.author,"configs":_vm.configs}})],1):_c('avatar',{attrs:{"src":_vm.avatar,"author":_vm.comment.author,"configs":_vm.configs}})],1),_c('div',{staticClass:"comment-main"},[_c('div',{staticClass:"comment-meta"},[_c('div',{staticClass:"comment-author",attrs:{"itemprop":"author"}},[_c('div',{staticClass:"author-meta"},[(_vm.comment.authorUrl && _vm.comment.authorUrl !== '')?_c('a',{staticClass:"author-name",attrs:{"href":_vm.comment.authorUrl,"rel":"noopener noreferrer nofollow","target":"_blank"}},[_vm._v(_vm._s(_vm.comment.author))]):_c('a',{staticClass:"author-name"},[_vm._v(_vm._s(_vm.comment.author))]),(_vm.comment.isAdmin)?_c('span',{staticClass:"is-admin"},[_vm._v("博主")]):_vm._e()]),_c('div',{staticClass:"author-operation"},[_c('span',{staticClass:"btn btn-primary comment-reply",on:{"click":_vm.handleCreateComment}},[_vm._v(_vm._s(_vm.globalData.replyId === _vm.comment.id ? '取消回复' : '回复'))]),(_vm.configs.enableBloggerOperation)?_c('div',{staticClass:"btn comment-operation"},[_c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 120 200"}},[_c('g',[_c('circle',{attrs:{"cx":"60","cy":"31.1","r":"18.4"}}),_c('circle',{attrs:{"cx":"60","cy":"100","r":"18.4"}}),_c('circle',{attrs:{"cx":"60","cy":"168.9","r":"18.4"}})])]),_c('ol',{staticClass:"comment-operation-list"},[(_vm.commentStatus === 'published')?_c('li',{on:{"click":function () { return _vm.handleUpdateCommentStatus('RECYCLE'); }}},[_vm._v(" 回收站 ")]):_vm._e(),(_vm.commentStatus === 'recycle')?_c('li',{on:{"click":function () { return _vm.handleUpdateCommentStatus('PUBLISHED'); }}},[_vm._v("恢复")]):_vm._e(),(_vm.commentStatus === 'recycle')?_c('li',{on:{"click":_vm.handleDeleteComment}},[_vm._v("永久删除")]):_vm._e()])]):_vm._e()])]),_c('div',{staticClass:"comment-info"},[_c('time',{staticClass:"comment-time",attrs:{"datetime":_vm.comment.createTime,"itemprop":"datePublished"}},[_vm._v(_vm._s(_vm.createTimeAgo))]),(_vm.configs.showUserAgent)?_c('div',{staticClass:"useragent-info"},[_vm._v(" "+_vm._s(_vm.compileUserAgent)+" ")]):_vm._e()])]),_c('div',{staticClass:"markdown-body",attrs:{"itemprop":"description"}},[(_vm.parent)?_c('span',{staticClass:"comment-reference",on:{"click":_vm.handleToCommentRef,"mouseenter":_vm.handleHighlightParent,"mouseleave":function($event){return _vm.handleHighlightParent(false)}}},[_c('a',{attrs:{"href":'#comment-' + this.parent.id}},[_vm._v("@"+_vm._s(this.parent.author))])]):_vm._e(),_c('span',{staticClass:"markdown-content",domProps:{"innerHTML":_vm._s(_vm.compileContent)}})])])]),_c('keep-alive',[(_vm.globalData.replyId === _vm.comment.id)?_c('comment-editor',{attrs:{"configs":_vm.configs,"options":_vm.options,"replyComment":_vm.comment,"target":_vm.target,"targetId":_vm.targetId}}):_vm._e()],1),(_vm.comment.children)?_c('ul',{staticClass:"children-nodes"},[_vm._l((_vm.comment.children),function(children){return [_c('CommentNode',{key:children.id,attrs:{"comment":children,"configs":_vm.configs,"replyNum":_vm.replyNum,"isChild":true,"options":_vm.options,"parent":children.parent,"target":_vm.target,"targetId":_vm.targetId}})]})],2):_vm._e(),(!_vm.isChild && _vm.replyNum < _vm.comment.replyCount)?_c('div',{staticClass:"unfold-reply"},[_c('span',{on:{"click":function($event){_vm.replyNum += Math.max(Math.min(_vm.replyNum, 20), 6)}}},[_vm._v("展开"+_vm._s(_vm.comment.replyCount - _vm.replyNum)+"条回复")])]):_vm._e()],1):_vm._e()}
var CommentNodevue_type_template_id_0589b13a_staticRenderFns = []


// EXTERNAL MODULE: ./node_modules/ua-parser-js/src/ua-parser.js
var ua_parser = __webpack_require__(2238);
var ua_parser_default = /*#__PURE__*/__webpack_require__.n(ua_parser);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40[0].rules[0].use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/CommentNode.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//








/* harmony default export */ var CommentNodevue_type_script_lang_js_ = ({
  name: 'CommentNode',
  components: {
    Avatar: Avatar
  },
  props: {
    isChild: {
      type: Boolean,
      required: false,
      default: false
    },
    targetId: {
      type: Number,
      required: false,
      default: 0
    },
    target: {
      type: String,
      required: false,
      default: 'posts',
      validator: function (value) {
        return ['posts', 'sheets', 'journals'].indexOf(value) !== -1;
      }
    },
    parent: {
      type: Object,
      required: false
    },
    comment: {
      type: Object,
      required: false,
      default: () => {}
    },
    replyNum: {
      type: Number,
      required: true,
      default: 10
    },
    options: {
      type: Object,
      required: false,
      default: () => {}
    },
    configs: {
      type: Object,
      required: true
    }
  },

  data() {
    return {
      globalData: globals,
      // published表示正常，recycle表示回收，delete表示删除
      commentStatus: 'published'
    };
  },

  computed: {
    avatar() {
      if (!this.configs.priorityQQAvatar && this.comment.avatar) {
        return this.comment.avatar;
      }

      const gravatarDefault = this.options.comment_gravatar_default;
      const gravatarSource = this.options.gravatar_source || '//cn.gravatar.com/avatar/';
      return `${gravatarSource}${this.comment.gravatarMd5}?s=256&d=${gravatarDefault}`;
    },

    compileContent() {
      return marked.parse(renderedEmojiHtml(decodeHtml(this.comment.content, this.configs.commentHtml)));
    },

    createTimeAgo() {
      return timeAgo(this.comment.createTime);
    },

    compileUserAgent() {
      const parser = new (ua_parser_default())();
      parser.setUA(this.comment.userAgent);
      const result = parser.getResult();
      return `（${result.browser.name} ${result.browser.version} in ${result.os.name} ${result.os.version}）`;
    },

    commentClass() {
      let isChild = this.isChild ? ' ' : ' index-1';
      return ' li-comment-' + this.comment.id + isChild + ' ' + this.commentStatus;
    }

  },
  methods: {
    handleToCommentRef() {
      const shadowRoot = document.getElementById(this.targetId + '').shadowRoot;

      if (!shadowRoot) {
        return;
      }

      const commentRef = shadowRoot.getElementById(`comment-${this.parent.id}`);
      commentRef.classList.add('comment-active');
      animateScroll(commentRef, 20, (window.innerHeight || document.documentElement.clientHeight) / 4, () => setTimeout(() => commentRef.classList.remove('comment-active'), 500));
    },

    handleCreateComment() {
      if (this.globalData.replyId === this.comment.id) {
        this.globalData.replyId = 0;
      } else {
        this.globalData.replyId = this.comment.id;
        this.$nextTick(() => {
          const commentEditor = this.$el.querySelector('.comment-editor');
          const rect = commentEditor.getBoundingClientRect();
          const windowHeight = window.innerHeight || document.documentElement.clientHeight;

          if (rect.top < 0 || rect.bottom > windowHeight) {
            animateScroll(commentEditor, 20, windowHeight / 2);
          }
        });
      }
    },

    handleHighlightParent(highlight) {
      const shadowRoot = document.getElementById(this.targetId + '').shadowRoot;

      if (!shadowRoot) {
        return;
      }

      const commentRef = shadowRoot.getElementById(`comment-${this.parent.id}`);

      if (commentRef) {
        const classList = commentRef.classList;
        highlight ? classList.add('comment-ref') : classList.remove('comment-ref');
      }
    },

    handleUpdateCommentStatus(status) {
      admin_client.comment.updateStatusById(this.target, this.comment.id, status).then(() => {
        this.commentStatus = status.toLowerCase();
        window.alert('操作成功！');
      }).catch(error => {
        this.handleFailedToOperationComment(error);
      });
    },

    handleDeleteComment() {
      admin_client.comment["delete"](this.target, this.comment.id).then(() => {
        this.commentStatus = 'delete';
        window.alert('已删除该评论！');
      }).catch(error => {
        this.handleFailedToOperationComment(error);
      });
    },

    handleFailedToOperationComment(response) {
      if (response.status === 401) {
        window.alert('操作失败，博主登录状态已失效！');
      } else {
        try {
          window.alert(response.data.message);
        } catch (e) {
          window.alert(`操作失败：${response.status}！`);
        }
      }
    }

  }
});
;// CONCATENATED MODULE: ./src/components/CommentNode.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_CommentNodevue_type_script_lang_js_ = (CommentNodevue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./src/components/CommentNode.vue





/* normalize component */
;
var CommentNode_component = normalizeComponent(
  components_CommentNodevue_type_script_lang_js_,
  CommentNodevue_type_template_id_0589b13a_render,
  CommentNodevue_type_template_id_0589b13a_staticRenderFns,
  false,
  null,
  null,
  null
  ,true
)

/* harmony default export */ var CommentNode = (CommentNode_component.exports);
;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/CommentLoading.vue?vue&type=template&id=18c7d94b&
var CommentLoadingvue_type_template_id_18c7d94b_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"comment-loader-container"},[(_vm.configs.loadingStyle === 'default')?_c('div',{staticClass:"comment-loader-default"},[_c('span'),_c('span'),_c('span'),_c('span')]):(_vm.configs.loadingStyle === 'circle')?_c('div',{staticClass:"comment-loader-circle"}):(_vm.configs.loadingStyle === 'balls')?_c('div',{staticClass:"comment-loader-balls"},[_c('div'),_c('div'),_c('div')]):_vm._e()])}
var CommentLoadingvue_type_template_id_18c7d94b_staticRenderFns = []


;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40[0].rules[0].use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/CommentLoading.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var CommentLoadingvue_type_script_lang_js_ = ({
  name: 'CommentLoading',
  props: {
    configs: {
      type: Object,
      required: true
    }
  }
});
;// CONCATENATED MODULE: ./src/components/CommentLoading.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_CommentLoadingvue_type_script_lang_js_ = (CommentLoadingvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./src/components/CommentLoading.vue



function CommentLoading_injectStyles (context) {
  
  var style0 = __webpack_require__(6910)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var CommentLoading_component = normalizeComponent(
  components_CommentLoadingvue_type_script_lang_js_,
  CommentLoadingvue_type_template_id_18c7d94b_render,
  CommentLoadingvue_type_template_id_18c7d94b_staticRenderFns,
  false,
  CommentLoading_injectStyles,
  null,
  null
  ,true
)

/* harmony default export */ var CommentLoading = (CommentLoading_component.exports);
;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/Pagination.vue?vue&type=template&id=12ef2cec&
var Paginationvue_type_template_id_12ef2cec_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"comment-page"},[_c('ul',{staticClass:"page"},[_c('li',{staticClass:"page-item"},[_c('button',{staticClass:"prev-button",class:{ disabled: !_vm.hasPrev },on:{"click":_vm.handlePrevClick}},[_vm._v("上一页")])]),(_vm.firstPage != null)?_c('li',{staticClass:"page-item",class:{ active: _vm.page === _vm.firstPage }},[_c('button',{class:{ active: _vm.page === _vm.firstPage },on:{"click":function($event){return _vm.handlePageItemClick(_vm.firstPage)}}},[_vm._v(" "+_vm._s(_vm.firstPage + 1)+" ")])]):_vm._e(),_c('li',{directives:[{name:"show",rawName:"v-show",value:(_vm.hasMorePrev),expression:"hasMorePrev"}],staticClass:"page-item"},[_c('span',[_vm._v("...")])]),_vm._l((_vm.middlePages),function(middlePage){return _c('li',{key:middlePage,staticClass:"page-item",class:{ active: middlePage === _vm.page }},[_c('button',{class:{ active: middlePage === _vm.page },on:{"click":function($event){return _vm.handlePageItemClick(middlePage)}}},[_vm._v(" "+_vm._s(middlePage + 1)+" ")])])}),_c('li',{directives:[{name:"show",rawName:"v-show",value:(_vm.hasMoreNext),expression:"hasMoreNext"}],staticClass:"page-item"},[_c('span',[_vm._v("...")])]),(_vm.lastPage)?_c('li',{staticClass:"page-item",class:{ active: _vm.page === _vm.lastPage }},[_c('button',{class:{ active: _vm.page === _vm.lastPage },on:{"click":function($event){return _vm.handlePageItemClick(_vm.lastPage)}}},[_vm._v(" "+_vm._s(_vm.lastPage + 1)+" ")])]):_vm._e(),_c('li',{staticClass:"page-item"},[_c('button',{staticClass:"next-button",class:{ disabled: !_vm.hasNext },on:{"click":_vm.handleNextClick}},[_vm._v("下一页")])])],2)])}
var Paginationvue_type_template_id_12ef2cec_staticRenderFns = []


;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40[0].rules[0].use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/Pagination.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Paginationvue_type_script_lang_js_ = ({
  name: 'Pagination',
  model: {
    prop: 'page',
    event: 'change'
  },
  props: {
    page: {
      type: Number,
      required: false,
      default: 0
    },
    size: {
      type: Number,
      required: false,
      default: 10
    },
    total: {
      type: Number,
      required: false,
      default: 0
    }
  },

  data() {
    return {
      middleSize: 3
    };
  },

  computed: {
    pages() {
      return Math.ceil(this.total / this.size);
    },

    hasNext() {
      return this.page < this.pages - 1;
    },

    hasPrev() {
      return this.page > 0;
    },

    firstPage() {
      if (this.pages === 0) {
        return null;
      }

      return 0;
    },

    hasMorePrev() {
      if (this.firstPage === null || this.pages <= this.middleSize + 2) {
        return false;
      }

      return this.page >= 2 + this.middleSize / 2;
    },

    hasMoreNext() {
      if (this.lastPage === null || this.pages <= this.middleSize + 2) {
        return false;
      }

      return this.page < this.lastPage - 1 - this.middleSize / 2;
    },

    middlePages() {
      if (this.pages <= 2) {
        return [];
      }

      if (this.pages <= 2 + this.middleSize) {
        return this.range(1, this.lastPage);
      }

      const halfMiddleSize = Math.floor(this.middleSize / 2);
      let left = this.page - halfMiddleSize;
      let right = this.page + halfMiddleSize;

      if (this.page <= this.firstPage + halfMiddleSize + 1) {
        left = this.firstPage + 1;
        right = left + this.middleSize - 1;
      } else if (this.page >= this.lastPage - halfMiddleSize - 1) {
        right = this.lastPage - 1;
        left = right - this.middleSize + 1;
      }

      return this.range(left, right + 1);
    },

    lastPage() {
      if (this.pages === 0 || this.pages === 1) {
        return 0;
      }

      return this.pages - 1;
    }

  },
  methods: {
    handleNextClick() {
      if (this.hasNext) {
        this.$emit('change', this.page + 1);
      }
    },

    handlePrevClick() {
      if (this.hasPrev) {
        this.$emit('change', this.page - 1);
      }
    },

    handlePageItemClick(page) {
      this.$emit('change', page);
    },

    range(left, right) {
      if (left >= right) {
        return [];
      }

      const result = [];

      for (let i = left; i < right; i++) {
        result.push(i);
      }

      return result;
    }

  }
});
;// CONCATENATED MODULE: ./src/components/Pagination.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Paginationvue_type_script_lang_js_ = (Paginationvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./src/components/Pagination.vue



function Pagination_injectStyles (context) {
  
  var style0 = __webpack_require__(9912)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var Pagination_component = normalizeComponent(
  components_Paginationvue_type_script_lang_js_,
  Paginationvue_type_template_id_12ef2cec_render,
  Paginationvue_type_template_id_12ef2cec_staticRenderFns,
  false,
  Pagination_injectStyles,
  null,
  null
  ,true
)

/* harmony default export */ var Pagination = (Pagination_component.exports);
;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/BulletScreen.vue?vue&type=template&id=d25ca948&
var BulletScreenvue_type_template_id_d25ca948_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"show",rawName:"v-show",value:(!_vm.stopBulletScreen),expression:"!stopBulletScreen"}],staticClass:"bullet-screen-container"},[_vm._l((_vm.comments),function(comment){return [(comment.style.left)?_c('div',{key:comment.id,staticClass:"bullet-screen",class:[comment.stop ? 'stagnation' + (comment.click ? ' click' : '') : ''],style:(comment.style),on:{"click":function () { return (comment.click = true); },"mouseenter":function () { return (comment.stop = true); },"mouseleave":function () { return _vm.handleMouseleave(comment); }}},[(comment.click)?[_c('div',{staticClass:"comment-meta"},[_c('avatar',{key:comment.id,attrs:{"src":_vm.avatar(comment),"author":comment.author,"configs":_vm.configs}}),_c('div',{staticClass:"comment-author"},[_c('div',{staticClass:"author-meta"},[(comment.authorUrl && comment.authorUrl !== '')?_c('a',{staticClass:"author-name",attrs:{"href":comment.authorUrl,"rel":"noopener noreferrer nofollow","target":"_blank"}},[_vm._v(_vm._s(comment.author))]):_c('a',{staticClass:"author-name"},[_vm._v(_vm._s(comment.author))]),(comment.isAdmin)?_c('span',{staticClass:"is-admin"},[_vm._v("博主")]):_vm._e()]),_c('time',{staticClass:"comment-time",attrs:{"datetime":comment.createTime,"itemprop":"datePublished"}},[_vm._v(_vm._s(_vm.createTimeAgo(comment.createTime)))])])],1),_c('span',{staticClass:"markdown-content",domProps:{"innerHTML":_vm._s(comment.content)}})]:[_c('avatar',{key:comment.id,attrs:{"src":_vm.avatar(comment),"author":comment.author,"configs":_vm.configs}}),_c('p',{staticClass:"comment-content",domProps:{"innerHTML":_vm._s(comment.summary)}})]],2):_vm._e()]})],2)}
var BulletScreenvue_type_template_id_d25ca948_staticRenderFns = []


;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40[0].rules[0].use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/BulletScreen.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ var BulletScreenvue_type_script_lang_js_ = ({
  name: 'BulletScreen',
  components: {
    Avatar: Avatar
  },

  data() {
    return {
      loaded: false,
      comments: []
    };
  },

  props: {
    target: {
      type: String,
      required: false,
      default: 'posts',
      validator: function (value) {
        return ['posts', 'sheets', 'journals'].indexOf(value) !== -1;
      }
    },
    id: {
      type: Number,
      required: false,
      default: 0
    },
    options: {
      type: Object,
      required: false,
      default: () => {}
    },
    configs: {
      type: Object,
      required: true
    },
    stopBulletScreen: {
      type: Boolean,
      required: true
    }
  },

  created() {
    if (window.innerHeight > 500 && window.innerWidth > 768) {
      this.handleGetComments();
      this.bulletScreenAnimate();
    }
  },

  methods: {
    /* 处理鼠标离开事件 */
    handleMouseleave(comment) {
      comment.click = false;
      comment.stop = false;
    },

    /* 转换时间格式 */
    createTimeAgo(createTime) {
      return timeAgo(createTime);
    },

    /* 取得图片链接 */
    avatar(comment) {
      if (!this.configs.priorityQQAvatar && comment.avatar) {
        return comment.avatar;
      }

      const gravatarDefault = this.options.comment_gravatar_default;
      const gravatarSource = this.options.gravatar_source || '//cn.gravatar.com/avatar/';
      return `${gravatarSource}${comment.gravatarMd5}?s=256&d=${gravatarDefault}`;
    },

    /* 获取评论 */
    async handleGetComments() {
      let page = 0; // eslint-disable-next-line no-constant-condition

      while (true) {
        const {
          data
        } = await api_client.comment.listTopComments(this.target, this.id, {
          page: page++
        });
        let time = data.content.length * 100;

        for (let comment of data.content) {
          let content = marked.parse(decodeHtml(comment.content, this.configs.commentHtml));
          comment.summary = renderedEmojiHtml(buildSummary(content));
          comment.content = renderedEmojiHtml(content);
          comment.top = buildRandomNum(50, window.innerHeight - 350);
          comment.startTime = buildRandomNum(0, time);
          comment.speed = buildRandomNum(0.5, 3);
          this.$set(comment, 'style', {
            top: comment.top + 'px'
          });
          this.$set(comment, 'stop', false);
          this.$set(comment, 'click', false);
        }

        this.comments.push(...data.content);

        if (!data.hasNext) {
          break;
        }
      }

      this.loaded = true;
    },

    /* 弹幕位置处理与滚动动画 */
    bulletScreenAnimate() {
      const shadowRoot = document.getElementById(this.id + '').shadowRoot;
      let requestId;

      let _this = this;

      function draw() {
        let width = window.innerWidth;
        let height = window.innerHeight - 350;

        if (height < 50) {
          _this.comments.splice(0, _this.comments.length);

          window.cancelAnimationFrame(requestId);
          return;
        }

        for (let i = _this.comments.length - 1; i >= 0; i--) {
          let comment = _this.comments[i];
          if (comment.stop) continue;

          if (comment.startTime <= 0) {
            comment.left = comment.left ? comment.left - comment.speed : width;

            _this.$set(comment.style, 'left', comment.left + 'px');

            if (comment.top > height) {
              comment.top = buildRandomNum(50, height);

              _this.$set(comment.style, 'top', comment.top + 'px');
            }
          } else {
            comment.startTime -= 1;
          }

          if (comment.left < -420) {
            _this.comments.splice(i, 1);
          }
        }
      }

      function step() {
        if (!shadowRoot || !shadowRoot.getElementById('halo-comment') || !shadowRoot.getElementById('halo-comment').getAttribute('stop-bullet-screen')) {
          if (_this.stopBulletScreen) {
            _this.stopBulletScreen = false;

            _this.$emit('update:stopBulletScreen', false);
          }

          draw();
        } else if (!_this.stopBulletScreen) {
          _this.stopBulletScreen = true;

          _this.$emit('update:stopBulletScreen', true);
        }

        if (_this.loaded && _this.comments.length === 0) {
          window.cancelAnimationFrame(requestId);
        } else {
          requestId = window.requestAnimationFrame(step);
        }
      }

      requestId = window.requestAnimationFrame(step);
    }

  }
});
;// CONCATENATED MODULE: ./src/components/BulletScreen.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_BulletScreenvue_type_script_lang_js_ = (BulletScreenvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./src/components/BulletScreen.vue



function BulletScreen_injectStyles (context) {
  
  var style0 = __webpack_require__(4925)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var BulletScreen_component = normalizeComponent(
  components_BulletScreenvue_type_script_lang_js_,
  BulletScreenvue_type_template_id_d25ca948_render,
  BulletScreenvue_type_template_id_d25ca948_staticRenderFns,
  false,
  BulletScreen_injectStyles,
  null,
  null
  ,true
)

/* harmony default export */ var BulletScreen = (BulletScreen_component.exports);
;// CONCATENATED MODULE: ./src/components/index.js
// Register components

 // pro components






const _components = {
  CommentEditor: CommentEditor,
  CommentNode: CommentNode,
  CommentLoading: CommentLoading,
  Pagination: Pagination,
  BulletScreen: BulletScreen
};
const components = {};
Object.keys(_components).forEach(key => {
  components[key] = external_Vue_default().component(key, _components[key]);
});
marked.use({
  renderer: {
    listitem(text, task) {
      return `<li${task ? ' class="task-list-item"' : ''}>${text}</li>`;
    },

    image(href, title, text) {
      return `<a class="not-render" target="_blank" href="${href}"><img src="${href}"${text ? ` alt="${text}"` : ''}></a>`;
    },

    link(href, title, text) {
      return `<a target="_blank" href="${href}">${text}</a>`;
    }

  },
  breaks: true
});
/* harmony default export */ var src_components = ((/* unused pure expression or super */ null && (components)));
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40[0].rules[0].use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/Comment.vue?vue&type=script&lang=js&shadow
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




const defaultConfig = {
  autoLoad: true,
  showUserAgent: true,
  priorityQQAvatar: false,
  getQQInfo: false,
  commentHtml: false,
  loadingStyle: 'default',
  unfoldReplyNum: 10,
  night: false,
  replyDescSoft: false,
  enableImageUpload: false,
  enableBulletScreen: false,
  imageUploadApi: undefined,
  anonymousUserName: undefined,
  enableBloggerOperation: false,
  avatarLoading: `${"/themes/dream/source/lib/halo-comment@1.1.7/"}assets/img/loading.svg`,
  defaultAvatar: `${"/themes/dream/source/lib/halo-comment@1.1.7/"}assets/img/avatar.svg`
};
/* harmony default export */ var Commentvue_type_script_lang_js_shadow = ({
  name: 'Comment',
  props: {
    id: {
      type: Number,
      required: false,
      default: 0
    },
    type: {
      type: String,
      required: false,
      default: 'post',
      validator: function (value) {
        return ['post', 'sheet', 'journal'].indexOf(value) !== -1;
      }
    },
    configs: {
      type: [Object, String],
      required: false,
      default: () => defaultConfig
    }
  },

  data() {
    return {
      list: {
        data: [],
        loading: false,
        loaded: false,
        params: {
          page: 0
        },
        pages: 0,
        total: 0,
        size: 10
      },
      options: undefined,
      globalData: globals,
      stopBulletScreen: localStorage && localStorage.getItem('stop-bullet-screen') === 'true' || false
    };
  },

  computed: {
    target() {
      // pluralize it
      return `${this.type}s`;
    },

    mergedConfigs() {
      let externalConfigs = {};

      if (Object.prototype.toString.call(this.configs) === '[object String]') {
        externalConfigs = JSON.parse(this.configs);
      }

      defaultConfig['night'] = localStorage && localStorage.getItem('night') === 'true' || false;
      return Object.assign(defaultConfig, externalConfigs);
    }

  },

  created() {
    this.handleGetOptions();

    if (this.mergedConfigs.autoLoad) {
      this.handleGetComments();
    }
  },

  methods: {
    async handleGetComments() {
      this.list.loading = true;
      const {
        data
      } = await api_client.comment.listAsTreeView(this.target, this.id, this.list.params);
      data.content && (data.content = this.flatReplyList(data.content)) && data.content.forEach(comment => comment['replyCount'] = this.handleReplyList(comment));
      this.list.data = data.content;
      this.list.total = data.total;
      this.list.pages = data.pages;
      this.list.size = data.rpp;
      this.list.loading = false;
      this.list.loaded = true;
      this.globalData.replyId = 0;
    },

    async handleGetOptions() {
      if (this.mergedConfigs.enableBloggerOperation) {
        try {
          const {
            data
          } = await admin_client.user.getProfile();
          this.globalData.blogger = data;
        } catch (e) {
          this.mergedConfigs.enableBloggerOperation = false;
        }
      }

      const {
        data
      } = await api_client.option.comment();
      this.options = data;

      if (this.mergedConfigs.priorityQQAvatar) {
        this.options.gravatar_source = 'https://cravatar.cn/avatar/';
      }
    },

    /**
     * 回复消息扁平化，同时对消息进行排序
     * @param comments
     */
    flatReplyList(comments) {
      let replyDescSoft = this.mergedConfigs.replyDescSoft;

      let softFun = function (a, b) {
        return replyDescSoft ? b.createTime - a.createTime : a.createTime - b.createTime;
      };

      for (let comment of comments) {
        if (comment.children) {
          let replys = comment.children;
          replys.forEach(item => item.parent = comment);

          for (let i = 0; i < replys.length; i++) {
            let reply = replys[i];

            if (reply.children) {
              reply.children.forEach(item => {
                item.parent = reply;
                replys.push(item);
              });
              reply.children = null;
            }
          }

          comment.children.sort(softFun);
        }
      }

      return comments;
    },

    handleReplyList(reply, no = 0) {
      reply['no'] = no;
      reply.children && reply.children.forEach(child => no = this.handleReplyList(child, no + 1));
      return no;
    },

    handlePaginationChange(page) {
      this.list.params.page = page;
      this.handleGetComments();
    }

  }
});
;// CONCATENATED MODULE: ./src/components/Comment.vue?vue&type=script&lang=js&shadow
 /* harmony default export */ var components_Commentvue_type_script_lang_js_shadow = (Commentvue_type_script_lang_js_shadow); 
;// CONCATENATED MODULE: ./src/components/Comment.vue?shadow



function Commentshadow_injectStyles (context) {
  
  var style0 = __webpack_require__(1089)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var Commentshadow_component = normalizeComponent(
  components_Commentvue_type_script_lang_js_shadow,
  render,
  staticRenderFns,
  false,
  Commentshadow_injectStyles,
  null,
  null
  ,true
)

/* harmony default export */ var Commentshadow = (Commentshadow_component.exports);
;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-wc.js




// runtime shared by every component chunk





window.customElements.define('halo-comment', vue_wc_wrapper((external_Vue_default()), Commentshadow))
}();
/******/ })()
;
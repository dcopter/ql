const { MD5 } = require('crypto-js');
const scriptName = 'TTTL';
const $ = Env(scriptName);


let imeiArr = [
    '18FE1CC6-D3A6-4161-8754-0D9118D5B01B',
    'AD1F4273-7992-48B3-8498-946D6D212DD4',
    'A145C7C2-CB08-4C33-8D6B-48553F254753'
];

!(async () => {
    await all();
})()
    .catch((e) => {
        $.log('', `❌ ${$.name}, 失败! 原因: ${e}!`, '')
    })
    .finally(() => {
        $.done();
    })

async function all() {
    console.log(`========== 脚本执行:${new Date(new Date().getTime()).toLocaleString()} ==========\n`);

    for (let i = 0; i < imeiArr.length; i++) {
        imei = imeiArr[i];
        await LoginAndGetSessionID();
        await $.wait(randomNum(15000, 20000));

        for (let i = 0; i < 15; i++) {
            await UploadWatchVedio(i);
            await $.wait(randomNum(15000, 20000));
        }

        await Withdraw();
    }
}

function UploadWatchVedio(index) {
    id = '1';
    is_new = '0';
    time = Date.parse(new Date()) / 1000;
    type = `10`;
    key = 'Zduf4kHl2o@7*LUn';
    sign = `id=${id}&is_new=${is_new}&session_id=${session_id}&time=${time}&type=${type}&key=${key}`
    sign = MD5(sign).toString().toUpperCase();

    return new Promise((resolve, reject) => {
        const url = "http://pic.anngudao.com/tuili/api/clickLog";
        const headers = {
            "Accept": "application/json",
            "Content-Length": "102",
            "Connection": "close",
            "Accept-Encoding": "gzip, deflate",
            "App-Refer": "4",
            "Content-Type": "application/x-www-form-urlencoded",
            "User-Agent": "Reasoning/1.4.1 (iPhone; iOS 14.3; Scale/2.00)",
            "App-Version": "1.4.1",
            "Host": "pic.anngudao.com",
            "Cookie": "PHPSESSID=1vt932ejihp80nm4d6g26c8eg8",
            "Channel-Code": "ttdl",
            "App-Model": "iPhone 6s",
            "Client-Type": "2",
            "Accept-Language": "zh-Hans-CN;q=1"
        };
        const body = `id=${id}&is_new=${is_new}&session_id=${session_id}&sign=${sign}&time=${time}&type=${type}`;
        const request = {
            url: url,
            headers: headers,
            body: body
        };

        $.post(request, async (error, response, data) => {
            try {
                if (error) {
                    $.log('请求失败');
                }
                else {
                    result = JSON.parse(data);
                    $.log(`上报视频：第${index + 1}次${result.message}`);
                }
            } catch (e) {
                $.log(e)
            }
            resolve();
        })
    })
}

function LoginAndGetSessionID() {
    time = Date.parse(new Date()) / 1000;
    key = 'Zduf4kHl2o@7*LUn';
    sign = `imei=${imei}&time=${time}&key=${key}`
    sign = MD5(sign).toString().toUpperCase();

    return new Promise((resolve, reject) => {
        const url = "http://pic.anngudao.com/tuili/user/login";
        const headers = {
            "Accept": "application/json",
            "Content-Length": "95",
            "Connection": "close",
            "Accept-Encoding": "gzip, deflate",
            "App-Refer": "4",
            "Content-Type": "application/x-www-form-urlencoded",
            "User-Agent": "Reasoning/1.4.1 (iPhone; iOS 14.6; Scale/3.00)",
            "App-Version": "1.4.1",
            "Host": "pic.anngudao.com",
            "Cookie": "PHPSESSID=bkdshfrjcuup8r7c9ke1n6hgfd",
            "Channel-Code": "ttdl",
            "App-Model": "iPhone XS",
            "Client-Type": "2",
            "Accept-Language": "zh-Hans-FR;q=1, zh-Hant-HK;q=0.9, hi-FR;q=0.8, en-FR;q=0.7"
        };
        const body = `imei=${imei}&sign=${sign}&time=${time}`;
        const request = {
            url: url,
            headers: headers,
            body: body
        };

        $.post(request, async (error, response, data) => {
            try {
                if (error) {
                    $.log('请求失败');
                }
                else {
                    result = JSON.parse(data);
                    session_id = result.data.session_id;
                    $.log(`昵称  ：${result.data.nickname}`);
                }
            } catch (e) {
                $.log(e)
            }
            resolve();
        })
    })
}

function Withdraw() {
    task_id = '10008';
    time = Date.parse(new Date()) / 1000;
    type = `4`;
    key = 'Zduf4kHl2o@7*LUn';
    sign = `session_id=${session_id}&task_id=${task_id}&time=${time}&type=${type}&key=${key}`
    sign = MD5(sign).toString().toUpperCase();

    return new Promise((resolve, reject) => {
        const url = "http://pic.anngudao.com/tuili/task/getTaskAward";
        const headers = {
            "Accept": "application/json",
            "Content-Length": "101",
            "Connection": "close",
            "Accept-Encoding": "gzip, deflate",
            "App-Refer": "4",
            "Content-Type": "application/x-www-form-urlencoded",
            "User-Agent": "Reasoning/1.4.1 (iPhone; iOS 14.3; Scale/2.00)",
            "App-Version": "1.4.1",
            "Host": "pic.anngudao.com",
            "Cookie": "PHPSESSID=1vt932ejihp80nm4d6g26c8eg8",
            "Channel-Code": "ttdl",
            "App-Model": "iPhone 6s",
            "Client-Type": "2",
            "Accept-Language": "zh-Hans-CN;q=1"
        };
        const body = `session_id=${session_id}&sign=${sign}&task_id=${task_id}&time=${time}&type=${type}`;
        const request = {
            url: url,
            headers: headers,
            body: body
        };

        $.post(request, async (error, response, data) => {
            try {
                if (error) {
                    $.log('请求失败');
                }
                else {
                    result = JSON.parse(data);
                    $.log(`提现  ：${result.message}`);
                }
            } catch (e) {
                $.log(e)
            }
            resolve();
        })
    })
}

function cipheriv(en, code, data) {
    var buf1 = en.update(data, code), buf2 = en.final();
    var r = new Buffer.alloc(buf1.length + buf2.length);
    buf1.copy(r); buf2.copy(r, buf1.length);
    return r;
};

function EncryptDES(data, key, vi) {
    return data = cipheriv(CryptoJS.createCipheriv('des', key, vi), 'utf8', data).toString('base64');
};

function DecryptDES(data, key, vi) {
    return cipheriv(CryptoJS.createDecipheriv('des', key, vi), 'base64', data).toString('utf8');
};

function randomNum(minNum, maxNum) {
    switch (arguments.length) {
        case 1:
            return parseInt(Math.random() * minNum + 1, 10);
            break;
        case 2:
            return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
            break;
        default:
            return 0;
            break;
    }
}

function Env(t, e) {
    class s {
        constructor(t) {
            this.env = t
        }
        send(t, e = "GET") {
            t = "string" == typeof t ? {
                url: t
            }
                : t;
            let s = this.get;
            return "POST" === e && (s = this.post),
                new Promise((e, i) => {
                    s.call(this, t, (t, s, r) => {
                        t ? i(t) : e(s)
                    })
                })
        }
        get(t) {
            return this.send.call(this.env, t)
        }
        post(t) {
            return this.send.call(this.env, t, "POST")
        }
    }
    return new class {
        constructor(t, e) {
            this.name = t,
                this.http = new s(this),
                this.data = null,
                this.dataFile = "box.dat",
                this.logs = [],
                this.isMute = !1,
                this.isNeedRewrite = !1,
                this.logSeparator = "\n",
                this.startTime = (new Date).getTime(),
                Object.assign(this, e),
                this.log(`\n${this.name}\u811a\u672c,\u5f00\u59cb\u6267\u884c:`)
        }
        isNode() {
            return "undefined" != typeof module && !!module.exports
        }
        isQuanX() {
            return "undefined" != typeof $task
        }
        isSurge() {
            return "undefined" != typeof $httpClient && "undefined" == typeof $loon
        }
        isLoon() {
            return "undefined" != typeof $loon
        }
        toObj(t, e = null) {
            try {
                return JSON.parse(t)
            } catch {
                return e
            }
        }
        toStr(t, e = null) {
            try {
                return JSON.stringify(t)
            } catch {
                return e
            }
        }
        getjson(t, e) {
            let s = e;
            const i = this.getdata(t);
            if (i)
                try {
                    s = JSON.parse(this.getdata(t))
                } catch { }
            return s
        }
        setjson(t, e) {
            try {
                return this.setdata(JSON.stringify(t), e)
            } catch {
                return !1
            }
        }
        getScript(t) {
            return new Promise(e => {
                this.get({
                    url: t
                }, (t, s, i) => e(i))
            })
        }
        runScript(t, e) {
            return new Promise(s => {
                let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
                i = i ? i.replace(/\n/g, "").trim() : i;
                let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
                r = r ? 1 * r : 20,
                    r = e && e.timeout ? e.timeout : r;
                const [o, h] = i.split("@"),
                    a = {
                        url: `http://${h}/v1/scripting/evaluate`,
                        body: {
                            script_text: t,
                            mock_type: "cron",
                            timeout: r
                        },
                        headers: {
                            "X-Key": o,
                            Accept: "*/*"
                        }
                    };
                this.post(a, (t, e, i) => s(i))
            }).catch(t => this.logErr(t))
        }
        loaddata() {
            if (!this.isNode())
                return {}; {
                this.fs = this.fs ? this.fs : require("fs"),
                    this.path = this.path ? this.path : require("path");
                const t = this.path.resolve(this.dataFile),
                    e = this.path.resolve(process.cwd(), this.dataFile),
                    s = this.fs.existsSync(t),
                    i = !s && this.fs.existsSync(e);
                if (!s && !i)
                    return {}; {
                    const i = s ? t : e;
                    try {
                        return JSON.parse(this.fs.readFileSync(i))
                    } catch (t) {
                        return {}
                    }
                }
            }
        }
        writedata() {
            if (this.isNode()) {
                this.fs = this.fs ? this.fs : require("fs"),
                    this.path = this.path ? this.path : require("path");
                const t = this.path.resolve(this.dataFile),
                    e = this.path.resolve(process.cwd(), this.dataFile),
                    s = this.fs.existsSync(t),
                    i = !s && this.fs.existsSync(e),
                    r = JSON.stringify(this.data);
                s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r)
            }
        }
        lodash_get(t, e, s) {
            const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
            let r = t;
            for (const t of i)
                if (r = Object(r)[t], void 0 === r)
                    return s;
            return r
        }
        lodash_set(t, e, s) {
            return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t)
        }
        getdata(t) {
            let e = this.getval(t);
            if (/^@/.test(t)) {
                const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t),
                    r = s ? this.getval(s) : "";
                if (r)
                    try {
                        const t = JSON.parse(r);
                        e = t ? this.lodash_get(t, i, "") : e
                    } catch (t) {
                        e = ""
                    }
            }
            return e
        }
        setdata(t, e) {
            let s = !1;
            if (/^@/.test(e)) {
                const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e),
                    o = this.getval(i),
                    h = i ? "null" === o ? null : o || "{}" : "{}";
                try {
                    const e = JSON.parse(h);
                    this.lodash_set(e, r, t),
                        s = this.setval(JSON.stringify(e), i)
                } catch (e) {
                    const o = {};
                    this.lodash_set(o, r, t),
                        s = this.setval(JSON.stringify(o), i)
                }
            } else
                s = this.setval(t, e);
            return s
        }
        getval(t) {
            return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null
        }
        setval(t, e) {
            return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null
        }
        initGotEnv(t) {
            this.got = this.got ? this.got : require("got"),
                this.cktough = this.cktough ? this.cktough : require("tough-cookie"),
                this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar,
                t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar))
        }
        get(t, e = (() => { })) {
            t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]),
                this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
                    "X-Surge-Skip-Scripting": !1
                })), $httpClient.get(t, (t, s, i) => {
                    !t && s && (s.body = i, s.statusCode = s.status),
                        e(t, s, i)
                })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
                    hints: !1
                })), $task.fetch(t).then(t => {
                    const {
                        statusCode: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    } = t;
                    e(null, {
                        status: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    }, o)
                }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => {
                    try {
                        if (t.headers["set-cookie"]) {
                            const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
                            this.ckjar.setCookieSync(s, null),
                                e.cookieJar = this.ckjar
                        }
                    } catch (t) {
                        this.logErr(t)
                    }
                }).then(t => {
                    const {
                        statusCode: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    } = t;
                    e(null, {
                        status: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    }, o)
                }, t => {
                    const {
                        message: s,
                        response: i
                    } = t;
                    e(s, i, i && i.body)
                }))
        }
        post(t, e = (() => { })) {
            if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon())
                this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
                    "X-Surge-Skip-Scripting": !1
                })), $httpClient.post(t, (t, s, i) => {
                    !t && s && (s.body = i, s.statusCode = s.status),
                        e(t, s, i)
                });
            else if (this.isQuanX())
                t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
                    hints: !1
                })), $task.fetch(t).then(t => {
                    const {
                        statusCode: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    } = t;
                    e(null, {
                        status: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    }, o)
                }, t => e(t));
            else if (this.isNode()) {
                this.initGotEnv(t);
                const {
                    url: s,
                    ...i
                } = t;
                this.got.post(s, i).then(t => {
                    const {
                        statusCode: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    } = t;
                    e(null, {
                        status: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    }, o)
                }, t => {
                    const {
                        message: s,
                        response: i
                    } = t;
                    e(s, i, i && i.body)
                })
            }
        }
        time(t) {
            let e = {
                "M+": (new Date).getMonth() + 1,
                "d+": (new Date).getDate(),
                "H+": (new Date).getHours(),
                "m+": (new Date).getMinutes(),
                "s+": (new Date).getSeconds(),
                "q+": Math.floor(((new Date).getMonth() + 3) / 3),
                S: (new Date).getMilliseconds()
            };
            /(y+)/.test(t) && (t = t.replace(RegExp.$1, ((new Date).getFullYear() + "").substr(4 - RegExp.$1.length)));
            for (let s in e)
                new RegExp("(" + s + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? e[s] : ("00" + e[s]).substr(("" + e[s]).length)));
            return t
        }
        msg(e = t, s = "", i = "", r) {
            const o = t => {
                if (!t)
                    return t;
                if ("string" == typeof t)
                    return this.isLoon() ? t : this.isQuanX() ? {
                        "open-url": t
                    }
                        : this.isSurge() ? {
                            url: t
                        }
                            : void 0;
                if ("object" == typeof t) {
                    if (this.isLoon()) {
                        let e = t.openUrl || t.url || t["open-url"],
                            s = t.mediaUrl || t["media-url"];
                        return {
                            openUrl: e,
                            mediaUrl: s
                        }
                    }
                    if (this.isQuanX()) {
                        let e = t["open-url"] || t.url || t.openUrl,
                            s = t["media-url"] || t.mediaUrl;
                        return {
                            "open-url": e,
                            "media-url": s
                        }
                    }
                    if (this.isSurge()) {
                        let e = t.url || t.openUrl || t["open-url"];
                        return {
                            url: e
                        }
                    }
                }
            };
            this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r)));
            let h = ["", "==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="];
            h.push(e),
                s && h.push(s),
                i && h.push(i),
                console.log(h.join("\n")),
                this.logs = this.logs.concat(h)
        }
        log(...t) {
            t.length > 0 && (this.logs = [...this.logs, ...t]),
                console.log(t.join(this.logSeparator))
        }
        logErr(t, e) {
            const s = !this.isSurge() && !this.isQuanX() && !this.isLoon();
            s ? this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t.stack) : this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t)
        }
        wait(t) {
            return new Promise(e => setTimeout(e, t))
        }
        done(t = {}) {
            const e = (new Date).getTime(),
                s = (e - this.startTime) / 1e3;
            this.log("", `${this.name}\u811a\u672c, \u6267\u884c\u7ed3\u675f! \u7528\u65f6${s}\u79d2`),
                this.log(),
                (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t)
        }
    }
        (t, e)
}
!(function (e, t) {
  'object' == typeof exports && 'object' == typeof module
    ? (module.exports = t())
    : t()
})(this, function () {
  function app_js_bridge() {
    function e(e) {
      ;(n = e),
        _.isJSONString(n) && (n = JSON.parse(n)),
        s && (s(n), (s = null), (n = null))
    }
    function t() {
      'object' == typeof window.SensorsData_APP_JS_Bridge &&
        window.SensorsData_APP_JS_Bridge.sensorsdata_call_app &&
        ((n = SensorsData_APP_JS_Bridge.sensorsdata_call_app()),
        _.isJSONString(n) && (n = JSON.parse(n)))
    }
    function r() {
      if (/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream) {
        var e = document.createElement('iframe')
        e.setAttribute('src', 'sensorsanalytics://getAppInfo'),
          document.documentElement.appendChild(e),
          e.parentNode.removeChild(e),
          (e = null)
      }
    }
    var n = null,
      s = null
    ;(window.sensorsdata_app_js_bridge_call_js = function (t) {
      e(t)
    }),
      (sd.getAppStatus = function (e) {
        return (
          r(), t(), e ? void (null === n ? (s = e) : (e(n), (n = null))) : n
        )
      })
  }
  try {
    var sd = window.sensorsDataAnalytic201505,
      has_declare
    if (
      (sd
        ? ((sd = window[sd]), (has_declare = !0))
        : ((sd = {}), (has_declare = !1)),
      ('function' != typeof sd && 'object' != typeof sd) || sd.has_load_sdk)
    )
      return !1
    ;(sd._t = sd._t || 1 * new Date()),
      (sd.has_load_sdk = !0),
      'object' != typeof JSON && (JSON = {}),
      (function () {
        'use strict'
        function f(e) {
          return 10 > e ? '0' + e : e
        }
        function this_value() {
          return this.valueOf()
        }
        function quote(e) {
          return (
            (rx_escapable.lastIndex = 0),
            rx_escapable.test(e)
              ? '"' +
                e.replace(rx_escapable, function (e) {
                  var t = meta[e]
                  return 'string' == typeof t
                    ? t
                    : '\\u' + ('0000' + e.charCodeAt(0).toString(16)).slice(-4)
                }) +
                '"'
              : '"' + e + '"'
          )
        }
        function str(e, t) {
          var r,
            n,
            s,
            i,
            o,
            a = gap,
            c = t[e]
          switch (
            (c &&
              'object' == typeof c &&
              'function' == typeof c.toJSON &&
              (c = c.toJSON(e)),
            'function' == typeof rep && (c = rep.call(t, e, c)),
            typeof c)
          ) {
            case 'string':
              return quote(c)
            case 'number':
              return isFinite(c) ? String(c) : 'null'
            case 'boolean':
            case 'null':
              return String(c)
            case 'object':
              if (!c) return 'null'
              if (
                ((gap += indent),
                (o = []),
                '[object Array]' === Object.prototype.toString.apply(c))
              ) {
                for (i = c.length, r = 0; i > r; r += 1)
                  o[r] = str(r, c) || 'null'
                return (
                  (s =
                    0 === o.length
                      ? '[]'
                      : gap
                      ? '[\n' + gap + o.join(',\n' + gap) + '\n' + a + ']'
                      : '[' + o.join(',') + ']'),
                  (gap = a),
                  s
                )
              }
              if (rep && 'object' == typeof rep)
                for (i = rep.length, r = 0; i > r; r += 1)
                  'string' == typeof rep[r] &&
                    ((n = rep[r]),
                    (s = str(n, c)),
                    s && o.push(quote(n) + (gap ? ': ' : ':') + s))
              else
                for (n in c)
                  Object.prototype.hasOwnProperty.call(c, n) &&
                    ((s = str(n, c)),
                    s && o.push(quote(n) + (gap ? ': ' : ':') + s))
              return (
                (s =
                  0 === o.length
                    ? '{}'
                    : gap
                    ? '{\n' + gap + o.join(',\n' + gap) + '\n' + a + '}'
                    : '{' + o.join(',') + '}'),
                (gap = a),
                s
              )
          }
        }
        var rx_one = /^[\],:{}\s]*$/,
          rx_two = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
          rx_three = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
          rx_four = /(?:^|:|,)(?:\s*\[)+/g,
          rx_escapable = /[\\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
          rx_dangerous = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g
        'function' != typeof Date.prototype.toJSON &&
          ((Date.prototype.toJSON = function () {
            return isFinite(this.valueOf())
              ? this.getUTCFullYear() +
                  '-' +
                  f(this.getUTCMonth() + 1) +
                  '-' +
                  f(this.getUTCDate()) +
                  'T' +
                  f(this.getUTCHours()) +
                  ':' +
                  f(this.getUTCMinutes()) +
                  ':' +
                  f(this.getUTCSeconds()) +
                  'Z'
              : null
          }),
          (Boolean.prototype.toJSON = this_value),
          (Number.prototype.toJSON = this_value),
          (String.prototype.toJSON = this_value))
        var gap, indent, meta, rep
        'function' != typeof JSON.stringify &&
          ((meta = {
            '\b': '\\b',
            '	': '\\t',
            '\n': '\\n',
            '\f': '\\f',
            '\r': '\\r',
            '"': '\\"',
            '\\': '\\\\',
          }),
          (JSON.stringify = function (e, t, r) {
            var n
            if (((gap = ''), (indent = ''), 'number' == typeof r))
              for (n = 0; r > n; n += 1) indent += ' '
            else 'string' == typeof r && (indent = r)
            if (
              ((rep = t),
              t &&
                'function' != typeof t &&
                ('object' != typeof t || 'number' != typeof t.length))
            )
              throw new Error('JSON.stringify')
            return str('', { '': e })
          })),
          'function' != typeof JSON.parse &&
            (JSON.parse = function (text, reviver) {
              function walk(e, t) {
                var r,
                  n,
                  s = e[t]
                if (s && 'object' == typeof s)
                  for (r in s)
                    Object.prototype.hasOwnProperty.call(s, r) &&
                      ((n = walk(s, r)),
                      void 0 !== n ? (s[r] = n) : delete s[r])
                return reviver.call(e, t, s)
              }
              var j
              if (
                ((text = String(text)),
                (rx_dangerous.lastIndex = 0),
                rx_dangerous.test(text) &&
                  (text = text.replace(rx_dangerous, function (e) {
                    return (
                      '\\u' + ('0000' + e.charCodeAt(0).toString(16)).slice(-4)
                    )
                  })),
                rx_one.test(
                  text
                    .replace(rx_two, '@')
                    .replace(rx_three, ']')
                    .replace(rx_four, '')
                ))
              )
                return (
                  (j = eval('(' + text + ')')),
                  'function' == typeof reviver ? walk({ '': j }, '') : j
                )
              throw new SyntaxError('JSON.parse')
            })
      })()
    var _ = (sd._ = {})
    ;(sd.para_default = {
      name: 'sa',
      max_referrer_string_length: 200,
      max_string_length: 500,
      cross_subdomain: !0,
      show_log: !0,
      is_debug: !1,
      debug_mode: !1,
      debug_mode_upload: !1,
      session_time: 0,
      use_client_time: !1,
      source_channel: [],
      send_type: 'image',
      vtrack_ignore: {},
      auto_init: !0,
      is_single_page: !1,
      source_type: {},
      callback_timeout: 200,
      is_track_device_id: !1,
      use_app_track: !1,
    }),
      (sd.initPara = function (e) {
        sd.para = e || sd.para || {}
        var t
        for (t in sd.para_default)
          void 0 === sd.para[t] && (sd.para[t] = sd.para_default[t])
        'image' !== sd.para.send_type &&
          'ajax' !== sd.para.send_type &&
          'beacon' !== sd.para.send_type &&
          (sd.para.send_type = 'image'),
          !sd.para.heatmap_url &&
            sd.para.sdk_url &&
            (sd.para.heatmap_url = sd.para.sdk_url.replace(
              /[^\/]+\.js[^\/]*$/,
              'heatmap.min.js'
            ))
        var r = [
            'www.baidu.',
            'm.baidu.',
            'm.sm.cn',
            'so.com',
            'sogou.com',
            'youdao.com',
            'google.',
            'yahoo.com/',
            'bing.com/',
            'ask.com/',
          ],
          n = [
            'weibo.com',
            'renren.com',
            'kaixin001.com',
            'douban.com',
            'qzone.qq.com',
            'zhihu.com',
            'tieba.baidu.com',
            'weixin.qq.com',
          ],
          s = {
            baidu: ['wd', 'word', 'kw', 'keyword'],
            google: 'q',
            bing: 'q',
            yahoo: 'p',
            sogou: 'query',
            so: 'q',
            sm: 'q',
          }
        if (
          ('object' == typeof sd.para.source_type &&
            ((sd.para.source_type.search = _.isArray(sd.para.source_type.search)
              ? sd.para.source_type.search.concat(r)
              : r),
            (sd.para.source_type.social = _.isArray(sd.para.source_type.social)
              ? sd.para.source_type.social.concat(n)
              : n),
            (sd.para.source_type.keyword = _.isObject(
              sd.para.source_type.keyword
            )
              ? _.extend(s, sd.para.source_type.keyword)
              : s)),
          _.isObject(sd.para.heatmap) &&
            ((sd.para.heatmap.clickmap = sd.para.heatmap.clickmap || 'default'),
            (sd.para.heatmap.scroll_notice_map =
              sd.para.heatmap.scroll_notice_map || 'default'),
            (sd.para.heatmap.scroll_delay_time =
              sd.para.heatmap.scroll_delay_time || 4e3)),
          'object' == typeof sd.para.server_url && sd.para.server_url.length)
        )
          for (t = 0; t < sd.para.server_url.length; t++)
            /sa\.gif[^\/]*$/.test(sd.para.server_url[t]) ||
              (sd.para.server_url[t] = sd.para.server_url[t]
                .replace(/\/sa$/, '/sa.gif')
                .replace(/(\/sa)(\?[^\/]+)$/, '/sa.gif$2'))
        else
          /sa\.gif[^\/]*$/.test(sd.para.server_url) ||
            (sd.para.server_url = sd.para.server_url
              .replace(/\/sa$/, '/sa.gif')
              .replace(/(\/sa)(\?[^\/]+)$/, '/sa.gif$2'))
        'string' == typeof sd.para.server_url &&
          (sd.para.debug_mode_url =
            sd.para.debug_mode_url ||
            sd.para.server_url.replace('sa.gif', 'debug')),
          sd.para.noCache === !0
            ? (sd.para.noCache = '?' + new Date().getTime())
            : (sd.para.noCache = '')
      })
    var ArrayProto = Array.prototype,
      FuncProto = Function.prototype,
      ObjProto = Object.prototype,
      slice = ArrayProto.slice,
      toString = ObjProto.toString,
      hasOwnProperty = ObjProto.hasOwnProperty,
      LIB_VERSION = '1.10.1'
    sd.lib_version = LIB_VERSION
    var error_msg = [],
      is_first_visitor = !1,
      just_test_distinctid = 0,
      just_test_distinctid_2 = 0,
      just_test_distinctid_detail = 0,
      just_test_distinctid_detail2 = 0,
      source_channel_standard =
        'utm_source utm_medium utm_campaign utm_content utm_term',
      logger = 'object' == typeof logger ? logger : {}
    ;(logger.info = function () {
      if (
        ((_.sessionStorage.isSupport() &&
          'true' === sessionStorage.getItem('sensorsdata_jssdk_debug')) ||
          sd.para.show_log) &&
        ((sd.para.show_log === !0 ||
          'string' === sd.para.show_log ||
          sd.para.show_log === !1) &&
          (arguments[0] = _.formatJsonString(arguments[0])),
        'object' == typeof console && console.log)
      )
        try {
          return console.log.apply(console, arguments)
        } catch (e) {
          console.log(arguments[0])
        }
    }),
      (function () {
        var e = (FuncProto.bind, ArrayProto.forEach),
          t = ArrayProto.indexOf,
          r = Array.isArray,
          n = {},
          s = (_.each = function (t, r, s) {
            if (null == t) return !1
            if (e && t.forEach === e) t.forEach(r, s)
            else if (t.length === +t.length) {
              for (var i = 0, o = t.length; o > i; i++)
                if (i in t && r.call(s, t[i], i, t) === n) return !1
            } else
              for (var a in t)
                if (hasOwnProperty.call(t, a) && r.call(s, t[a], a, t) === n)
                  return !1
          })
        ;(_.logger = logger),
          (_.extend = function (e) {
            return (
              s(slice.call(arguments, 1), function (t) {
                for (var r in t) void 0 !== t[r] && (e[r] = t[r])
              }),
              e
            )
          }),
          (_.extend2Lev = function (e) {
            return (
              s(slice.call(arguments, 1), function (t) {
                for (var r in t)
                  void 0 !== t[r] &&
                    (_.isObject(t[r]) && _.isObject(e[r])
                      ? _.extend(e[r], t[r])
                      : (e[r] = t[r]))
              }),
              e
            )
          }),
          (_.coverExtend = function (e) {
            return (
              s(slice.call(arguments, 1), function (t) {
                for (var r in t)
                  void 0 !== t[r] && void 0 === e[r] && (e[r] = t[r])
              }),
              e
            )
          }),
          (_.isArray =
            r ||
            function (e) {
              return '[object Array]' === toString.call(e)
            }),
          (_.isFunction = function (e) {
            if (!e) return !1
            try {
              return /^\s*\bfunction\b/.test(e)
            } catch (t) {
              return !1
            }
          }),
          (_.isArguments = function (e) {
            return !(!e || !hasOwnProperty.call(e, 'callee'))
          }),
          (_.toArray = function (e) {
            return e
              ? e.toArray
                ? e.toArray()
                : _.isArray(e)
                ? slice.call(e)
                : _.isArguments(e)
                ? slice.call(e)
                : _.values(e)
              : []
          }),
          (_.values = function (e) {
            var t = []
            return null == e
              ? t
              : (s(e, function (e) {
                  t[t.length] = e
                }),
                t)
          }),
          (_.include = function (e, r) {
            var i = !1
            return null == e
              ? i
              : t && e.indexOf === t
              ? -1 != e.indexOf(r)
              : (s(e, function (e) {
                  return i || (i = e === r) ? n : void 0
                }),
                i)
          })
      })(),
      (_.inherit = function (e, t) {
        return (
          (e.prototype = new t()),
          (e.prototype.constructor = e),
          (e.superclass = t.prototype),
          e
        )
      }),
      (_.trim = function (e) {
        return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '')
      }),
      (_.isObject = function (e) {
        return '[object Object]' == toString.call(e) && null != e
      }),
      (_.isEmptyObject = function (e) {
        if (_.isObject(e)) {
          for (var t in e) if (hasOwnProperty.call(e, t)) return !1
          return !0
        }
        return !1
      }),
      (_.isUndefined = function (e) {
        return void 0 === e
      }),
      (_.isString = function (e) {
        return '[object String]' == toString.call(e)
      }),
      (_.isDate = function (e) {
        return '[object Date]' == toString.call(e)
      }),
      (_.isBoolean = function (e) {
        return '[object Boolean]' == toString.call(e)
      }),
      (_.isNumber = function (e) {
        return (
          '[object Number]' == toString.call(e) && /[\d\.]+/.test(String(e))
        )
      }),
      (_.isElement = function (e) {
        return !(!e || 1 !== e.nodeType)
      }),
      (_.isJSONString = function (e) {
        try {
          JSON.parse(e)
        } catch (t) {
          return !1
        }
        return !0
      }),
      (_.decodeURIComponent = function (e) {
        var t = e
        try {
          t = decodeURIComponent(e)
        } catch (r) {
          t = e
        }
        return t
      }),
      (_.encodeDates = function (e) {
        return (
          _.each(e, function (t, r) {
            _.isDate(t)
              ? (e[r] = _.formatDate(t))
              : _.isObject(t) && (e[r] = _.encodeDates(t))
          }),
          e
        )
      }),
      (_.now =
        Date.now ||
        function () {
          return new Date().getTime()
        }),
      (_.throttle = function (e, t, r) {
        var n,
          s,
          i,
          o = null,
          a = 0
        r || (r = {})
        var c = function () {
          ;(a = r.leading === !1 ? 0 : _.now()),
            (o = null),
            (i = e.apply(n, s)),
            o || (n = s = null)
        }
        return function () {
          var u = _.now()
          a || r.leading !== !1 || (a = u)
          var l = t - (u - a)
          return (
            (n = this),
            (s = arguments),
            0 >= l || l > t
              ? (o && (clearTimeout(o), (o = null)),
                (a = u),
                (i = e.apply(n, s)),
                o || (n = s = null))
              : o || r.trailing === !1 || (o = setTimeout(c, l)),
            i
          )
        }
      }),
      (_.hashCode = function (e) {
        if ('string' != typeof e) return 0
        var t = 0,
          r = null
        if (0 == e.length) return t
        for (var n = 0; n < e.length; n++)
          (r = e.charCodeAt(n)), (t = (t << 5) - t + r), (t &= t)
        return t
      }),
      (_.formatDate = function (e) {
        function t(e) {
          return 10 > e ? '0' + e : e
        }
        return (
          e.getFullYear() +
          '-' +
          t(e.getMonth() + 1) +
          '-' +
          t(e.getDate()) +
          ' ' +
          t(e.getHours()) +
          ':' +
          t(e.getMinutes()) +
          ':' +
          t(e.getSeconds()) +
          '.' +
          t(e.getMilliseconds())
        )
      }),
      (_.searchObjDate = function (e) {
        _.isObject(e) &&
          _.each(e, function (t, r) {
            _.isObject(t)
              ? _.searchObjDate(e[r])
              : _.isDate(t) && (e[r] = _.formatDate(t))
          })
      }),
      (_.formatJsonString = function (e) {
        try {
          return JSON.stringify(e, null, '  ')
        } catch (t) {
          return JSON.stringify(e)
        }
      }),
      (_.formatString = function (e) {
        return e.length > sd.para.max_string_length
          ? (logger.info(
              '\u5b57\u7b26\u4e32\u957f\u5ea6\u8d85\u8fc7\u9650\u5236\uff0c\u5df2\u7ecf\u505a\u622a\u53d6--' +
                e
            ),
            e.slice(0, sd.para.max_string_length))
          : e
      }),
      (_.searchObjString = function (e) {
        _.isObject(e) &&
          _.each(e, function (t, r) {
            _.isObject(t)
              ? _.searchObjString(e[r])
              : _.isString(t) && (e[r] = _.formatString(t))
          })
      }),
      (_.searchConfigData = function (e) {
        if ('object' == typeof e && e.$option) {
          var t = e.$option
          return delete e.$option, t
        }
        return {}
      }),
      (_.unique = function (e) {
        for (var t, r = [], n = {}, s = 0; s < e.length; s++)
          (t = e[s]), t in n || ((n[t] = !0), r.push(t))
        return r
      }),
      (_.strip_sa_properties = function (e) {
        return _.isObject(e)
          ? (_.each(e, function (t, r) {
              if (_.isArray(t)) {
                var n = []
                _.each(t, function (e) {
                  _.isString(e)
                    ? n.push(e)
                    : logger.info(
                        '\u60a8\u7684\u6570\u636e-',
                        r,
                        t,
                        '\u7684\u6570\u7ec4\u91cc\u7684\u503c\u5fc5\u987b\u662f\u5b57\u7b26\u4e32,\u5df2\u7ecf\u5c06\u5176\u5220\u9664'
                      )
                }),
                  0 !== n.length
                    ? (e[r] = n)
                    : (delete e[r],
                      logger.info(
                        '\u5df2\u7ecf\u5220\u9664\u7a7a\u7684\u6570\u7ec4'
                      ))
              }
              _.isString(t) ||
                _.isNumber(t) ||
                _.isDate(t) ||
                _.isBoolean(t) ||
                _.isArray(t) ||
                '$option' === r ||
                (logger.info(
                  '\u60a8\u7684\u6570\u636e-',
                  r,
                  t,
                  '-\u683c\u5f0f\u4e0d\u6ee1\u8db3\u8981\u6c42\uff0c\u6211\u4eec\u5df2\u7ecf\u5c06\u5176\u5220\u9664'
                ),
                delete e[r])
            }),
            e)
          : e
      }),
      (_.strip_empty_properties = function (e) {
        var t = {}
        return (
          _.each(e, function (e, r) {
            null != e && (t[r] = e)
          }),
          t
        )
      }),
      (_.utf8Encode = function (e) {
        e = (e + '').replace(/\r\n/g, '\n').replace(/\r/g, '\n')
        var t,
          r,
          n,
          s = '',
          i = 0
        for (t = r = 0, i = e.length, n = 0; i > n; n++) {
          var o = e.charCodeAt(n),
            a = null
          128 > o
            ? r++
            : (a =
                o > 127 && 2048 > o
                  ? String.fromCharCode((o >> 6) | 192, (63 & o) | 128)
                  : String.fromCharCode(
                      (o >> 12) | 224,
                      ((o >> 6) & 63) | 128,
                      (63 & o) | 128
                    )),
            null !== a &&
              (r > t && (s += e.substring(t, r)), (s += a), (t = r = n + 1))
        }
        return r > t && (s += e.substring(t, e.length)), s
      }),
      (_.base64Encode = function (e) {
        var t,
          r,
          n,
          s,
          i,
          o,
          a,
          c,
          u =
            'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',
          l = 0,
          d = 0,
          p = '',
          f = []
        if (!e) return e
        e = _.utf8Encode(e)
        do
          (t = e.charCodeAt(l++)),
            (r = e.charCodeAt(l++)),
            (n = e.charCodeAt(l++)),
            (c = (t << 16) | (r << 8) | n),
            (s = (c >> 18) & 63),
            (i = (c >> 12) & 63),
            (o = (c >> 6) & 63),
            (a = 63 & c),
            (f[d++] = u.charAt(s) + u.charAt(i) + u.charAt(o) + u.charAt(a))
        while (l < e.length)
        switch (((p = f.join('')), e.length % 3)) {
          case 1:
            p = p.slice(0, -2) + '=='
            break
          case 2:
            p = p.slice(0, -1) + '='
        }
        return p
      }),
      (_.UUID = (function () {
        var e = function () {
            for (var e = 1 * new Date(), t = 0; e == 1 * new Date(); ) t++
            return e.toString(16) + t.toString(16)
          },
          t = function () {
            return Math.random().toString(16).replace('.', '')
          },
          r = function (e) {
            function t(e, t) {
              var r,
                n = 0
              for (r = 0; r < t.length; r++) n |= i[r] << (8 * r)
              return e ^ n
            }
            var r,
              n,
              s = navigator.userAgent,
              i = [],
              o = 0
            for (r = 0; r < s.length; r++)
              (n = s.charCodeAt(r)),
                i.unshift(255 & n),
                i.length >= 4 && ((o = t(o, i)), (i = []))
            return i.length > 0 && (o = t(o, i)), o.toString(16)
          }
        return function () {
          var n = String(screen.height * screen.width)
          n =
            n && /\d{5,}/.test(n)
              ? n.toString(16)
              : String(31242 * Math.random())
                  .replace('.', '')
                  .slice(0, 8)
          var s = e() + '-' + t() + '-' + r() + '-' + n + '-' + e()
          return s
            ? ((just_test_distinctid_2 = 1), s)
            : ((just_test_distinctid_2 = 2),
              (
                String(Math.random()) +
                String(Math.random()) +
                String(Math.random())
              ).slice(2, 15))
        }
      })()),
      (_.getQueryParam = function (e, t) {
        ;(t = t.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]')),
          (e = _.decodeURIComponent(e))
        var r = '[\\?&]' + t + '=([^&#]*)',
          n = new RegExp(r),
          s = n.exec(e)
        return null === s || (s && 'string' != typeof s[1] && s[1].length)
          ? ''
          : _.decodeURIComponent(s[1]).replace(/\+/g, ' ')
      }),
      (_.urlParse = function (e) {
        var t = function (e) {
          ;(this._fields = {
            Username: 4,
            Password: 5,
            Port: 7,
            Protocol: 2,
            Host: 6,
            Path: 8,
            URL: 0,
            QueryString: 9,
            Fragment: 10,
          }),
            (this._values = {}),
            (this._regex = null),
            (this._regex = /^((\w+):\/\/)?((\w+):?(\w+)?@)?([^\/\?:]+):?(\d+)?(\/?[^\?#]+)?\??([^#]+)?#?(\w*)/),
            'undefined' != typeof e && this._parse(e)
        }
        return (
          (t.prototype.setUrl = function (e) {
            this._parse(e)
          }),
          (t.prototype._initValues = function () {
            for (var e in this._fields) this._values[e] = ''
          }),
          (t.prototype.addQueryString = function (e) {
            if ('object' != typeof e) return !1
            var t = this._values.QueryString || ''
            for (var r in e)
              t = new RegExp(r + '[^&]+').test(t)
                ? t.replace(new RegExp(r + '[^&]+'), r + '=' + e[r])
                : '&' === t.slice(-1)
                ? t + r + '=' + e[r]
                : '' === t
                ? r + '=' + e[r]
                : t + '&' + r + '=' + e[r]
            this._values.QueryString = t
          }),
          (t.prototype.getUrl = function () {
            var e = ''
            return (
              (e += this._values.Origin),
              (e += this._values.Port ? ':' + this._values.Port : ''),
              (e += this._values.Path),
              (e += this._values.QueryString
                ? '?' + this._values.QueryString
                : ''),
              (e += this._values.Fragment ? '#' + this._values.Fragment : '')
            )
          }),
          (t.prototype.getUrl = function () {
            var e = ''
            return (
              (e += this._values.Origin),
              (e += this._values.Port ? ':' + this._values.Port : ''),
              (e += this._values.Path),
              (e += this._values.QueryString
                ? '?' + this._values.QueryString
                : '')
            )
          }),
          (t.prototype._parse = function (e) {
            this._initValues()
            var t = this._regex.exec(e)
            if (!t) throw 'DPURLParser::_parse -> Invalid URL'
            for (var r in this._fields)
              'undefined' != typeof t[this._fields[r]] &&
                (this._values[r] = t[this._fields[r]])
            ;(this._values.Hostname = this._values.Host.replace(/:\d+$/, '')),
              (this._values.Origin =
                this._values.Protocol + '://' + this._values.Hostname)
          }),
          new t(e)
        )
      }),
      (_.draggable = function (e, t) {
        function r() {
          var e = document
          return null != e.pageXOffset
            ? { x: e.pageXOffset, y: e.pageYOffset }
            : {
                x: e.documentElement.scrollLeft,
                y: e.documentElement.scrollTop,
              }
        }
        function n(t) {
          t = t || window.event
          var n = r()
          ;(e.style.left = t.clientX + n.x - l + 'px'),
            (e.style.top = t.clientY + n.y - d + 'px'),
            t.stopPropagation ? t.stopPropagation() : (t.cancelBubble = !0)
        }
        function s(e) {
          e || (e = window.event),
            document.removeEventListener
              ? (document.removeEventListener('mouseup', s),
                document.removeEventListener('mousemove', n))
              : document.detachEvent &&
                (document.detachEvent('onmouseup', s),
                document.detachEvent('onmousemove', n)),
            e.stopPropagation ? e.stopPropagation() : (e.cancelBubble = !0)
        }
        var i = r(),
          o = t.clientX + i.x,
          a = t.clientY + i.y,
          c = e.offsetLeft,
          u = e.offsetTop,
          l = o - c,
          d = a - u
        document.addEventListener
          ? (document.addEventListener('mousemove', n),
            document.addEventListener('mouseup', s))
          : document.attachEvent &&
            (document.attachEvent('onmousemove', n),
            document.attachEvent('onmouseup', s)),
          t.stopPropagation ? t.stopPropagation() : (t.cancelBubble = !0),
          t.preventDefault ? t.preventDefault() : (t.returnValue = !1),
          (e.style.bottom = 'auto')
      }),
      (_.hasStandardBrowserEnviroment = function () {
        return window
          ? document
            ? navigator
              ? screen
                ? void 0
                : 'screen'
              : 'navigator'
            : 'document'
          : 'window'
      }),
      (_.bindReady = function (e, t) {
        t = t || window
        var r = !1,
          n = !0,
          s = t.document,
          i = s.documentElement,
          o = s.addEventListener,
          a = o ? 'addEventListener' : 'attachEvent',
          c = o ? 'removeEventListener' : 'detachEvent',
          u = o ? '' : 'on',
          l = function (n) {
            ;('readystatechange' != n.type || 'complete' == s.readyState) &&
              (('load' == n.type ? t : s)[c](u + n.type, l, !1),
              !r && (r = !0) && e.call(t, n.type || n))
          },
          d = function () {
            try {
              i.doScroll('left')
            } catch (e) {
              return void setTimeout(d, 50)
            }
            l('poll')
          }
        if ('complete' == s.readyState) e.call(t, 'lazy')
        else {
          if (!o && i.doScroll) {
            try {
              n = !t.frameElement
            } catch (p) {}
            n && d()
          }
          s[a](u + 'DOMContentLoaded', l, !1),
            s[a](u + 'readystatechange', l, !1),
            t[a](u + 'load', l, !1)
        }
      }),
      (_.addEvent = function () {
        function e(t) {
          return (
            t &&
              ((t.preventDefault = e.preventDefault),
              (t.stopPropagation = e.stopPropagation),
              (t._getPath = e._getPath)),
            t
          )
        }
        function t(t, r, n) {
          var s = function (s) {
            if ((s = s || e(window.event))) {
              s.target = s.srcElement
              var i,
                o,
                a = !0
              return (
                'function' == typeof n && (i = n(s)),
                (o = r.call(t, s)),
                (!1 === i || !1 === o) && (a = !1),
                a
              )
            }
          }
          return s
        }
        ;(e._getPath = function () {
          var e = this,
            t = function () {
              try {
                var t = e.target,
                  r = [t]
                if (null === t || null === t.parentElement) return []
                for (; null !== t.parentElement; )
                  (t = t.parentElement), r.unshift(t)
                return r
              } catch (n) {
                return []
              }
            }
          return this.path || (this.composedPath && this.composedPath()) || t()
        }),
          (e.preventDefault = function () {
            this.returnValue = !1
          }),
          (e.stopPropagation = function () {
            this.cancelBubble = !0
          })
        var r = function (r, n, s) {
          if (r && r.addEventListener)
            r.addEventListener(
              n,
              function (t) {
                ;(t._getPath = e._getPath), s.call(this, t)
              },
              !1
            )
          else {
            var i = 'on' + n,
              o = r[i]
            r[i] = t(r, s, o)
          }
        }
        r.apply(null, arguments)
      }),
      (_.addHashEvent = function (e) {
        var t = 'pushState' in window.history ? 'popstate' : 'hashchange'
        _.addEvent(window, t, e)
      }),
      (_.cookie = {
        get: function (e) {
          for (
            var t = e + '=', r = document.cookie.split(';'), n = 0;
            n < r.length;
            n++
          ) {
            for (var s = r[n]; ' ' == s.charAt(0); )
              s = s.substring(1, s.length)
            if (0 == s.indexOf(t))
              return _.decodeURIComponent(s.substring(t.length, s.length))
          }
          return null
        },
        set: function (e, t, r, n, s) {
          n = 'undefined' == typeof n ? sd.para.cross_subdomain : n
          var i = '',
            o = '',
            a = ''
          if (((r = null == r ? 73e3 : r), n)) {
            var c = _.url('domain', location.href)
            i = c ? '; domain=.' + c : ''
          }
          if (0 !== r) {
            var u = new Date()
            's' === String(r).slice(-1)
              ? u.setTime(u.getTime() + 1e3 * Number(String(r).slice(0, -1)))
              : u.setTime(u.getTime() + 24 * r * 60 * 60 * 1e3),
              (o = '; expires=' + u.toGMTString())
          }
          s && (a = '; secure'),
            (document.cookie =
              e + '=' + encodeURIComponent(t) + o + '; path=/' + i + a)
        },
        remove: function (e, t) {
          ;(t = 'undefined' == typeof t ? sd.para.cross_subdomain : t),
            _.cookie.set(e, '', -1, t)
        },
        getCookieName: function (e) {
          var t = ''
          return (
            sd.para.cross_subdomain === !1
              ? ((t = _.url('sub', location.href)),
                (t =
                  'string' == typeof t && '' !== t
                    ? 'sajssdk_2015_' + e + '_' + t
                    : 'sajssdk_2015_root_' + e))
              : (t = 'sajssdk_2015_cross_' + e),
            t
          )
        },
        getNewUser: function () {
          var e = 'new_user'
          return null !== this.get('sensorsdata_is_new_user') ||
            null !== this.get(this.getCookieName(e))
            ? !0
            : !1
        },
      }),
      (_.getEleInfo = function (e) {
        if (!e.target) return !1
        var t = e.target,
          r = t.tagName.toLowerCase(),
          n = {}
        ;(n.$element_type = r),
          (n.$element_name = t.getAttribute('name')),
          (n.$element_id = t.getAttribute('id')),
          (n.$element_class_name =
            'string' == typeof t.className ? t.className : null),
          (n.$element_target_url = t.getAttribute('href'))
        var s = ''
        return (
          t.textContent
            ? (s = _.trim(t.textContent))
            : t.innerText && (s = _.trim(t.innerText)),
          s &&
            (s = s
              .replace(/[\r\n]/g, ' ')
              .replace(/[ ]+/g, ' ')
              .substring(0, 255)),
          (n.$element_content = s || ''),
          'input' === r &&
            ('button' === t.type || 'submit' === t.type
              ? (n.$element_content = t.value || '')
              : sd.para.heatmap &&
                'function' == typeof sd.para.heatmap.collect_input &&
                sd.para.heatmap.collect_input(t) &&
                (n.$element_content = t.value || '')),
          (n = _.strip_empty_properties(n)),
          (n.$url = location.href),
          (n.$url_path = location.pathname),
          (n.$title = document.title),
          n
        )
      }),
      (_.localStorage = {
        get: function (e) {
          return window.localStorage.getItem(e)
        },
        parse: function (e) {
          var t
          try {
            t = JSON.parse(_.localStorage.get(e)) || null
          } catch (r) {}
          return t
        },
        set: function (e, t) {
          window.localStorage.setItem(e, t)
        },
        remove: function (e) {
          window.localStorage.removeItem(e)
        },
        isSupport: function () {
          var e = !0
          try {
            var t = '__sensorsdatasupport__',
              r = 'testIsSupportStorage'
            _.localStorage.set(t, r),
              _.localStorage.get(t) !== r && (e = !1),
              _.localStorage.remove(t)
          } catch (n) {
            e = !1
          }
          return e
        },
      }),
      (_.sessionStorage = {
        isSupport: function () {
          var e = !0,
            t = '__sensorsdatasupport__',
            r = 'testIsSupportStorage'
          try {
            sessionStorage && sessionStorage.setItem
              ? (sessionStorage.setItem(t, r),
                sessionStorage.removeItem(t, r),
                (e = !0))
              : (e = !1)
          } catch (n) {
            e = !1
          }
          return e
        },
      }),
      (_.xhr = function (e) {
        if (e) {
          var t = new XMLHttpRequest()
          return 'withCredentials' in t
            ? t
            : 'undefined' != typeof XDomainRequest
            ? new XDomainRequest()
            : t
        }
        if (XMLHttpRequest) return new XMLHttpRequest()
        if (window.ActiveXObject)
          try {
            return new ActiveXObject('Msxml2.XMLHTTP')
          } catch (r) {
            try {
              return new ActiveXObject('Microsoft.XMLHTTP')
            } catch (r) {}
          }
      }),
      (_.ajax = function (e) {
        function t(e) {
          if (!e) return ''
          try {
            return JSON.parse(e)
          } catch (t) {
            return {}
          }
        }
        e.credentials = 'undefined' == typeof e.credentials ? !0 : e.credentials
        var r = _.xhr(e.cors)
        e.type || (e.type = e.data ? 'POST' : 'GET'),
          (e = _.extend({ success: function () {}, error: function () {} }, e)),
          (r.onreadystatechange = function () {
            4 == r.readyState &&
              ((r.status >= 200 && r.status < 300) || 304 == r.status
                ? e.success(t(r.responseText))
                : e.error(t(r.responseText), r.status),
              (r.onreadystatechange = null),
              (r.onload = null))
          }),
          r.open(e.type, e.url, !0)
        try {
          if ((e.credentials && (r.withCredentials = !0), _.isObject(e.header)))
            for (var n in e.header) r.setRequestHeader(n, e.header[n])
          e.data &&
            (e.cors || r.setRequestHeader('X-Requested-With', 'XMLHttpRequest'),
            'application/json' === e.contentType
              ? r.setRequestHeader(
                  'Content-type',
                  'application/json; charset=UTF-8'
                )
              : r.setRequestHeader(
                  'Content-type',
                  'application/x-www-form-urlencoded'
                ))
        } catch (s) {}
        r.send(e.data || null)
      }),
      (_.loadScript = function (e) {
        e = _.extend(
          {
            success: function () {},
            error: function () {},
            appendCall: function (e) {
              document.getElementsByTagName('head')[0].appendChild(e)
            },
          },
          e
        )
        var t = null
        'css' === e.type &&
          ((t = document.createElement('link')),
          (t.rel = 'stylesheet'),
          (t.href = e.url)),
          'js' === e.type &&
            ((t = document.createElement('script')),
            (t.async = 'async'),
            t.setAttribute('charset', 'UTF-8'),
            (t.src = e.url),
            (t.type = 'text/javascript')),
          (t.onload = t.onreadystatechange = function () {
            ;(this.readyState &&
              'loaded' !== this.readyState &&
              'complete' !== this.readyState) ||
              (e.success(), (t.onload = t.onreadystatechange = null))
          }),
          (t.onerror = function () {
            e.error(), (t.onerror = null)
          }),
          e.appendCall(t)
      }),
      (_.url = (function () {
        function e() {
          return new RegExp(
            /(.*?)\.?([^\.]*?)\.(com|net|org|biz|ws|in|me|co\.uk|co|org\.uk|ltd\.uk|plc\.uk|me\.uk|edu|mil|br\.com|cn\.com|eu\.com|hu\.com|no\.com|qc\.com|sa\.com|se\.com|se\.net|us\.com|uy\.com|ac|co\.ac|gv\.ac|or\.ac|ac\.ac|af|am|as|at|ac\.at|co\.at|gv\.at|or\.at|asn\.au|com\.au|edu\.au|org\.au|net\.au|id\.au|be|ac\.be|adm\.br|adv\.br|am\.br|arq\.br|art\.br|bio\.br|cng\.br|cnt\.br|com\.br|ecn\.br|eng\.br|esp\.br|etc\.br|eti\.br|fm\.br|fot\.br|fst\.br|g12\.br|gov\.br|ind\.br|inf\.br|jor\.br|lel\.br|med\.br|mil\.br|net\.br|nom\.br|ntr\.br|odo\.br|org\.br|ppg\.br|pro\.br|psc\.br|psi\.br|rec\.br|slg\.br|tmp\.br|tur\.br|tv\.br|vet\.br|zlg\.br|br|ab\.ca|bc\.ca|mb\.ca|nb\.ca|nf\.ca|ns\.ca|nt\.ca|on\.ca|pe\.ca|qc\.ca|sk\.ca|yk\.ca|ca|cc|ac\.cn|net\.cn|com\.cn|edu\.cn|gov\.cn|org\.cn|bj\.cn|sh\.cn|tj\.cn|cq\.cn|he\.cn|nm\.cn|ln\.cn|jl\.cn|hl\.cn|js\.cn|zj\.cn|ah\.cn|gd\.cn|gx\.cn|hi\.cn|sc\.cn|gz\.cn|yn\.cn|xz\.cn|sn\.cn|gs\.cn|qh\.cn|nx\.cn|xj\.cn|tw\.cn|hk\.cn|mo\.cn|cn|cx|cz|de|dk|fo|com\.ec|tm\.fr|com\.fr|asso\.fr|presse\.fr|fr|gf|gs|co\.il|net\.il|ac\.il|k12\.il|gov\.il|muni\.il|ac\.in|co\.in|org\.in|ernet\.in|gov\.in|net\.in|res\.in|is|it|ac\.jp|co\.jp|go\.jp|or\.jp|ne\.jp|ac\.kr|co\.kr|go\.kr|ne\.kr|nm\.kr|or\.kr|li|lt|lu|asso\.mc|tm\.mc|com\.mm|org\.mm|net\.mm|edu\.mm|gov\.mm|ms|nl|no|nu|pl|ro|org\.ro|store\.ro|tm\.ro|firm\.ro|www\.ro|arts\.ro|rec\.ro|info\.ro|nom\.ro|nt\.ro|se|si|com\.sg|org\.sg|net\.sg|gov\.sg|sk|st|tf|ac\.th|co\.th|go\.th|mi\.th|net\.th|or\.th|tm|to|com\.tr|edu\.tr|gov\.tr|k12\.tr|net\.tr|org\.tr|com\.tw|org\.tw|net\.tw|ac\.uk|uk\.com|uk\.net|gb\.com|gb\.net|vg|sh|kz|ch|info|ua|gov|name|pro|ie|hk|com\.hk|org\.hk|net\.hk|edu\.hk|us|tk|cd|by|ad|lv|eu\.lv|bz|es|jp|cl|ag|mobi|eu|co\.nz|org\.nz|net\.nz|maori\.nz|iwi\.nz|io|la|md|sc|sg|vc|tw|travel|my|se|tv|pt|com\.pt|edu\.pt|asia|fi|com\.ve|net\.ve|fi|org\.ve|web\.ve|info\.ve|co\.ve|tel|im|gr|ru|net\.ru|org\.ru|hr|com\.hr|ly|xyz)$/
          )
        }
        function t(e) {
          return _.decodeURIComponent(e.replace(/\+/g, ' '))
        }
        function r(e, t) {
          var r = e.charAt(0),
            n = t.split(r)
          return r === e
            ? n
            : ((e = parseInt(e.substring(1), 10)),
              n[0 > e ? n.length + e : e - 1])
        }
        function n(e, r) {
          for (
            var n = e.charAt(0),
              s = r.split('&'),
              i = [],
              o = {},
              a = [],
              c = e.substring(1),
              u = 0,
              l = s.length;
            l > u;
            u++
          )
            if (
              ((i = s[u].match(/(.*?)=(.*)/)),
              i || (i = [s[u], s[u], '']),
              '' !== i[1].replace(/\s/g, ''))
            ) {
              if (((i[2] = t(i[2] || '')), c === i[1])) return i[2]
              ;(a = i[1].match(/(.*)\[([0-9]+)\]/)),
                a
                  ? ((o[a[1]] = o[a[1]] || []), (o[a[1]][a[2]] = i[2]))
                  : (o[i[1]] = i[2])
            }
          return n === e ? o : o[c]
        }
        return function (t, s) {
          var i,
            o = {}
          if ('tld?' === t) return e()
          if (((s = s || window.location.toString()), !t)) return s
          if (((t = t.toString()), (i = s.match(/^mailto:([^\/].+)/))))
            (o.protocol = 'mailto'), (o.email = i[1])
          else {
            if (
              ((i = s.match(/(.*?)\/#\!(.*)/)) && (s = i[1] + i[2]),
              (i = s.match(/(.*?)#(.*)/)) && ((o.hash = i[2]), (s = i[1])),
              o.hash && t.match(/^#/))
            )
              return n(t, o.hash)
            if (
              ((i = s.match(/(.*?)\?(.*)/)) && ((o.query = i[2]), (s = i[1])),
              o.query && t.match(/^\?/))
            )
              return n(t, o.query)
            if (
              ((i = s.match(/(.*?)\:?\/\/(.*)/)) &&
                ((o.protocol = i[1].toLowerCase()), (s = i[2])),
              (i = s.match(/(.*?)(\/.*)/)) && ((o.path = i[2]), (s = i[1])),
              (o.path = (o.path || '')
                .replace(/^([^\/])/, '/$1')
                .replace(/\/$/, '')),
              t.match(/^[\-0-9]+$/) && (t = t.replace(/^([^\/])/, '/$1')),
              t.match(/^\//))
            )
              return r(t, o.path.substring(1))
            if (
              ((i = r('/-1', o.path.substring(1))),
              i &&
                (i = i.match(/(.*?)\.(.*)/)) &&
                ((o.file = i[0]), (o.filename = i[1]), (o.fileext = i[2])),
              (i = s.match(/(.*)\:([0-9]+)$/)) && ((o.port = i[2]), (s = i[1])),
              (i = s.match(/(.*?)@(.*)/)) && ((o.auth = i[1]), (s = i[2])),
              o.auth &&
                ((i = o.auth.match(/(.*)\:(.*)/)),
                (o.user = i ? i[1] : o.auth),
                (o.pass = i ? i[2] : void 0)),
              (o.hostname = s.toLowerCase()),
              '.' === t.charAt(0))
            )
              return r(t, o.hostname)
            e() &&
              ((i = o.hostname.match(e())),
              i &&
                ((o.tld = i[3]),
                (o.domain = i[2] ? i[2] + '.' + i[3] : void 0),
                (o.sub = i[1] || void 0))),
              (o.port = o.port || ('https' === o.protocol ? '443' : '80')),
              (o.protocol = o.protocol || ('443' === o.port ? 'https' : 'http'))
          }
          return t in o ? o[t] : '{}' === t ? o : ''
        }
      })()),
      (_.ry = function (e) {
        return new _.ry.init(e)
      }),
      (_.ry.init = function (e) {
        this.ele = e
      }),
      (_.ry.init.prototype = {
        addClass: function (e) {
          var t = ' ' + this.ele.className + ' '
          return (
            -1 === t.indexOf(' ' + e + ' ') &&
              (this.ele.className =
                this.ele.className +
                ('' === this.ele.className ? '' : ' ') +
                e),
            this
          )
        },
        removeClass: function (e) {
          var t = ' ' + this.ele.className + ' '
          return (
            -1 !== t.indexOf(' ' + e + ' ') &&
              (this.ele.className = t.replace(' ' + e + ' ', ' ').slice(1, -1)),
            this
          )
        },
        hasClass: function (e) {
          var t = ' ' + this.ele.className + ' '
          return -1 !== t.indexOf(' ' + e + ' ') ? !0 : !1
        },
        attr: function (e, t) {
          return 'string' == typeof e && _.isUndefined(t)
            ? this.ele.getAttribute(e)
            : ('string' == typeof e &&
                ((t = String(t)), this.ele.setAttribute(e, t)),
              this)
        },
        offset: function () {
          var e = this.ele.getBoundingClientRect()
          if (e.width || e.height) {
            var t = this.ele.ownerDocument,
              r = t.documentElement
            return {
              top: e.top + window.pageYOffset - r.clientTop,
              left: e.left + window.pageXOffset - r.clientLeft,
            }
          }
          return { top: 0, left: 0 }
        },
        getSize: function () {
          if (!window.getComputedStyle)
            return {
              width: this.ele.offsetWidth,
              height: this.ele.offsetHeight,
            }
          try {
            var e = this.ele.getBoundingClientRect()
            return { width: e.width, height: e.height }
          } catch (t) {
            return { width: 0, height: 0 }
          }
        },
        getStyle: function (e) {
          return this.ele.currentStyle
            ? this.ele.currentStyle[e]
            : this.ele.ownerDocument.defaultView
                .getComputedStyle(this.ele, null)
                .getPropertyValue(e)
        },
        wrap: function (e) {
          var t = document.createElement(e)
          return (
            this.ele.parentNode.insertBefore(t, this.ele),
            t.appendChild(this.ele),
            _.ry(t)
          )
        },
        getCssStyle: function (e) {
          var t = this.ele.style.getPropertyValue(e)
          if (t) return t
          var r = null
          if (
            ('function' == typeof window.getMatchedCSSRules &&
              (r = getMatchedCSSRules(this.ele)),
            !r || !_.isArray(r))
          )
            return null
          for (var n = r.length - 1; n >= 0; n--) {
            var s = r[n]
            if ((t = s.style.getPropertyValue(e))) return t
          }
        },
        sibling: function (e, t) {
          for (; (e = e[t]) && 1 !== e.nodeType; );
          return e
        },
        next: function () {
          return this.sibling(this.ele, 'nextSibling')
        },
        prev: function (e) {
          return this.sibling(this.ele, 'previousSibling')
        },
        siblings: function (e) {
          return this.siblings((this.ele.parentNode || {}).firstChild, this.ele)
        },
        children: function (e) {
          return this.siblings(this.ele.firstChild)
        },
        parent: function () {
          var e = this.ele.parentNode
          return (e = e && 11 !== e.nodeType ? e : null), _.ry(e)
        },
      }),
      (_.jssdkDebug = function (e, t) {
        if (sd.para.is_debug)
          if (_.isString(e)) sd.registerPage({ _jssdk_debug_info: e })
          else {
            var r = store.getCookieName(),
              n = document.cookie.match(new RegExp(r + '[^;]+'))
            ;(r = n && n[0] ? n[0] : ''),
              (e._jssdk_debug_info = '(' + r + ')' + navigator.userAgent)
          }
      }),
      (_.strToUnicode = function (e) {
        if ('string' != typeof e)
          return logger.info('\u8f6c\u6362unicode\u9519\u8bef', e), e
        for (var t = '', r = 0; r < e.length; r++)
          t += '\\' + e.charCodeAt(r).toString(16)
        return t
      }),
      (_.querySelectorAll = function (e) {
        if ('string' != typeof e)
          return logger.info('\u9009\u62e9\u5668\u9519\u8bef', e), []
        var t = e.split(' ')
        1 === t.length
          ? /^#\d+/.test(t[0]) && (e = '#' + _.strToUnicode(t[0].slice(1)))
          : /^#\d+/.test(t[0]) &&
            ((t[0] = '#' + _.strToUnicode(t[0].slice(1))), (e = t.join(' ')))
        try {
          return document.querySelectorAll(e)
        } catch (r) {
          return logger.info('\u9519\u8bef', e), []
        }
      }),
      (_.getReferrer = function (e) {
        var e = e || document.referrer
        return 'string' != typeof e
          ? '\u53d6\u503c\u5f02\u5e38_referrer\u5f02\u5e38_' + String(e)
          : (0 === e.indexOf('https://www.baidu.com/') && (e = e.split('?')[0]),
            (e = e.slice(0, sd.para.max_referrer_string_length)),
            'string' == typeof e ? e : '')
      }),
      (_.getKeywordFromReferrer = function () {
        var e = sd.para.source_type.keyword
        if (document && 'string' == typeof document.referrer) {
          if (0 === document.referrer.indexOf('http')) {
            var t = _.url('domain', document.referrer),
              r = _.url('?', document.referrer),
              n = null
            for (var s in e)
              if (0 === t.indexOf(s) && 'object' == typeof r)
                if (((n = e[s]), _.isArray(n))) {
                  for (var s = 0; s < n.length; s++) if (r[n[s]]) return r[n[s]]
                } else if (r[n]) return r[n]
            return '\u672a\u53d6\u5230\u503c'
          }
          return '' === document.referrer
            ? '\u672a\u53d6\u5230\u503c_\u76f4\u63a5\u6253\u5f00'
            : '\u672a\u53d6\u5230\u503c_\u975ehttp\u7684url'
        }
        return (
          '\u53d6\u503c\u5f02\u5e38_referrer\u5f02\u5e38_' +
          String(document.referrer)
        )
      }),
      (_.getSourceFromReferrer = function () {
        function e(e, t) {
          for (var r = 0; r < e.length; r++)
            if (-1 !== t.split('?')[0].indexOf(e[r])) return !0
        }
        var t = sd.para.source_type.search,
          r = sd.para.source_type.social,
          n = document.referrer || '',
          s = _.info.pageProp.url
        if (s) {
          var i = s.match(
            /(utm_source|utm_medium|utm_campaign|utm_content|utm_term)\=[^&]+/
          )
          return i && i[0]
            ? '\u4ed8\u8d39\u5e7f\u544a\u6d41\u91cf'
            : e(t, n)
            ? '\u81ea\u7136\u641c\u7d22\u6d41\u91cf'
            : e(r, n)
            ? '\u793e\u4ea4\u7f51\u7ad9\u6d41\u91cf'
            : '' === n
            ? '\u76f4\u63a5\u6d41\u91cf'
            : '\u5f15\u8350\u6d41\u91cf'
        }
        return '\u83b7\u53d6url\u5f02\u5e38'
      }),
      (_.info = {
        initPage: function () {
          var e = _.getReferrer(),
            t = e ? _.url('hostname', e) : e,
            r = e ? _.url('domain', e) : e,
            n = location.href,
            s = n ? _.url('hostname', n) : n,
            i = n ? _.url('domain', n) : n
          e && !r && _.jssdkDebug('referrer_domain\u5f02\u5e38_' + e + '_' + r),
            i || _.jssdkDebug('url_domain\u5f02\u5e38_' + n + '_' + i),
            (this.pageProp = {
              referrer: e,
              referrer_host: t,
              referrer_domain: r,
              url: n,
              url_host: s,
              url_domain: i,
            })
        },
        pageProp: {},
        campaignParams: function () {
          var e = source_channel_standard.split(' '),
            t = '',
            r = {}
          return (
            _.isArray(sd.para.source_channel) &&
              sd.para.source_channel.length > 0 &&
              ((e = e.concat(sd.para.source_channel)), (e = _.unique(e))),
            _.each(e, function (e) {
              ;(t = _.getQueryParam(location.href, e)), t.length && (r[e] = t)
            }),
            r
          )
        },
        campaignParamsStandard: function (e, t) {
          ;(e = e || ''), (t = t || '')
          var r = _.info.campaignParams(),
            n = {},
            s = {}
          for (var i in r)
            -1 !== (' ' + source_channel_standard + ' ').indexOf(' ' + i + ' ')
              ? (n[e + i] = r[i])
              : (s[t + i] = r[i])
          return { $utms: n, otherUtms: s }
        },
        properties: function () {
          return {
            $screen_height: Number(screen.height) || 0,
            $screen_width: Number(screen.width) || 0,
            $lib: 'js',
            $lib_version: String(LIB_VERSION),
          }
        },
        currentProps: {},
        register: function (e) {
          _.extend(_.info.currentProps, e)
        },
      }),
      (_.autoExeQueue = function () {
        var e = {
          items: [],
          enqueue: function (e) {
            this.items.push(e), this.start()
          },
          dequeue: function () {
            return this.items.shift()
          },
          getCurrentItem: function () {
            return this.items[0]
          },
          isRun: !1,
          start: function () {
            this.items.length > 0 &&
              !this.isRun &&
              ((this.isRun = !0), this.getCurrentItem().start())
          },
          close: function () {
            this.dequeue(), (this.isRun = !1), this.start()
          },
        }
        return e
      })
    var dataSend = {}
    ;(dataSend.getSendUrl = function (e, t) {
      var r = _.base64Encode(t),
        n = 'crc=' + _.hashCode(r)
      return -1 !== e.indexOf('?')
        ? e + '&data=' + encodeURIComponent(r) + '&ext=' + encodeURIComponent(n)
        : e + '?data=' + encodeURIComponent(r) + '&ext=' + encodeURIComponent(n)
    }),
      (dataSend.getSendData = function (e) {
        var t = _.base64Encode(e),
          r = 'crc=' + _.hashCode(t)
        return 'data=' + encodeURIComponent(t) + '&ext=' + encodeURIComponent(r)
      }),
      (dataSend.getInstance = function (e) {
        var t = {}
        t =
          !e.config ||
          ('image' !== e.config.send_type &&
            'ajax' !== e.config.send_type &&
            'beacon' !== e.config.send_type)
            ? new this[sd.para.send_type](e)
            : new this[e.config.send_type](e)
        var r = t.start
        return (
          (t.start = function () {
            var e = this
            r.apply(this, arguments),
              setTimeout(function () {
                e.isEnd()
              }, sd.para.callback_timeout)
          }),
          (t.end = function () {
            this.callback && this.callback()
          }),
          (t.isEnd = function () {
            this.received || ((this.received = !0), this.end(), this.close())
          }),
          t
        )
      }),
      (dataSend.image = function (e) {
        ;(this.callback = e.callback),
          (this.img = document.createElement('img')),
          (this.img.width = 1),
          (this.img.height = 1),
          (this.data = e.data),
          (this.server_url = dataSend.getSendUrl(e.server_url, e.data))
      }),
      (dataSend.image.prototype.start = function () {
        var e = this
        new Date()
        ;(this.img.onload = function (t) {
          ;(this.onload = null), e.isEnd()
        }),
          (this.img.onerror = function (t) {
            ;(this.onerror = null), e.isEnd()
          }),
          (this.img.onabort = function (t) {
            ;(this.onabort = null), e.isEnd()
          }),
          (this.img.src = this.server_url)
      }),
      (dataSend.ajax = function (e) {
        ;(this.callback = e.callback),
          (this.server_url = e.server_url),
          (this.data = dataSend.getSendData(e.data))
      }),
      (dataSend.ajax.prototype.start = function () {
        var e = this
        new Date()
        _.ajax({
          url: this.server_url,
          type: 'POST',
          data: this.data,
          credentials: !1,
          cors: !0,
          success: function () {
            e.isEnd()
          },
          error: function () {
            e.isEnd()
          },
        })
      }),
      (dataSend.beacon = function (e) {
        ;(this.callback = e.callback),
          (this.server_url = e.server_url),
          (this.data = dataSend.getSendData(e.data))
      }),
      (dataSend.beacon.prototype.start = function () {
        var e = this
        'object' == typeof navigator &&
          'function' == typeof navigator.sendBeacon &&
          navigator.sendBeacon(this.server_url, this.data),
          setTimeout(function () {
            e.isEnd()
          }, 40)
      })
    var sendState = {}
    ;(sd.sendState = sendState),
      (sendState.queue = _.autoExeQueue()),
      (sendState.requestData = null),
      (sendState.getSendCall = function (e, t, r) {
        if (sd.is_heatmap_render_mode) return !1
        var n = e
        if (
          ((e = JSON.stringify(e)),
          logger.info(n),
          (this.requestData = { data: e, config: t, callback: r }),
          sd.para.use_app_track === !0 || 'only' === sd.para.use_app_track)
        )
          if (
            'object' == typeof SensorsData_APP_JS_Bridge &&
            (SensorsData_APP_JS_Bridge.sensorsdata_verify ||
              SensorsData_APP_JS_Bridge.sensorsdata_track)
          )
            SensorsData_APP_JS_Bridge.sensorsdata_verify
              ? SensorsData_APP_JS_Bridge.sensorsdata_verify(
                  JSON.stringify(
                    _.extend({ server_url: sd.para.server_url }, n)
                  )
                )
                ? 'function' == typeof r && r()
                : this.prepareServerUrl()
              : (SensorsData_APP_JS_Bridge.sensorsdata_track(
                  JSON.stringify(
                    _.extend({ server_url: sd.para.server_url }, n)
                  )
                ),
                'function' == typeof r && r())
          else if (
            (!/sensors-verify/.test(navigator.userAgent) &&
              !/sa-sdk-ios/.test(navigator.userAgent)) ||
            window.MSStream
          )
            sd.para.use_app_track === !0 && this.prepareServerUrl()
          else {
            var s = null
            if (/sensors-verify/.test(navigator.userAgent)) {
              var i = navigator.userAgent.match(/sensors-verify\/([^\s]+)/)
              if (
                i &&
                i[0] &&
                'string' == typeof i[1] &&
                2 === i[1].split('?').length
              ) {
                i = i[1].split('?')
                var o = null,
                  a = null
                try {
                  ;(o = _.url('hostname', sd.para.server_url)),
                    (a = _.url('?project', sd.para.server_url) || 'default')
                } catch (c) {}
                o && o === i[0] && a && a === i[1]
                  ? ((s = document.createElement('iframe')),
                    s.setAttribute(
                      'src',
                      'sensorsanalytics://trackEvent?event=' +
                        encodeURIComponent(
                          JSON.stringify(
                            _.extend({ server_url: sd.para.server_url }, n)
                          )
                        )
                    ),
                    document.documentElement.appendChild(s),
                    s.parentNode.removeChild(s),
                    (s = null),
                    'function' == typeof r && r())
                  : this.prepareServerUrl()
              }
            } else
              (s = document.createElement('iframe')),
                s.setAttribute(
                  'src',
                  'sensorsanalytics://trackEvent?event=' +
                    encodeURIComponent(
                      JSON.stringify(
                        _.extend({ server_url: sd.para.server_url }, n)
                      )
                    )
                ),
                document.documentElement.appendChild(s),
                s.parentNode.removeChild(s),
                (s = null),
                'function' == typeof r && r()
          }
        else
          'mui' === sd.para.use_app_track
            ? _.isObject(window.plus) &&
              window.plus.SDAnalytics &&
              window.plus.SDAnalytics.trackH5Event &&
              window.plus.SDAnalytics.trackH5Event(e)
            : this.prepareServerUrl()
      }),
      (sendState.prepareServerUrl = function () {
        if (
          'object' == typeof this.requestData.config &&
          this.requestData.config.server_url
        )
          this.sendCall(
            this.requestData.config.server_url,
            this.requestData.callback
          )
        else if (_.isArray(sd.para.server_url))
          for (var e = 0; e < sd.para.server_url.length; e++)
            this.sendCall(sd.para.server_url[e])
        else this.sendCall(sd.para.server_url, this.requestData.callback)
      }),
      (sendState.sendCall = function (e, t) {
        var r = dataSend.getInstance({
            server_url: e,
            data: this.requestData.data,
            callback: t,
            config: this.requestData.config,
          }),
          n = this
        ;(r.close = function () {
          n.queue.close()
        }),
          this.queue.enqueue(r)
      })
    var saNewUser = {
        checkIsAddSign: function (e) {
          'track' === e.type &&
            (_.cookie.getNewUser()
              ? (e.properties.$is_first_day = !0)
              : (e.properties.$is_first_day = !1))
        },
        is_first_visit_time: !1,
        checkIsFirstTime: function (e) {
          'track' === e.type &&
            '$pageview' === e.event &&
            (this.is_first_visit_time
              ? ((e.properties.$is_first_time = !0),
                (this.is_first_visit_time = !1))
              : (e.properties.$is_first_time = !1))
        },
        setDeviceId: function (e) {
          var t = null,
            r = _.cookie.get('sensorsdata2015jssdkcross'),
            n = {}
          null != r &&
            _.isJSONString(r) &&
            ((n = JSON.parse(r)), n.$device_id && (t = n.$device_id)),
            (t = t || e),
            sd.para.cross_subdomain === !0
              ? store.set('$device_id', t)
              : ((n.$device_id = t),
                _.cookie.set(
                  'sensorsdata2015jssdkcross',
                  JSON.stringify(n),
                  null,
                  !0
                )),
            sd.para.is_track_device_id && (_.info.currentProps.$device_id = t)
        },
        storeInitCheck: function () {
          if (is_first_visitor) {
            var e = new Date(),
              t = {
                h: 23 - e.getHours(),
                m: 59 - e.getMinutes(),
                s: 59 - e.getSeconds(),
              }
            _.cookie.set(
              _.cookie.getCookieName('new_user'),
              '1',
              3600 * t.h + 60 * t.m + t.s + 's'
            ),
              (this.is_first_visit_time = !0)
          } else
            _.cookie.getNewUser() ||
              (this.checkIsAddSign = function (e) {
                'track' === e.type && (e.properties.$is_first_day = !1)
              }),
              (this.checkIsFirstTime = function (e) {
                'track' === e.type &&
                  '$pageview' === e.event &&
                  (e.properties.$is_first_time = !1)
              })
        },
        checkIsFirstLatest: function () {
          for (
            var e = _.info.pageProp.url_domain,
              t = _.info.pageProp.referrer_domain,
              r = [
                '$utm_source',
                '$utm_medium',
                '$utm_campaign',
                '$utm_content',
                '$utm_term',
              ],
              n = store.getProps(),
              s = 0;
            s < r.length;
            s++
          )
            r[s] in n && delete n[r[s]]
          store.setProps(n, !0),
            e !== t &&
              sd.register({
                $latest_traffic_source_type: _.getSourceFromReferrer(),
                $latest_referrer: _.info.pageProp.referrer,
                $latest_referrer_host: _.info.pageProp.referrer_host,
                $latest_search_keyword: _.getKeywordFromReferrer(),
              })
          var i = _.info.campaignParamsStandard('$latest_', '_latest_'),
            o = i.$utms,
            a = i.otherUtms
          _.isEmptyObject(o) || sd.register(o),
            _.isEmptyObject(a) || sd.register(a)
        },
      },
      saEvent = {}
    ;(saEvent.checkOption = {
      regChecks: {
        regName: /^((?!^distinct_id$|^original_id$|^time$|^properties$|^id$|^first_id$|^second_id$|^users$|^events$|^event$|^user_id$|^date$|^datetime$)[a-zA-Z_$][a-zA-Z\d_$]{0,99})$/i,
      },
      checkPropertiesKey: function (e) {
        var t = this,
          r = !0
        return (
          _.each(e, function (e, n) {
            t.regChecks.regName.test(n) || (r = !1)
          }),
          r
        )
      },
      check: function (e, t) {
        return 'string' == typeof this[e] ? this[this[e]](t) : this[e](t)
      },
      str: function (e) {
        return _.isString(e)
          ? !0
          : (logger.info(
              '\u8bf7\u68c0\u67e5\u53c2\u6570\u683c\u5f0f,\u5fc5\u987b\u662f\u5b57\u7b26\u4e32'
            ),
            !0)
      },
      properties: function (e) {
        return (
          _.strip_sa_properties(e),
          e
            ? _.isObject(e)
              ? this.checkPropertiesKey(e)
                ? !0
                : (logger.info(
                    'properties\u91cc\u7684key\u5fc5\u987b\u662f\u7531\u5b57\u7b26\u4e32\u6570\u5b57_\u7ec4\u6210\uff0c\u4e14\u4e0d\u80fd\u662f\u7cfb\u7edf\u4fdd\u7559\u5b57'
                  ),
                  !0)
              : (logger.info(
                  'properties\u53ef\u4ee5\u6ca1\u6709\uff0c\u4f46\u6709\u7684\u8bdd\u5fc5\u987b\u662f\u5bf9\u8c61'
                ),
                !0)
            : !0
        )
      },
      propertiesMust: function (e) {
        return (
          _.strip_sa_properties(e),
          void 0 === e || !_.isObject(e) || _.isEmptyObject(e)
            ? (logger.info(
                'properties\u5fc5\u987b\u662f\u5bf9\u8c61\u4e14\u6709\u503c'
              ),
              !0)
            : this.checkPropertiesKey(e)
            ? !0
            : (logger.info(
                'properties\u91cc\u7684key\u5fc5\u987b\u662f\u7531\u5b57\u7b26\u4e32\u6570\u5b57_\u7ec4\u6210\uff0c\u4e14\u4e0d\u80fd\u662f\u7cfb\u7edf\u4fdd\u7559\u5b57'
              ),
              !0)
        )
      },
      event: function (e) {
        return _.isString(e) && this.regChecks.regName.test(e)
          ? !0
          : (logger.info(
              '\u8bf7\u68c0\u67e5\u53c2\u6570\u683c\u5f0f,\u5fc5\u987b\u662f\u5b57\u7b26\u4e32,\u4e14eventName\u5fc5\u987b\u662f\u5b57\u7b26\u4e32_\u5f00\u5934,\u4e14\u4e0d\u80fd\u662f\u7cfb\u7edf\u4fdd\u7559\u5b57'
            ),
            !0)
      },
      test_id: 'str',
      group_id: 'str',
      distinct_id: function (e) {
        return _.isString(e) && /^.{1,255}$/.test(e)
          ? !0
          : (logger.info(
              'distinct_id\u5fc5\u987b\u662f\u4e0d\u80fd\u4e3a\u7a7a\uff0c\u4e14\u5c0f\u4e8e255\u4f4d\u7684\u5b57\u7b26\u4e32'
            ),
            !1)
      },
    }),
      (saEvent.check = function (e) {
        var t = !0
        for (var r in e) if (!this.checkOption.check(r, e[r])) return !1
        return t
      }),
      (saEvent.send = function (e, t) {
        var r = {
          distinct_id: store.getDistinctId(),
          lib: {
            $lib: 'js',
            $lib_method: 'code',
            $lib_version: String(LIB_VERSION),
          },
          properties: {},
        }
        if (
          (_.isObject(e) &&
            _.isObject(e.properties) &&
            !_.isEmptyObject(e.properties) &&
            e.properties.$lib_detail &&
            ((r.lib.$lib_detail = e.properties.$lib_detail),
            delete e.properties.$lib_detail),
          'string' != typeof store.getDistinctId() ||
            '' == typeof store.getDistinctId())
        ) {
          var n = ''
          switch (store.getDistinctId()) {
            case null:
              n = 'null'
              break
            case void 0:
              n = 'undefined'
              break
            case '':
              n = '\u7a7a'
              break
            default:
              n = String(store.getDistinctId())
          }
          error_msg.push(
            'distinct_id-' +
              just_test_distinctid +
              '-' +
              just_test_distinctid_2 +
              '-' +
              n +
              '-' +
              just_test_distinctid_detail +
              '-' +
              just_test_distinctid_detail2
          )
        }
        _.extend(r, e),
          error_msg.length > 0 && (r.jssdk_error = error_msg.join('--')),
          _.isObject(e.properties) &&
            !_.isEmptyObject(e.properties) &&
            _.extend(r.properties, e.properties),
          _.isObject(t) && _.extend(r.lib, t),
          (e.type && 'profile' === e.type.slice(0, 7)) ||
            ((r.properties = _.extend(
              {},
              _.info.properties(),
              store.getProps(),
              store.getSessionProps(),
              _.info.currentProps,
              r.properties
            )),
            _.isString(r.properties.$latest_referrer) ||
              ((r.properties.$latest_referrer = '\u53d6\u503c\u5f02\u5e38'),
              _.jssdkDebug(r.properties, store.getProps())),
            _.isString(r.properties.$latest_referrer_host) ||
              (r.properties.$latest_referrer_host = '\u53d6\u503c\u5f02\u5e38'),
            _.isString(r.properties.$latest_search_keyword) ||
              (r.properties.$latest_search_keyword =
                '\u53d6\u503c\u5f02\u5e38'),
            _.isString(r.properties.$latest_traffic_source_type) ||
              (r.properties.$latest_traffic_source_type =
                '\u53d6\u503c\u5f02\u5e38')),
          r.properties.$time && _.isDate(r.properties.$time)
            ? ((r.time = 1 * r.properties.$time), delete r.properties.$time)
            : sd.para.use_client_time && (r.time = 1 * new Date()),
          _.searchObjDate(r),
          _.searchObjString(r)
        var s = _.searchConfigData(r.properties)
        saNewUser.checkIsAddSign(r),
          saNewUser.checkIsFirstTime(r),
          sd.para.debug_mode === !0
            ? (logger.info(r), this.debugPath(JSON.stringify(r), t))
            : sd.sendState.getSendCall(r, s, t)
      }),
      (saEvent.debugPath = function (e, t) {
        var r = e,
          n = ''
        ;(n =
          -1 !== sd.para.debug_mode_url.indexOf('?')
            ? sd.para.debug_mode_url +
              '&data=' +
              encodeURIComponent(_.base64Encode(e))
            : sd.para.debug_mode_url +
              '?data=' +
              encodeURIComponent(_.base64Encode(e))),
          _.ajax({
            url: n,
            type: 'GET',
            cors: !0,
            header: { 'Dry-Run': String(sd.para.debug_mode_upload) },
            success: function (e) {
              _.isEmptyObject(e) === !0
                ? alert('debug\u6570\u636e\u53d1\u9001\u6210\u529f' + r)
                : alert(
                    'debug\u5931\u8d25 \u9519\u8bef\u539f\u56e0' +
                      JSON.stringify(e)
                  )
            },
          })
      })
    var store = (sd.store = {
        _sessionState: {},
        _state: {},
        getProps: function () {
          return this._state.props || {}
        },
        getSessionProps: function () {
          return this._sessionState
        },
        getDistinctId: function () {
          return this._state.distinct_id
        },
        getFirstId: function () {
          return this._state.first_id
        },
        toState: function (e) {
          var t = null
          if (null != e && _.isJSONString(e))
            if (
              ((t = JSON.parse(e)), (this._state = _.extend(t)), t.distinct_id)
            ) {
              if ('object' == typeof t.props) {
                for (var r in t.props)
                  'string' == typeof t.props[r] &&
                    (t.props[r] = t.props[r].slice(
                      0,
                      sd.para.max_referrer_string_length
                    ))
                this.save()
              }
            } else
              this.set('distinct_id', _.UUID()),
                error_msg.push('toStateParseDistinctError')
          else
            this.set('distinct_id', _.UUID()),
              error_msg.push('toStateParseError')
        },
        initSessionState: function () {
          var e = _.cookie.get('sensorsdata2015session'),
            t = null
          null !== e &&
            'object' == typeof (t = JSON.parse(e)) &&
            (this._sessionState = t || {})
        },
        setOnce: function (e, t) {
          e in this._state || this.set(e, t)
        },
        set: function (e, t) {
          ;(this._state = this._state || {}), (this._state[e] = t), this.save()
        },
        change: function (e, t) {
          this._state[e] = t
        },
        setSessionProps: function (e) {
          var t = this._sessionState
          _.extend(t, e), this.sessionSave(t)
        },
        setSessionPropsOnce: function (e) {
          var t = this._sessionState
          _.coverExtend(t, e), this.sessionSave(t)
        },
        setProps: function (e, t) {
          var r = this._state.props || {}
          t ? this.set('props', e) : (_.extend(r, e), this.set('props', r))
        },
        removeProps: function (e) {
          if (!_.isArray(e)) return !1
          for (var t = this._state.props || {}, r = 0; r < e.length; r++)
            e[r] in t && delete t[r]
          this.set('props', t)
        },
        setPropsOnce: function (e) {
          var t = this._state.props || {}
          _.coverExtend(t, e), this.set('props', t)
        },
        clearAllProps: function () {
          this._sessionState = {}
          for (var e in this._state.props)
            1 !== e.indexOf('latest_') && delete this._state.props[e]
          this.sessionSave({}), this.save()
        },
        sessionSave: function (e) {
          ;(this._sessionState = e),
            _.cookie.set(
              'sensorsdata2015session',
              JSON.stringify(this._sessionState),
              0
            )
        },
        save: function () {
          _.cookie.set(
            this.getCookieName(),
            JSON.stringify(this._state),
            73e3,
            sd.para.cross_subdomain
          )
        },
        getCookieName: function () {
          var e = ''
          return (
            sd.para.cross_subdomain === !1
              ? ((e = _.url('sub', location.href)),
                (e =
                  'string' == typeof e && '' !== e
                    ? 'sa_jssdk_2015_' + e
                    : 'sa_jssdk_2015_root'))
              : (e = 'sensorsdata2015jssdkcross'),
            e
          )
        },
        init: function () {
          navigator.cookieEnabled ||
            (error_msg.push('cookieNotEnable'),
            _.localStorage.isSupport ||
              error_msg.push('localStorageNotEnable')),
            this.initSessionState()
          var e = _.UUID(),
            t = _.cookie.get(this.getCookieName())
          null === t
            ? ((is_first_visitor = !0),
              (just_test_distinctid = 1),
              this.set('distinct_id', e))
            : ((just_test_distinctid = 2),
              (just_test_distinctid_detail = JSON.stringify(t)),
              (just_test_distinctid_detail2 = JSON.stringify(
                document.cookie.match(/2015[^;]+/g)
              )),
              (_.isJSONString(t) && JSON.parse(t).distinct_id) ||
                (is_first_visitor = !0),
              this.toState(t)),
            saNewUser.setDeviceId(e),
            saNewUser.storeInitCheck(),
            saNewUser.checkIsFirstLatest()
        },
      }),
      commonWays = {
        isReady: function (e) {
          e()
        },
        getUtm: function () {
          return _.info.campaignParams()
        },
        getStayTime: function () {
          return (new Date() - sd._t) / 1e3
        },
        setProfileLocal: function (e) {
          if (!_.localStorage.isSupport()) return sd.setProfile(e), !1
          if (!_.isObject(e) || _.isEmptyObject(e)) return !1
          var t = _.localStorage.parse('sensorsdata_2015_jssdk_profile'),
            r = !1
          if (_.isObject(t) && !_.isEmptyObject(t)) {
            for (var n in e)
              ((n in t && t[n] !== e[n]) || !(n in t)) &&
                ((t[n] = e[n]), (r = !0))
            r &&
              (_.localStorage.set(
                'sensorsdata_2015_jssdk_profile',
                JSON.stringify(t)
              ),
              sd.setProfile(e))
          } else
            _.localStorage.set(
              'sensorsdata_2015_jssdk_profile',
              JSON.stringify(e)
            ),
              sd.setProfile(e)
        },
        setInitReferrer: function () {
          var e = _.getReferrer()
          sd.setOnceProfile({
            _init_referrer: e,
            _init_referrer_host: _.info.pageProp.referrer_host,
          })
        },
        setSessionReferrer: function () {
          var e = _.getReferrer()
          store.setSessionPropsOnce({
            _session_referrer: e,
            _session_referrer_host: _.info.pageProp.referrer_host,
          })
        },
        setDefaultAttr: function () {
          _.info.register({
            _current_url: location.href,
            _referrer: _.getReferrer(),
            _referring_host: _.info.pageProp.referrer_host,
          })
        },
        trackHeatmap: function () {
          this.trackHeatMap.apply(arguments)
        },
        trackHeatMap: function (e) {
          if ('object' == typeof e && e.tagName) {
            var t = e.tagName.toLowerCase(),
              r = e.parentNode.tagName.toLowerCase()
            'button' !== t &&
              'a' !== t &&
              'a' !== r &&
              'button' !== r &&
              'input' !== t &&
              'textarea' !== t &&
              heatmap.start(null, e, t)
          }
        },
        autoTrackSinglePage: function (e, t) {
          function r() {
            var e = _.info.campaignParams(),
              t = {}
            for (var r in e)
              -1 !==
              (' ' + source_channel_standard + ' ').indexOf(' ' + r + ' ')
                ? (t['$' + r] = e[r])
                : (t[r] = e[r])
            return t
          }
          function n(e, t) {
            sd.track(
              '$pageview',
              _.extend(
                {
                  $referrer: s,
                  $referrer_host: _.url('hostname', s) || '',
                  $url: location.href,
                  $url_path: location.pathname,
                  $title: document.title,
                },
                e,
                r()
              ),
              t
            ),
              (s = location.href)
          }
          var s = _.info.pageProp.url
          n(e, t), (this.autoTrackSinglePage = n)
        },
        autoTrackWithoutProfile: function (e, t) {
          ;(e = _.isObject(e) ? e : {}),
            this.autoTrack(_.extend(e, { not_set_profile: !0 }), t)
        },
        autoTrack: function (e, t) {
          e = _.isObject(e) ? e : {}
          var r = _.info.campaignParams(),
            n = {}
          for (var s in r)
            -1 !== (' ' + source_channel_standard + ' ').indexOf(' ' + s + ' ')
              ? (n['$' + s] = r[s])
              : (n[s] = r[s])
          is_first_visitor &&
            !e.not_set_profile &&
            sd.setOnceProfile(
              _.extend(
                {
                  $first_visit_time: new Date(),
                  $first_referrer: _.getReferrer(),
                  $first_browser_language:
                    navigator.language || '\u53d6\u503c\u5f02\u5e38',
                  $first_browser_charset:
                    'string' == typeof document.charset
                      ? document.charset.toUpperCase()
                      : '\u53d6\u503c\u5f02\u5e38',
                  $first_referrer_host: _.info.pageProp.referrer_host,
                  $first_traffic_source_type: _.getSourceFromReferrer(),
                  $first_search_keyword: _.getKeywordFromReferrer(),
                },
                n
              )
            ),
            e.not_set_profile && delete e.not_set_profile
          var i = location.href
          sd.para.is_single_page &&
            _.addHashEvent(function () {
              var r = _.getReferrer(i)
              sd.track(
                '$pageview',
                _.extend(
                  {
                    $referrer: r,
                    $referrer_host: _.url('hostname', r) || '',
                    $url: location.href,
                    $url_path: location.pathname,
                    $title: document.title,
                  },
                  n,
                  e
                ),
                t
              ),
                (i = location.href)
            }),
            sd.track(
              '$pageview',
              _.extend(
                {
                  $referrer: _.getReferrer(),
                  $referrer_host: _.info.pageProp.referrer_host,
                  $url: location.href,
                  $url_path: location.pathname,
                  $title: document.title,
                },
                n,
                e
              ),
              t
            )
        },
      }
    ;(sd.quick = function () {
      var e = slice.call(arguments),
        t = e[0],
        r = e.slice(1)
      return 'string' == typeof t && commonWays[t]
        ? commonWays[t].apply(commonWays, r)
        : void ('function' == typeof t
            ? t.apply(sd, r)
            : logger.info(
                'quick\u65b9\u6cd5\u4e2d\u6ca1\u6709\u8fd9\u4e2a\u529f\u80fd' +
                  e[0]
              ))
    }),
      (sd.track = function (e, t, r) {
        saEvent.check({ event: e, properties: t }) &&
          saEvent.send({ type: 'track', event: e, properties: t }, r)
      }),
      (_.trackLink = function (e, t, r) {
        function n(e) {
          function n() {
            i || ((i = !0), (location.href = s.href))
          }
          e.stopPropagation(), e.preventDefault()
          var i = !1
          setTimeout(n, 1e3), sd.track(t, r, n)
        }
        e = e || {}
        var s = null
        return (
          e.ele && (s = e.ele),
          e.event && (s = e.target ? e.target : e.event.target),
          (r = r || {}),
          s && 'object' == typeof s
            ? !s.href ||
              /^javascript/.test(s.href) ||
              s.target ||
              s.download ||
              s.onclick
              ? (sd.track(t, r), !1)
              : (e.event && n(e.event),
                void (
                  e.ele &&
                  _.addEvent(e.ele, 'click', function (e) {
                    n(e)
                  })
                ))
            : !1
        )
      }),
      (sd.trackLink = function (e, t, r) {
        'object' == typeof e && e.tagName
          ? _.trackLink({ ele: e }, t, r)
          : 'object' == typeof e && e.target && e.event && _.trackLink(e, t, r)
      }),
      (sd.trackLinks = function (e, t, r) {
        return (
          (r = r || {}),
          e && 'object' == typeof e
            ? !e.href || /^javascript/.test(e.href) || e.target
              ? !1
              : void _.addEvent(e, 'click', function (n) {
                  function s() {
                    i || ((i = !0), (location.href = e.href))
                  }
                  n.preventDefault()
                  var i = !1
                  setTimeout(s, 1e3), sd.track(t, r, s)
                })
            : !1
        )
      }),
      (sd.setProfile = function (e, t) {
        saEvent.check({ propertiesMust: e }) &&
          saEvent.send({ type: 'profile_set', properties: e }, t)
      }),
      (sd.setOnceProfile = function (e, t) {
        saEvent.check({ propertiesMust: e }) &&
          saEvent.send({ type: 'profile_set_once', properties: e }, t)
      }),
      (sd.appendProfile = function (e, t) {
        saEvent.check({ propertiesMust: e }) &&
          (_.each(e, function (t, r) {
            _.isString(t)
              ? (e[r] = [t])
              : _.isArray(t) ||
                (delete e[r],
                logger.info(
                  'appendProfile\u5c5e\u6027\u7684\u503c\u5fc5\u987b\u662f\u5b57\u7b26\u4e32\u6216\u8005\u6570\u7ec4'
                ))
          }),
          _.isEmptyObject(e) ||
            saEvent.send({ type: 'profile_append', properties: e }, t))
      }),
      (sd.incrementProfile = function (e, t) {
        function r(e) {
          for (var t in e) if (!/-*\d+/.test(String(e[t]))) return !1
          return !0
        }
        var n = e
        _.isString(e) && ((e = {}), (e[n] = 1)),
          saEvent.check({ propertiesMust: e }) &&
            (r(e)
              ? saEvent.send({ type: 'profile_increment', properties: e }, t)
              : logger.info(
                  'profile_increment\u7684\u503c\u53ea\u80fd\u662f\u6570\u5b57'
                ))
      }),
      (sd.deleteProfile = function (e) {
        saEvent.send({ type: 'profile_delete' }, e),
          store.set('distinct_id', _.UUID())
      }),
      (sd.unsetProfile = function (e, t) {
        var r = e,
          n = {}
        _.isString(e) && ((e = []), e.push(r)),
          _.isArray(e)
            ? (_.each(e, function (e) {
                _.isString(e)
                  ? (n[e] = !0)
                  : logger.info(
                      'profile_unset\u7ed9\u7684\u6570\u7ec4\u91cc\u9762\u7684\u503c\u5fc5\u987b\u65f6string,\u5df2\u7ecf\u8fc7\u6ee4\u6389',
                      e
                    )
              }),
              saEvent.send({ type: 'profile_unset', properties: n }, t))
            : logger.info('profile_unset\u7684\u53c2\u6570\u662f\u6570\u7ec4')
      }),
      (sd.identify = function (e, t) {
        'number' == typeof e && (e = String(e))
        var r = store.getFirstId()
        'undefined' == typeof e
          ? r
            ? store.set('first_id', _.UUID())
            : store.set('distinct_id', _.UUID())
          : saEvent.check({ distinct_id: e })
          ? t === !0
            ? r
              ? store.set('first_id', e)
              : store.set('distinct_id', e)
            : r
            ? store.change('first_id', e)
            : store.change('distinct_id', e)
          : logger.info(
              'identify\u7684\u53c2\u6570\u5fc5\u987b\u662f\u5b57\u7b26\u4e32'
            )
      }),
      (sd.trackSignup = function (e, t, r, n) {
        saEvent.check({ distinct_id: e, event: t, properties: r }) &&
          (saEvent.send(
            {
              original_id: store.getFirstId() || store.getDistinctId(),
              distinct_id: e,
              type: 'track_signup',
              event: t,
              properties: r,
            },
            n
          ),
          store.set('distinct_id', e))
      }),
      (sd.trackAbtest = function (e, t) {}),
      (sd.registerPage = function (e) {
        saEvent.check({ properties: e })
          ? _.extend(_.info.currentProps, e)
          : logger.info('register\u8f93\u5165\u7684\u53c2\u6570\u6709\u8bef')
      }),
      (sd.clearAllRegister = function () {
        store.clearAllProps()
      }),
      (sd.register = function (e) {
        saEvent.check({ properties: e })
          ? store.setProps(e)
          : logger.info('register\u8f93\u5165\u7684\u53c2\u6570\u6709\u8bef')
      }),
      (sd.registerOnce = function (e) {
        saEvent.check({ properties: e })
          ? store.setPropsOnce(e)
          : logger.info(
              'registerOnce\u8f93\u5165\u7684\u53c2\u6570\u6709\u8bef'
            )
      }),
      (sd.registerSession = function (e) {
        saEvent.check({ properties: e })
          ? store.setSessionProps(e)
          : logger.info(
              'registerSession\u8f93\u5165\u7684\u53c2\u6570\u6709\u8bef'
            )
      }),
      (sd.registerSessionOnce = function (e) {
        saEvent.check({ properties: e })
          ? store.setSessionPropsOnce(e)
          : logger.info(
              'registerSessionOnce\u8f93\u5165\u7684\u53c2\u6570\u6709\u8bef'
            )
      }),
      (sd.login = function (e) {
        if (
          ('number' == typeof e && (e = String(e)),
          saEvent.check({ distinct_id: e }))
        ) {
          var t = store.getFirstId(),
            r = store.getDistinctId()
          e !== r &&
            (t
              ? sd.trackSignup(e, '$SignUp')
              : (store.set('first_id', r), sd.trackSignup(e, '$SignUp')))
        } else
          logger.info(
            'login\u7684\u53c2\u6570\u5fc5\u987b\u662f\u5b57\u7b26\u4e32'
          )
      }),
      (sd.logout = function (e) {
        var t = store.getFirstId()
        t
          ? (store.set('first_id', ''),
            e === !0
              ? store.set('distinct_id', _.UUID())
              : store.set('distinct_id', t))
          : logger.info('\u6ca1\u6709first_id\uff0clogout\u5931\u8d25')
      }),
      (sd.getPresetProperties = function () {
        function e() {
          var e = _.info.campaignParams(),
            t = {}
          for (var r in e)
            -1 !== (' ' + source_channel_standard + ' ').indexOf(' ' + r + ' ')
              ? (t['$' + r] = e[r])
              : (t[r] = e[r])
          return t
        }
        var t = {
          $referrer:
            'string' == typeof document.referrer
              ? document.referrer.slice(0, 100)
              : '',
          $referrer_host: _.url('hostname', document.referrer) || '',
          $url: location.href,
          $url_path: location.pathname,
          $title: document.title || '',
          _distinct_id: store.getDistinctId(),
        }
        return _.extend({}, _.info.properties(), sa.store.getProps(), e(), t)
      })
    var heatmap = {
      getDomIndex: function (e) {
        var t = [].indexOf
        if (!e.parentNode) return -1
        var r = e.parentNode.children
        if (!r) return -1
        var n = r.length
        if (t) return t.call(r, e)
        for (var s = 0; n > s; ++s) if (e == r[s]) return s
        return -1
      },
      selector: function (e) {
        var t =
          e.parentNode && 9 == e.parentNode.nodeType ? -1 : this.getDomIndex(e)
        return e.id
          ? '#' + e.id
          : e.tagName.toLowerCase() + (~t ? ':nth-child(' + (t + 1) + ')' : '')
      },
      getDomSelector: function (e, t) {
        if (!e || !e.parentNode || !e.parentNode.children) return !1
        t = t && t.join ? t : []
        var r = e.nodeName.toLowerCase()
        return e && 'body' !== r && 1 == e.nodeType
          ? (t.unshift(this.selector(e)),
            e.id ? t.join(' > ') : this.getDomSelector(e.parentNode, t))
          : (t.unshift('body'), t.join(' > '))
      },
      na: function () {
        var e = document.documentElement.scrollLeft || window.pageXOffset
        return parseInt(isNaN(e) ? 0 : e, 10)
      },
      i: function () {
        var e = 0
        try {
          ;(e = o.documentElement.scrollTop || m.pageYOffset),
            (e = isNaN(e) ? 0 : e)
        } catch (t) {
          e = 0
        }
        return parseInt(e, 10)
      },
      getBrowserWidth: function () {
        var e = window.innerWidth || document.body.clientWidth
        return isNaN(e) ? 0 : parseInt(e, 10)
      },
      getBrowserHeight: function () {
        var e = window.innerHeight || document.body.clientHeight
        return isNaN(e) ? 0 : parseInt(e, 10)
      },
      getScrollWidth: function () {
        var e = parseInt(document.body.scrollWidth, 10)
        return isNaN(e) ? 0 : e
      },
      W: function (e) {
        var t = parseInt(+e.clientX + +this.na(), 10),
          e = parseInt(+e.clientY + +this.i(), 10)
        return { x: isNaN(t) ? 0 : t, y: isNaN(e) ? 0 : e }
      },
      start: function (e, t, r) {
        if (
          sd.para.heatmap &&
          sd.para.heatmap.collect_element &&
          !sd.para.heatmap.collect_element(t)
        )
          return !1
        var n = this.getDomSelector(t),
          s = _.getEleInfo({ target: t })
        if (
          ((s.$element_selector = n ? n : ''),
          sd.para.heatmap && sd.para.heatmap.custom_property)
        ) {
          var i = sd.para.heatmap.custom_property(t)
          _.isObject(i) && (s = _.extend(s, i))
        }
        'a' === r && sd.para.heatmap && sd.para.heatmap.isTrackLink === !0
          ? _.trackLink({ event: e, target: t }, '$WebClick', s)
          : sd.track('$WebClick', s)
      },
      hasElement: function (e) {
        var t = e._getPath()
        if (_.isArray(t) && t.length > 0)
          for (var r = 0; r < t.length; r++)
            if (t[r] && t[r].tagName && 'a' === t[r].tagName.toLowerCase())
              return t[r]
        return !1
      },
      initScrollmap: function () {
        if (
          !_.isObject(sd.para.heatmap) ||
          'default' !== sd.para.heatmap.scroll_notice_map
        )
          return !1
        var e = function (e) {
            var t = {}
            return (
              (t.timeout = e.timeout || 1e3),
              (t.func = e.func),
              (t.hasInit = !1),
              (t.inter = null),
              (t.main = function (e) {
                this.func(e), (this.inter = null)
              }),
              (t.go = function (e) {
                var r = {}
                this.inter ||
                  ((r.$viewport_position =
                    document.documentElement.scrollTop ||
                    window.pageYOffset ||
                    document.body.scrollTop ||
                    0),
                  (r.$viewport_position =
                    Math.round(r.$viewport_position) || 0),
                  (r.$viewport_height =
                    window.innerHeight ||
                    document.documentElement.clientHeight ||
                    document.body.clientHeight ||
                    0),
                  (r.$viewport_width =
                    window.innerWidth ||
                    document.documentElement.clientWidth ||
                    document.body.clientWidth ||
                    0),
                  e
                    ? t.main(r)
                    : (this.inter = setTimeout(function () {
                        t.main(r)
                      }, this.timeout)))
              }),
              t
            )
          },
          t = e({
            timeout: 1e3,
            func: function (e) {
              var t = new Date(),
                r = t - this.current_time
              r > sd.para.heatmap.scroll_delay_time &&
                ((e.$url = location.href),
                (e.$title = document.title),
                (e.$url_path = location.pathname),
                (e.event_duration = parseInt(r)),
                sd.track('$WebStay', e)),
                (this.current_time = t)
            },
          })
        ;(t.current_time = new Date()),
          _.addEvent(window, 'scroll', function () {
            t.go()
          }),
          _.addEvent(window, 'unload', function () {
            t.go('notime')
          })
      },
      initHeatmap: function () {
        var e = this
        return _.isObject(sd.para.heatmap) &&
          'default' === sd.para.heatmap.clickmap
          ? _.isFunction(sd.para.heatmap.collect_url) &&
            !sd.para.heatmap.collect_url()
            ? !1
            : ('all' === sd.para.heatmap.collect_elements
                ? (sd.para.heatmap.collect_elements = 'all')
                : (sd.para.heatmap.collect_elements = 'interact'),
              void ('all' === sd.para.heatmap.collect_elements
                ? _.addEvent(document, 'click', function (t) {
                    var r = t || window.event
                    if (!r) return !1
                    var n = r.target || r.srcElement
                    if ('object' != typeof n) return !1
                    if ('string' != typeof n.tagName) return !1
                    var s = n.tagName.toLowerCase()
                    if (
                      'body' === s.toLowerCase() ||
                      'html' === s.toLowerCase()
                    )
                      return !1
                    if (!n || !n.parentNode || !n.parentNode.children) return !1
                    var i = n.parentNode.tagName.toLowerCase()
                    'a' === i || 'button' === i
                      ? e.start(
                          r,
                          n.parentNode,
                          n.parentNode.tagName.toLowerCase()
                        )
                      : e.start(r, n, s)
                  })
                : _.addEvent(document, 'click', function (t) {
                    var r = t || window.event
                    if (!r) return !1
                    var n = r.target || r.srcElement
                    if ('object' != typeof n) return !1
                    if ('string' != typeof n.tagName) return !1
                    var s = n.tagName.toLowerCase()
                    if (
                      'body' === s.toLowerCase() ||
                      'html' === s.toLowerCase()
                    )
                      return !1
                    if (!n || !n.parentNode || !n.parentNode.children) return !1
                    if (
                      ((parent_ele = n.parentNode),
                      'a' === s ||
                        'button' === s ||
                        'input' === s ||
                        'textarea' === s)
                    )
                      e.start(r, n, s)
                    else if (
                      'button' === parent_ele.tagName.toLowerCase() ||
                      'a' === parent_ele.tagName.toLowerCase()
                    )
                      e.start(r, parent_ele, n.parentNode.tagName.toLowerCase())
                    else if (
                      'area' === s &&
                      'map' === parent_ele.tagName.toLowerCase() &&
                      _.ry(parent_ele).prev().tagName &&
                      'img' === _.ry(parent_ele).prev().tagName.toLowerCase()
                    )
                      e.start(
                        r,
                        _.ry(parent_ele).prev(),
                        _.ry(parent_ele).prev().tagName.toLowerCase()
                      )
                    else {
                      var i = e.hasElement(t)
                      i && e.start(r, i, i.tagName.toLowerCase())
                    }
                  })))
          : !1
      },
      prepare: function (e) {
        function t(e, t, r) {
          sd.para.heatmap_url
            ? _.loadScript({
                success: function () {
                  setTimeout(function () {
                    'undefined' != typeof sa_jssdk_heatmap_render &&
                      sa_jssdk_heatmap_render(sd, e, t, r)
                  }, 0)
                },
                error: function () {},
                type: 'js',
                url: sd.para.heatmap_url,
              })
            : logger.info(
                '\u6ca1\u6709\u6307\u5b9aheatmap_url\u7684\u8def\u5f84'
              )
        }
        var r = location.search.match(/sa-request-id=([^&#]+)/),
          n = location.search.match(/sa-request-type=([^&#]+)/),
          s = location.search.match(/sa-request-url=([^&#]+)/)
        r && r[0] && r[1]
          ? ((sd.is_heatmap_render_mode = !0),
            _.sessionStorage.isSupport() &&
              (s &&
                s[0] &&
                s[1] &&
                sessionStorage.setItem(
                  'sensors_heatmap_url',
                  decodeURIComponent(s[1])
                ),
              sessionStorage.setItem('sensors_heatmap_id', r[1]),
              n && n[0] && n[1]
                ? '1' === n[1] || '2' === n[1] || '3' === n[1]
                  ? ((n = n[1]),
                    sessionStorage.setItem('sensors_heatmap_type', n))
                  : (n = null)
                : (n =
                    null !== sessionStorage.getItem('sensors_heatmap_type')
                      ? sessionStorage.getItem('sensors_heatmap_type')
                      : null)),
            t(r[1], n))
          : _.sessionStorage.isSupport() &&
            'string' == typeof sessionStorage.getItem('sensors_heatmap_id')
          ? ((sd.is_heatmap_render_mode = !0),
            t(
              sessionStorage.getItem('sensors_heatmap_id'),
              sessionStorage.getItem('sensors_heatmap_type'),
              location.href
            ))
          : (e(),
            _.isObject(sd.para.heatmap) &&
              (this.initHeatmap(), this.initScrollmap()))
      },
    }
    return (
      (sd.init = function (e) {
        ;((!e && has_declare) || (e && !has_declare)) &&
          (sd.initPara(e), sd._init(), (sd.readyState = 2))
      }),
      (sd._init = function () {
        heatmap.prepare(function () {
          app_js_bridge(),
            _.info.initPage(),
            store.init(),
            sd._q &&
              _.isArray(sd._q) &&
              sd._q.length > 0 &&
              _.each(sd._q, function (e) {
                sd[e[0]].apply(sd, slice.call(e[1]))
              })
        })
      }),
      sd.init(),
      sd
    )
  } catch (err) {
    if ('object' == typeof console && console.log)
      try {
        console.log(err)
      } catch (e) {}
    !(function () {
      var e = window.sensorsDataAnalytic201505
      'string' == typeof e &&
        ((e = window[e]),
        null == e ||
          ('function' != typeof e && 'object' != typeof e) ||
          'object' != typeof e.para ||
          !e.para.is_debug ||
          (e.track &&
            e.track('_js_sdk_error', {
              _js_sdk_error_msg: JSON.stringify(err),
              $url: location.href,
            })))
    })()
  }
})

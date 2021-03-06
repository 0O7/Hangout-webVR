import React from 'react';


class textinput extends React.Component {
  (function(e, t) {
    typeof define == "function" && define.amd
      ? (console.log("amd"), define(t), define([
        "underscore", "backbone", "threejs", "mousetrap", "jquery"
      ], t))
      : e.threejsInputFields = t(e._, e.Backbone, THREE, e.Mousetrap, e.jQuery)
  })(this, function(e, t, n, r, i) {
    var s,
      o,
      u;
    return function(e) {
      function d(e, t) {
        return h.call(e, t)
      }
      function v(e, t) {
        var n,
          r,
          i,
          s,
          o,
          u,
          a,
          f,
          c,
          h,
          p = t && t.split("/"),
          d = l.map,
          v = d && d["*"] || {};
        if (e && e.charAt(0) === ".")
          if (t) {
            p = p.slice(0, p.length - 1),
            e = p.concat(e.split("/"));
            for (f = 0; f < e.length; f += 1) {
              h = e[f];
              if (h === ".")
                e.splice(f, 1),
                f -= 1;
              else if (h === "..") {
                if (f === 1 && (e[2] === ".." || e[0] === ".."))
                  break;
                f > 0 && (e.splice(f - 1, 2), f -= 2)
              }
            }
            e = e.join("/")
          } else
            e.indexOf("./") === 0 && (e = e.substring(2));
      if ((p || v) && d) {
          n = e.split("/");
          for (f = n.length; f > 0; f -= 1) {
            r = n.slice(0, f).join("/");
            if (p)
              for (c = p.length; c > 0; c -= 1) {
                i = d[p.slice(0, c).join("/")];
                if (i) {
                  i = i[r];
                  if (i) {
                    s = i,
                    o = f;
                    break
                  }
                }
              }
            if (s)
              break;

            !u && v && v[r] && (u = v[r], a = f)
          }
          !s && u && (s = u, o = a),
          s && (n.splice(0, o, s), e = n.join("/"))
        }
        return e
      }
      function m(t, r) {
        return function() {
          return n.apply(e, p.call(arguments, 0).concat([t, r]))
        }
      }
      function g(e) {
        return function(t) {
          return v(t, e)
        }
      }
      function y(e) {
        return function(t) {
          a[e] = t
        }
      }
      function b(n) {
        if (d(f, n)) {
          var r = f[n];
          delete f[n],
          c[n] = !0,
          t.apply(e, r)
        }
        if (!d(a, n) && !d(c, n))
          throw new Error("No " + n);
        return a[n]
      }
      function w(e) {
        var t,
          n = e
            ? e.indexOf("!")
            : -1;
        return n > -1 && (t = e.substring(0, n), e = e.substring(n + 1, e.length)),
        [t, e]
      }
      function E(e) {
        return function() {
          return l && l.config && l.config[e] || {}
        }
      }
      var t,
        n,
        r,
        i,
        a = {},
        f = {},
        l = {},
        c = {},
        h = Object.prototype.hasOwnProperty,
        p = [].slice;
      r = function(e, t) {
        var n,
          r = w(e),
          i = r[0];
        return e = r[1],
        i && (i = v(i, t), n = b(i)),
        i
          ? n && n.normalize
            ? e = n.normalize(e, g(t))
            : e = v(e, t)
          : (e = v(e, t), r = w(e), i = r[0], e = r[1], i && (n = b(i))), {
          f: i
            ? i + "!" + e
            : e,
          n: e,
          pr: i,
          p: n
        }
      },
      i = {
        require: function(e) {
          return m(e)
        },
        exports: function(e) {
          var t = a[e];
          return typeof t != "undefined"
            ? t
            : a[e] = {}
        },
        module: function(e) {
          return {id: e, uri: "", exports: a[e], config: E(e)}
        }
      },
      t = function(t, n, s, o) {
        var u,
          l,
          h,
          p,
          v,
          g = [],
          w = typeof s,
          E;
        o = o || t;
        if (w === "undefined" || w === "function") {
          n = !n.length && s.length
            ? ["require", "exports", "module"]
            : n;
          for (v = 0; v < n.length; v += 1) {
            p = r(n[v], o),
            l = p.f;
            if (l === "require")
              g[v] = i.require(t);
            else if (l === "exports")
              g[v] = i.exports(t),
              E = !0;
            else if (l === "module")
              u = g[v] = i.module(t);
            else if (d(a, l) || d(f, l) || d(c, l))
              g[v] = b(l);
            else {
              if (!p.p)
                throw new Error(t + " missing " + l);
              p.p.load(p.n, m(o, !0), y(l), {}),
              g[v] = a[l]
            }
          }
          h = s
            ? s.apply(a[t], g)
            : undefined;
          if (t)
            if (u && u.exports !== e && u.exports !== a[t])
              a[t] = u.exports;
            else if (h !== e || !E)
              a[t] = h
          }
        else
          t && (a[t] = s)
      },
      s = o = n = function(s, o, u, a, f) {
        return typeof s == "string"
          ? i[s]
            ? i[s](o)
            : b(r(s, o).f)
          : (s.splice || (l = s, o.splice
            ? (s = o, o = u, u = null)
            : s = e), o = o || function() {},
          typeof u == "function" && (u = a, a = f),
          a
            ? t(e, s, o, u)
            : setTimeout(function() {
              t(e, s, o, u)
            }, 4),
          n)
      },
      n.config = function(e) {
        return l = e,
        l.deps && n(l.deps, l.callback),
        n
      },
      s._defined = a,
      u = function(e, t, n) {
        t.splice || (n = t, t = []),
        !d(a, e) && !d(f, e) && (f[e] = [e, t, n])
      },
      u.amd = {
        jQuery: !0
      }
    }(),
    u("vendors/almond/almond.js", function() {}),
    u("app/src/inputFields/inputField", [
      "backbone", "threejs"
    ], function(e, t) {
      var n = e.View.extend({
        value: "",
        inputType: "",
        isDirty: !0,
        size: 10,
        canvasContainer: "",
        inputPosition: {
          x: 0,
          y: 0,
          z: 0
        },
        inputRealPosition: "",
        inputManager: "",
        inputElement: "",
        hasFocus: !1,
        position: "tl",
        orthographicView: !1,
        inputFieldSize: 200,
        onBlurParameters: {
          owner: "",
          callback: "",
          parameters: ""
        },
        onFocusParameters: {
          owner: "",
          callback: "",
          parameters: ""
        },
        initialize: function(e) {
          this.setInputManager(e.inputManager),
          this.setOrthographicView(e.orthographicView)
        },
        drawInputElement: function() {
          console.error("-- inputField -- There is an object that doesn't rewrites the 'drawInputElement' function")
        },
        addKeyDownValue: function(e) {
          console.error("-- inputField -- There is an object that doesn't rewrites the 'addKeyDownValue' function")
        },
        hasCursor: function() {
          return console.error("-- inputField -- There is an object that doesn't rewrites the 'hasCursor' function"),
          !1
        },
        initializeInputTextCursorPosition: function() {
          console.error("-- inputField -- There is an object that doesn't rewrites the 'initializeInputCursorPosition' function")
        },
        inputBackspace: function() {
          console.error("-- inputField -- There is an object that doesn't rewrites the 'inputBackspace' function")
        },
        inputDel: function() {
          console.error("-- inputField -- There is an object that doesn't rewrites the 'inputDel' function")
        },
        inputCursorStart: function() {
          console.error("-- inputField -- There is an object that doesn't rewrites the 'inputCursorStart' function")
        },
        inputCursorEnd: function() {
          console.error("-- inputField -- There is an object that doesn't rewrites the 'inputCursorEnd' function")
        },
        setInputFieldSize: function(e) {
          console.error("-- inputField -- There is an object that doesn't rewrites the 'setInputFieldSize' function")
        },
        getInputFieldSize: function() {
          console.error("-- inputField -- There is an object that doesn't rewrites the 'getInputFieldSize' function")
        },
        getElement: function() {
          return this.isDirty == 1 && this.drawInputElement(),
          this.isDirty = !1,
          this.inputElement
        },
        setValue: function(e) {
          return this.value = e,
          this.hasCursor() && this.initializeInputTextCursorPosition(),
          this
        },
        getInputType: function() {
          if (this.inputType == "") {
            var e = typeof this;
            return console.error("-- " + e + " -- Doesn't have defined its input type."),
            !1
          }
          return this.inputType
        },
        setSize: function(e) {
          return this.isDirty = !0,
          this.size = e,
          this
        },
        setInputPosition: function(e, t, n, r) {
          return this.isDirty = !0,
          this.inputPosition = {
            x: e,
            y: t,
            z: n
          },
          this.setPosition(r),
          this.inputRealPosition = !1,
          this
        },
        getInputPosition: function() {
          return this.inputRealPosition == 0 && (this.inputRealPosition = this.calculateOfsetCoordinatesByPosition()),
          this.inputRealPosition
        },
        setCanvasContainer: function(e) {
          return typeof e == "undefined"
            ? console.error("The canvas is needed")
            : this.canvasContainer = e,
          this
        },
        getCanvasContainer: function() {
          return this.canvasContainer
        },
        setInputManager: function(e) {
          return typeof e == "undefined"
            ? console.error("The inputManager is needed")
            : this.inputManager = e,
          this
        },
        getInputManager: function() {
          return this.inputManager
        },
        setOrthographicView: function(e) {
          return typeof e == "undefined"
            ? this.orthographicView = !1
            : this.orthographicView = e,
          this
        },
        getOrthographicView: function() {
          return this.orthographicView
        },
        getIsDirty: function() {
          return this.isDirty
        },
        setIsDirty: function(e) {
          return this.isDirty = e,
          this
        },
        setInputElement: function(e) {
          return this.inputElement = e,
          this
        },
        getInputElement: function() {
          return this.inputElement
        },
        setHasFocus: function(e) {
          return this.isDirty = !0,
          e == 1 && this.hasCursor() && this.getInputCursor().setVisible(!0),
          this.hasFocus == 1 && e == 0
            ? this.triggerEvent("blur")
            : this.hasFocus == 0 && e == 1 && this.triggerEvent("focus"),
          this.hasFocus = e,
          this.drawInputElement(),
          this.isDirty = !1,
          this
        },
        getHasFocus: function() {
          return this.hasFocus
        },
        setPosition: function(e) {
          if (this.orthographicView) {
            var t = this.getInputManager(),
              n = e == t.POSITION_TOP_LEFT;
            n = n || e == t.POSITION_TOP_RIGHT,
            n = n || e == t.POSITION_BOTTOM_LEFT,
            n = n || e == t.POSITION_BOTTOM_RIGHT,
            n = n || e == t.POSITION_CENTER,
            n = n || e == t.POSITION_TOP_CENTER,
            n = n || e == t.POSITION_RIGHT_CENTER,
            n = n || e == t.POSITION_BOTTOM_CENTER,
            n = n || e == t.POSITION_LEFT_CENTER,
            n
              ? this.position = e
              : console.error("The given position for the input field does not exists.")
          }
          return this
        },
        getPosition: function() {
          return this.position
        },
        getCanvasWidth: function() {
          return this.getInputManager().getCanvasWidth()
        },
        getCanvasHeight: function() {
          return this.getInputManager().getCanvasHeight()
        },
        calculateOfsetCoordinatesByPosition: function() {
          var e = {
            x: this.inputPosition.x,
            y: this.inputPosition.y,
            z: this.inputPosition.z
          };
          if (this.orthographicView) {
            var t = this.getInputManager(),
              n = 1,
              r = 1;
            if (this.position == t.POSITION_BOTTOM_RIGHT || this.position == t.POSITION_TOP_RIGHT || this.position == t.POSITION_RIGHT_CENTER)
              n = -1;
            if (this.position == t.POSITION_BOTTOM_LEFT || this.position == t.POSITION_BOTTOM_RIGHT || this.position == t.POSITION_BOTTOM_CENTER)
              r = -1;
            if (this.position == t.POSITION_TOP_LEFT || this.position == t.POSITION_TOP_RIGHT || this.position == t.POSITION_TOP_CENTER)
              e.y = e.y * -1,
              e.y = r * e.y + (this.getCanvasHeight() - this.canvas.height / 2);
            if (this.position == t.POSITION_BOTTOM_LEFT || this.position == t.POSITION_BOTTOM_RIGHT || this.position == t.POSITION_BOTTOM_CENTER)
              e.y = r * e.y + this.canvas.height / 2;
            if (this.position == t.POSITION_TOP_LEFT || this.position == t.POSITION_BOTTOM_LEFT || this.position == t.POSITION_LEFT_CENTER)
              e.x = n * e.x + this.canvas.width / 2;
            if (this.position == t.POSITION_TOP_RIGHT || this.position == t.POSITION_BOTTOM_RIGHT || this.position == t.POSITION_RIGHT_CENTER)
              e.x = e.x * -1,
              e.x = n * e.x + (this.getCanvasWidth() - this.canvas.width / 2);
            this.position == t.POSITION_CENTER && (e.x += this.getCanvasWidth() * .5, e.y += this.getCanvasHeight() * .5);
            if (this.position == t.POSITION_TOP_CENTER || this.position == t.POSITION_BOTTOM_CENTER)
              e.x += this.getCanvasWidth() * .5;
            if (this.position == t.POSITION_RIGHT_CENTER || this.position == t.POSITION_LEFT_CENTER)
              e.y += this.getCanvasHeight() * .5
          }
          return e
        },
        onWindowResizeUpdatePosition: function() {
          this.inputRealPosition = !1;
          var e = this.getInputPosition(),
            t = this.getElement();
          t.position.set(e.x, e.y, e.z)
        },
        onBlur: function(e, t) {
          if (typeof e != "function" || typeof t == "undefined")
            console.error("The onBlur parameters must be declared");
          else {
            var t = {
              owner: this,
              callback: e,
              parameters: t
            };
            this.onBlurParameters = t
          }
          return this
        },
        onFocus: function(e, t) {
          if (typeof e != "function" || typeof t == "undefined")
            console.error("The onFocus parameters must be declared");
          else {
            var t = {
              owner: this,
              callback: e,
              parameters: t
            };
            this.onFocusParameters = t
          }
          return this
        },
        triggerEvent: function(e) {
          switch (e.toLowerCase()) {
            case "blur":
              typeof this.onBlurParameters.callback == "function" && this.onBlurParameters.callback({object: this.onBlurParameters.owner, parameters: this.onBlurParameters.parameters});
              break;
            case "focus":
              typeof this.onFocusParameters.callback == "function" && this.onFocusParameters.callback({object: this.onFocusParameters.owner, parameters: this.onFocusParameters.parameters});
              break;
            default:
              console.error('The event:"' + e + '" does not exists.')
          }
        }
      });
      return n
    }),
    u("app/src/inputFields/views/inputText", ["../inputField"], function(e) {
      var t = e.extend({
        fontSize: 18,
        fontFamily: "Arial",
        fontColor: {
          r: 0,
          g: 0,
          b: 0,
          a: 1
        },
        spriteAlignment: "",
        borderSize: 1,
        borderColor: {
          r: 0,
          g: 0,
          b: 0,
          a: 1
        },
        backgroundColor: {
          r: 255,
          g: 255,
          b: 255,
          a: 1
        },
        borderRadius: 6,
        borderColorReadOnly: {
          r: 153,
          g: 153,
          b: 153,
          a: 1
        },
        fontColorReadOnly: {
          r: 102,
          g: 102,
          b: 102,
          a: 1
        },
        textIndex: 0,
        currentMessageWidth: 0,
        cursorPosition: 0,
        cursorTextPosition: 0,
        inputTextPosition: {
          x: 0,
          y: 0,
          z: 0
        },
        inputTextBorderOffset: 2,
        inputTextBorderOffsetFactor: 2,
        context: "",
        canvas: "",
        inputCanvasId: "",
        inside3DSpaceCollisionDetector: "",
        readOnly: !1,
        initialize: function() {
          e.prototype.initialize.apply(this, arguments),
          this.inputType = "text",
          this.getInputCursor().setCursorPosition(0),
          this.setInputTextPosition(0, 0, 0);
          var t = document.createElement("canvas"),
            n = t.getContext("2d");
          this.context = n,
          this.canvas = t
        },
        setFontSize: function(e) {
          return isNaN(e)
            ? (console.error("-- inputField:setFontSize -- The size must be a number"), !1)
            : (this.fontSize = e, this)
        },
        getFontSize: function() {
          return this.fontSize
        },
        setFontFamily: function(e) {
          return this.fontFamily = e,
          this
        },
        getFontFamily: function() {
          return this.fontFamily
        },
        setSpriteAlignment: function(e) {
          return this.spriteAlignment = e,
          this
        },
        setFontColor: function(e, t, n, r) {
          return this.fontColor = {
            r: e,
            g: t,
            b: n,
            a: r
          },
          this
        },
        getFontColor: function() {
          return this.fontColor
        },
        getSpriteAlignment: function() {
          return this.spriteAlignment
        },
        setBorderSize: function(e) {
          return isNaN(e)
            ? (console.error("-- inputField:setBorderSize -- The size must be a number"), !1)
            : (this.borderSize = e, this.resetBorderOffset(), this)
        },
        getBorderSize: function() {
          return this.borderSize
        },
        setBackgroundColor: function(e, t, n, r) {
          return this.backgroundColor = {
            r: e,
            g: t,
            b: n,
            a: r
          },
          this
        },
        getBackgroundColor: function() {
          return this.backgroundColor
        },
        setBorderRadius: function(e) {
          return this.borderRadius = e,
          this
        },
        getBorderRadius: function() {
          return this.borderRadius
        },
        setInputFieldSize: function(e) {
          return this.inputFieldSize = e,
          this
        },
        getInputFieldSize: function() {
          return this.inputFieldSize
        },
        setInputTextBorderOffsetFactor: function(e) {
          return this.inputTextBorderOffsetFactor = e,
          this
        },
        getInputTextBorderOffsetFactor: function() {
          return this.inputTextBorderOffsetFactor
        },
        resetBorderOffset: function() {
          return this.inputTextBorderOffset = this.getBorderSize() * this.getInputTextBorderOffsetFactor(),
          this
        },
        getBorderOffset: function() {
          return this.inputTextBorderOffset
        },
        setCursorPosition: function(e) {
          return this.cursorPosition = e,
          this
        },
        setCursorTextPosition: function(e) {
          return this.cursorTextPosition = e,
          this
        },
        getInputCursorPositionXCoordinate: function(e, t) {
          var n = t.substring(0, e),
            r = this.context.measureText(n).width + this.getInputTextPosition().x + this.getInputPosition().x;
          return r
        },
        getCursorTextPosition: function() {
          return this.cursorTextPosition
        },
        getCursorPosition: function() {
          return this.cursorPosition
        },
        setInputTextPosition: function(e, t, n) {
          return this.inputTextPosition = {
            x: e,
            y: t,
            z: n
          },
          this
        },
        setInputTextPositionX: function(e) {
          return this.inputTextPosition.x = e,
          this
        },
        setInputTextPositionY: function(e) {
          return this.inputTextPosition.y = e,
          this
        },
        setInputTextPositionZ: function(e) {
          return this.inputTextPosition.z = e,
          this
        },
        getInputTextPosition: function() {
          var e = {
            x: 0,
            y: 0,
            z: 0
          };
          return e.x = this.inputTextPosition.x + this.getBorderOffset(),
          e.y = this.inputTextPosition.y + this.getBorderOffset(),
          e.z = this.inputTextPosition.z,
          e
        },
        getInputValue: function() {
          return this.value
        },
        setValue: function(e) {
          return this.isDirty = !0,
          this.value = e,
          this.cursorTextPosition = e.length,
          this.initializeInputTextCursorPosition(),
          this
        },
        getInputCursor: function() {
          return this.getInputManager().getInputCursor()
        },
        setReadOnly: function(e) {
          return this.readOnly = e,
          this
        },
        getReadOnly: function() {
          return this.readOnly
        },
        drawInputElement: function() {
          var e = this.makeTextSprite(this.value);
          e !== !1 && (e.id = this.id, this.inputElement = e),
          this.isDirty = !1
        },
        addKeyDownValue: function(e) {
          return this.getReadOnly() || (this.isDirty = !0, this.getCursorTextPosition() != this.getInputValue().length
            ? this.value = this.value.substring(0, this.getCursorTextPosition()) + e + this.value.substring(this.getCursorTextPosition(), this.getInputValue().length)
            : this.value += e, this.incCursorTextPosition()),
          this
        },
        hasCursor: function() {
          return !0
        },
        initializeInputTextCursorPosition: function() {
          this.getInputCursorPositionXCoordinate(this.cursorTextPosition, this.value)
        },
        inputBackspace: function() {
          if (!this.getReadOnly()) {
            var e = this.getInputValue(),
              t = e.substring(0, this.getCursorTextPosition() - 1);
            t += e.substring(this.getCursorTextPosition(), this.getCursorTextPosition().length),
            this.value = t,
            this.cursorTextPosition--,
            this.isDirty = !0,
            this.makeTextSprite(),
            this.isDirty = !1
          }
        },
        inputDel: function() {
          if (!this.getReadOnly()) {
            var e = this.getInputValue(),
              t = e.substring(0, this.getCursorTextPosition());
            t += e.substring(this.getCursorTextPosition() + 1, this.getCursorTextPosition().length),
            this.value = t,
            this.isDirty = !0,
            this.makeTextSprite(),
            this.isDirty = !1
          }
        },
        inputCursorStart: function() {
          this.cursorTextPosition = 0,
          this.isDirty = !0,
          this.makeTextSprite(),
          this.isDirty = !1
        },
        inputCursorEnd: function() {
          this.cursorTextPosition = this.getInputValue().length,
          this.isDirty = !0,
          this.makeTextSprite(),
          this.isDirty = !1
        },
        incCursorTextPosition: function(e) {
          typeof e == "undefined"
            ? this.cursorTextPosition ++: this.cursorTextPosition += e
        },
        decCursorTextPosition: function(e) {
          typeof e == "undefined"
            ? this.cursorTextPosition--
            : this.cursorTextPosition -= e
        },
        makeTextSprite: function(e) {
          null == e && (e = this.getInputValue()),
          this.resetBorderOffset();
          var t = this.getBorderSize(),
            r = this.context,
            i = this.canvas,
            s = this.getFontSize() + this.getBorderOffset() * 2 + t;
          i.width = this.getInputFieldSize(),
          i.height = s,
          r.font = this.getFontSize() + "px " + this.getFontFamily(),
          r.textBaseline = "top",
          this.isDirty && (this.displaceInputValue(), this.getHasFocus() && this.getInputCursor().setCursorTextPosition(this.getCursorTextPosition())),
          this.roundRect(r, t / 2, t / 2, this.getInputFieldSize() - t, s - t, this.getBorderRadius()),
          this.setInputTextValue(r, e);
          var o = new n.Texture(i);
          o.needsUpdate = !0;
          var u = !1;
          if (this.inputCanvasId === "")
            if (this.getOrthographicView()) {
              var a = new n.SpriteMaterial({
                map: o,
                transparent: !0
              });
              u = new n.Sprite(a);
              var f = Math.round(Math.random() * 1e8);
              this.inputCanvasId = "inputText-" + f,
              u.name = this.inputCanvasId,
              u.scale.set(this.getInputFieldSize(), s, 0),
              u.position.set(this.getInputPosition().x, this.getInputPosition().y, this.getInputPosition().z)
            }
          else {
            var f = Math.round(Math.random() * 1e8);
            this.inputCanvasId = "inputText-" + f,
            u = new n.Mesh(new n.PlaneGeometry(this.getInputFieldSize(), s), new n.MeshBasicMaterial({
              map: o,
              side: n.DoubleSide,
              transparent: !0
            })),
            u.position.set(this.getInputPosition().x + this.getInputFieldSize() / 2, this.getInputPosition().y - s / 2, this.getInputPosition().z)
          } else
            this.inputElement.material.map = o;
          return u
        },
        roundRect: function(e, t, n, r, i, s) {
          e.fillStyle = "rgba(" + this.backgroundColor.r + "," + this.backgroundColor.g + "," + this.backgroundColor.b + "," + this.backgroundColor.a + ")",
          this.getReadOnly()
            ? e.strokeStyle = "rgba(" + this.borderColorReadOnly.r + "," + this.borderColorReadOnly.g + "," + this.borderColorReadOnly.b + "," + this.borderColorReadOnly.a + ")"
            : e.strokeStyle = "rgba(" + this.borderColor.r + "," + this.borderColor.g + "," + this.borderColor.b + "," + this.borderColor.a + ")",
          e.lineWidth = this.getBorderSize(),
          e.beginPath(),
          e.moveTo(t + s, n),
          e.lineTo(t + r - s, n),
          e.quadraticCurveTo(t + r, n, t + r, n + s),
          e.lineTo(t + r, n + i - s),
          e.quadraticCurveTo(t + r, n + i, t + r - s, n + i),
          e.lineTo(t + s, n + i),
          e.quadraticCurveTo(t, n + i, t, n + i - s),
          e.lineTo(t, n + s),
          e.quadraticCurveTo(t, n, t + s, n),
          e.closePath(),
          e.fill(),
          e.stroke()
        },
        setInputTextValue: function(e, t) {
          this.getReadOnly()
            ? e.fillStyle = "rgba(" + this.fontColorReadOnly.r + ", " + this.fontColorReadOnly.g + ", " + this.fontColorReadOnly.b + ", " + this.fontColorReadOnly.a + ")"
            : e.fillStyle = "rgba(" + this.fontColor.r + ", " + this.fontColor.g + ", " + this.fontColor.b + ", " + this.fontColor.a + ")",
          e.fillText(t, this.getInputTextPosition().x, this.getInputTextPosition().y),
          this.getHasFocus() && this.getInputCursor().drawCursor(this)
        },
        displaceInputValue: function() {
          var e = this.getInputValue(),
            t = e.substring(0, this.getCursorTextPosition()),
            n = this.context.measureText(t).width + this.getBorderOffset() * 3,
            r = n + this.inputTextPosition.x;
          r >= this.getInputFieldSize()
            ? this.setInputTextPositionX(this.getInputFieldSize() - n)
            : r < this.getBorderOffset() * 2
              ? this.setInputTextPositionX(this.inputTextPosition.x + Math.abs(r) + this.getBorderOffset() * 3)
              : r > this.getBorderOffset() * 2 && this.setInputTextPositionX(0)
        }
      });
      return t
    }),
    u("app/src/inputFields/views/inputCursor", [
      "backbone", "threejs"
    ], function(e, t) {
      var n = e.View.extend({
        cursorSprite: "",
        canvas: "",
        isDirty: !0,
        blinkingFrequency: .5,
        blinkingLastChange: 0,
        blinkingClock: "",
        positionX: 0,
        positionY: 0,
        visible: !1,
        inputManager: !1,
        initialize: function() {
          this.blinkingClock = new t.Clock
        },
        setInputManager: function(e) {
          return this.inputManager = e,
          this
        },
        getVisible: function() {
          return this.visible
        },
        setVisible: function(e) {
          return this.visible = e,
          this
        },
        drawCursor: function(e) {
          if (this.visible) {
            var t = e.getCursorPosition() - e.inputRealPosition.x - 2,
              n = e.getInputTextPosition().y;
            e.context.fillText("|", t, n)
          }
        },
        blink: function(e) {
          var t = this.blinkingLastChange + this.blinkingFrequency;
          t < this.blinkingClock.getElapsedTime() && (this.visible = !this.visible, this.blinkingLastChange = this.blinkingClock.getElapsedTime(), e.isDirty = !0, e.makeTextSprite(null), e.isDirty = !1)
        },
        getCursorPosition: function(e) {
          this.positionX = e.getCursorPosition() - 2,
          this.positionY = e.getInputTextPosition().y + e.getInputPosition().y - e.getFontSize() * .05
        },
        getInputManager: function() {
          if (this.inputManager !== !1)
            return this.inputManager;
          console.error("The input manager has not been set correctly into inputCursor object")
        },
        setCursorPosition: function(e) {
          var t = this.getInputManager().getFocusedElement();
          return typeof t != "undefined" && t !== !1 && (e > t.getInputPosition().x + t.getInputFieldSize() - t.getBorderSize() * 3
            ? e = t.getInputPosition().x + t.getInputFieldSize() - t.getBorderSize() * 3
            : e < t.getInputPosition().x + t.getBorderSize() * 2 && (e = t.getInputPosition().x + t.getBorderSize() * 2), t.setCursorPosition(e)),
          this
        },
        setCursorTextPosition: function(e) {
          var t = this.getInputManager().getFocusedElement();
          if (typeof t != "undefined" && t !== !1) {
            e < 0
              ? e = 0
              : e > t.getInputValue().length && (e = t.getInputValue().length);
            var n = t.getCursorTextPosition(),
              r = e;
            n < e
              ? e + 2 <= t.getInputValue().length
                ? (t.incCursorTextPosition(3), r += 2)
                : e + 1 <= t.getInputValue().length && (t.incCursorTextPosition(2), r++)
              : n > e && (e - 2 >= 0
                ? (t.decCursorTextPosition(3), r -= 2)
                : e - 1 >= 0 && (t.decCursorTextPosition(2), r--));
            var i = !t.isDirty,
              s = t.getInputCursorPositionXCoordinate(r, t.getInputValue()),
              o = t.getInputPosition().x + t.getInputFieldSize() - t.getBorderSize() * 3,
              u = t.getInputPosition().x + t.getBorderSize() * 2;
            s >= o
              ? (t.displaceInputValue(), s = t.getInputCursorPositionXCoordinate(e, t.getInputValue()))
              : s <= u && (t.displaceInputValue(), s = t.getInputCursorPositionXCoordinate(e, t.getInputValue())),
            t.setCursorTextPosition(e),
            t.setCursorPosition(s),
            i && (t.setIsDirty(!0), t.makeTextSprite(t.getInputValue()), t.setIsDirty(!1))
          }
          return this
        }
      });
      return n
    }),
    u("app/src/inputFields/raycaster", [
      "backbone", "threejs"
    ], function(e, t) {
      return raycasterClass = e.Model.extend({
        inputManager: "",
        camera: "",
        mouseX: "",
        mouseY: "",
        inner3DSpaceMouseX: "",
        inner3DSpaceMouseY: "",
        isDirty: !1,
        projector: "",
        raycaster: "",
        intersectedElement: !1,
        initialize: function() {
          raycasterClassTHIS = this,
          this.setCamera(this.attributes.camera),
          this.setInputManager(this.attributes.inputManager),
          this.projector = new t.Projector,
          this.raycaster = new t.Raycaster
        },
        setCamera: function(e) {
          return typeof e == "undefined"
            ? console.error("The camera is needed")
            : this.camera = e,
          this
        },
        getCamera: function() {
          return this.camera
        },
        setInputManager: function(e) {
          return typeof e == "undefined"
            ? console.error("The inputManager is needed")
            : this.inputManager = e,
          this
        },
        getInputManager: function() {
          return this.inputManager
        },
        getCanvasWidth: function() {
          return this.getInputManager().getCanvasWidth()
        },
        getCanvasHeight: function() {
          return this.getInputManager().getCanvasHeight()
        },
        onDocumentMouseMove: function(e) {
          raycasterClassTHIS.inner3DSpaceMouseX = e.clientX / this.getCanvasWidth() * 2 - 1,
          raycasterClassTHIS.inner3DSpaceMouseY = -(e.clientY / this.getCanvasHeight()) * 2 + 1,
          raycasterClassTHIS.mouseX = e.clientX,
          raycasterClassTHIS.mouseY = e.clientY,
          raycasterClassTHIS.isDirty = !0
        },
        onDocumentMouseClick: function(e) {
          raycasterClassTHIS.checkIfElementHasBeenClicked(),
          0 != raycasterClassTHIS.intersectedElement && raycasterClassTHIS.getInputManager().setFocusedElement(raycasterClassTHIS.intersectedElement)
        },
        requestAnimationFrame: function() {
          this.checkIfElementHasBeenClicked()
        },
        checkIfElementHasBeenClicked: function() {
          this.isDirty && (this.intersectedElement = this.getIntersectedInputField(), this.isDirty = !1)
        },
        getIntersectedInputField: function() {
          var e = !1,
            t = !1;
          return t = this.getIntersectedInputFieldOutside3DSpace(),
          t != 0 && (e = t),
          0 == e && (t = this.getIntersectedInputFieldInside3DSpace(), t != 0 && (e = t)),
          e
        },
        getIntersectedInputFieldOutside3DSpace: function() {
          var e = this.getInputManager().getOutside3DEnviromentInputs(),
            t = !1,
            n = !1,
            r = !1,
            i = !1,
            s = 0,
            o = 0,
            u = 0,
            a = 0;
          for (var f in e) {
            t = e[f],
            n = t.getInputPosition(),
            r = t.getInputElement(),
            s = n.x - r.scale.x / 2,
            o = n.x + r.scale.x / 2,
            u = this.getCanvasHeight() - (n.y + r.scale.y / 2),
            a = this.getCanvasHeight() - (n.y - r.scale.y / 2);
            if (s <= this.mouseX && this.mouseX <= o && u <= this.mouseY && this.mouseY <= a) {
              i = r;
              break
            }
          }
          return i
        },
        getIntersectedInputFieldInside3DSpace: function() {
          var e = !1,
            n = new t.Vector3(this.inner3DSpaceMouseX, this.inner3DSpaceMouseY, 1);
          this.projector.unprojectVector(n, this.camera);
          var r = this.getInputManager().getInside3DEnviromentInputs();
          this.raycaster.set(this.camera.position, n.sub(this.camera.position).normalize());
          var i = this.raycaster.intersectObjects(r);
          return i.length > 0 && (e = i[0]),
          e
        }
      }),
      raycasterClass
    }),
    u("app/src/inputFields/inputManager", [
      "backbone",
      "threejs",
      "../inputFields/views/inputText",
      "../inputFields/views/inputCursor",
      "mousetrap",
      "jquery",
      "../inputFields/raycaster"
    ], function(e, t, n, r, i, s, o) {
      var u = e.Model.extend({
        POSITION_TOP_LEFT: "tl",
        POSITION_TOP_RIGHT: "tr",
        POSITION_BOTTOM_LEFT: "bl",
        POSITION_BOTTOM_RIGHT: "br",
        POSITION_TOP_CENTER: "tc",
        POSITION_LEFT_CENTER: "lc",
        POSITION_RIGHT_CENTER: "rc",
        POSITION_BOTTOM_CENTER: "bc",
        POSITION_CENTER: "c",
        inputTypesEnabled: {
          text: 1
        },
        inputsLoaded: {},
        focusedElement: "",
        isShiftPress: !1,
        isCapsLocked: !1,
        ignoreKey: !1,
        cursorElement: !1,
        lastCameraPosition: {
          x: 0,
          y: 0,
          z: 0
        },
        raycaster: !1,
        camera: "",
        canvasWidth: 0,
        canvasHeight: 0,
        initialize: function() {
          inputManagerClassTHIS = this,
          this.setCamera(this.attributes.camera),
          this.setCanvasWidth(this.attributes.canvasWidth),
          this.setCanvasHeight(this.attributes.canvasHeight),
          this.raycaster = new o({camera: this.getCamera(), inputManager: this}),
          s(document).keypress(function(e) {
            if (!inputManagerClassTHIS.ignoreKey) {
              var t = String.fromCharCode(e.which);
              inputManagerClassTHIS.isShifted(e)
                ? t = t.toLocaleUpperCase()
                : t = t.toLocaleLowerCase(),
              inputManagerClassTHIS.addKeyDownValue(t)
            }
            return inputManagerClassTHIS.ignoreKey = !1,
            !1
          }),
          s(document).keydown(function(e) {
            if (e.which == 8 || e.which == 46)
              return !1
          }),
          i.bind("shift", inputManagerClassTHIS.shiftPress, "keypress"),
          i.bind("shift", inputManagerClassTHIS.shiftRelease, "keyup"),
          i.bind("left", inputManagerClassTHIS.cursorDisplace),
          i.bind("right", inputManagerClassTHIS.cursorDisplace),
          i.bind("backspace", inputManagerClassTHIS.inputBackspace),
          i.bind("del", inputManagerClassTHIS.inputDel),
          i.bind("end", inputManagerClassTHIS.inputCursorEnd),
          i.bind("home", inputManagerClassTHIS.inputCursorStart)
        },
        shiftRelease: function() {
          inputManagerClassTHIS.isShiftPress = !1
        },
        shiftPress: function() {
          inputManagerClassTHIS.isShiftPress = !0
        },
        isShifted: function(e) {
          if (e) {
            var t = -1;
            e.which
              ? t = e.which
              : e.keyCode && (t = e.keyCode);
            var n = !1;
            e.shiftKey
              ? n = e.shiftKey
              : e.modifiers && (n = !!(e.modifiers & 4)),
            t >= 65 && t <= 90 && !n || t >= 97 && t <= 122 && n
              ? inputManagerClassTHIS.isCapsLocked = !0
              : inputManagerClassTHIS.isCapsLocked = !1
          }
          return inputManagerClassTHIS.isCapsLocked || inputManagerClassTHIS.isShiftPress || !1
        },
        cursorDisplace: function(e) {
          inputManagerClassTHIS.ignoreKey = !0;
          var t = inputManagerClassTHIS.getFocusedElement();
          if (t) {
            var n = inputManagerClassTHIS.getInputCursor();
            e.keyCode == 39
              ? n.setCursorTextPosition(t.getCursorTextPosition() + 1)
              : e.keyCode == 37 && n.setCursorTextPosition(t.getCursorTextPosition() - 1)
          }
        },
        inputBackspace: function(e) {
          var t = inputManagerClassTHIS.getFocusedElement();
          t && t.inputBackspace()
        },
        inputDel: function(e) {
          var t = inputManagerClassTHIS.getFocusedElement();
          t && t.inputDel()
        },
        inputCursorEnd: function(e) {
          inputManagerClassTHIS.ignoreKey = !0;
          var t = inputManagerClassTHIS.getFocusedElement();
          t && t.inputCursorEnd()
        },
        inputCursorStart: function(e) {
          inputManagerClassTHIS.ignoreKey = !0;
          var t = inputManagerClassTHIS.getFocusedElement();
          t && t.inputCursorStart()
        },
        create: function(e, t, r) {
          if (!this.inputTypesEnabled.hasOwnProperty(e))
            return console.error("-- inputManager:getInputType -- The input type '" + e + "' doesn't exists!"),
            !1;
          var i = !0;
          switch (this.inputTypesEnabled[e]) {
            case this.inputTypesEnabled.text:
              this.inputsLoaded[t] = new n({id: t, inputManager: this, orthographicView: r});
              break;
            default:
              console.error("-- inputManager:getInputType -- The input type '" + e + "' doesn't exists!"),
              i = !1
          }
          return i && this.inputsLoaded[t].setInputManager(this),
          this.inputsLoaded[t]
        },
        getInput: function(e) {
          if (!this.inputsLoaded.hasOwnProperty(e)) {
            console.error("-- inputManager:getInput -- The input '" + e + "' doesn't exists!");
            return
          }
          return this.inputsLoaded[e]
        },
        addKeyDownValue: function(e) {
          var t = this.getFocusedElement();
          0 != t && t.addKeyDownValue(e)
        },
        thereIsAFocusedElement: function() {
          return this.focusedElement != ""
            ? !0
            : !1
        },
        requestAnimationFrame: function() {
          var e = this.getFocusedElement();
          0 != e && e.isDirty && e.drawInputElement(),
          0 != e && e.inputType == "text" && e.hasCursor() && e.getHasFocus() && this.cursorElement.blink(e),
          this.updateDirtyInputFields()
        },
        getInputCursor: function() {
          return this.cursorElement === !1 && (this.cursorElement = new r, this.cursorElement.setInputManager(this)),
          this.cursorElement
        },
        getFocusedElement: function() {
          var e = !1;
          return inputManagerClassTHIS.thereIsAFocusedElement() && (e = inputManagerClassTHIS.inputsLoaded[inputManagerClassTHIS.focusedElement], e = typeof e == "undefined"
            ? !1
            : e),
          e
        },
        getInside3DEnviromentInputs: function() {
          var e = [],
            t = "";
          for (index in this.inputsLoaded)
            t = this.inputsLoaded[index],
            t.getOrthographicView() == 0 && e.push(t.getInputElement());
          return e
        },
        getOutside3DEnviromentInputs: function() {
          var e = [],
            t = "";
          for (index in this.inputsLoaded)
            t = this.inputsLoaded[index],
            t.getOrthographicView() == 1 && e.push(t);
          return e
        },
        setFocusedElement: function(e) {
          var t = this.getFocusedElement();
          return 0 != t && (t.setHasFocus(!1), t.makeTextSprite()),
          typeof e.object == "undefined"
            ? (e = this.inputsLoaded[e.id], this.focusedElement = e.id, e.setHasFocus(!0), e.makeTextSprite())
            : (e = this.inputsLoaded[e.object.id], this.focusedElement = e.id, e.setHasFocus(!0), e.makeTextSprite()),
          this
        },
        updateOrthographicInputFieldsPositions: function() {
          var e = this.getOutside3DEnviromentInputs();
          for (index in e)
            e[index].onWindowResizeUpdatePosition()
        },
        onDocumentMouseMove: function(e) {
          return this.raycaster.onDocumentMouseMove(e),
          this
        },
        onDocumentMouseClick: function(e) {
          return this.raycaster.onDocumentMouseClick(e),
          this
        },
        setCamera: function(e) {
          return typeof e == "undefined"
            ? console.error("The camera is needed")
            : this.camera = e,
          this
        },
        getCamera: function() {
          return this.camera
        },
        setCanvasWidth: function(e) {
          return typeof e == "undefined"
            ? console.error("The canvasWidth is needed")
            : this.canvasWidth = e,
          this
        },
        getCanvasWidth: function() {
          return this.canvasWidth
        },
        setCanvasHeight: function(e) {
          return typeof e == "undefined"
            ? console.error("The canvasHeight is needed")
            : this.canvasHeight = e,
          this
        },
        getCanvasHeight: function() {
          return this.canvasHeight
        },
        updateDirtyInputFields: function() {
          for (var e in this.inputsLoaded) {
            var t = this.inputsLoaded[e];
            t.getIsDirty() && t.drawInputElement()
          }
        }
      });
      return u
    }),
    o.config({
      paths: {
        jquery: "../../vendors/jquery/jquery",
        backbone: "../../vendors/backbone-amd/backbone",
        underscore: "../../vendors/underscore-amd/underscore",
        threejs: "../../vendors/threejs/build/three",
        mousetrap: "../../vendors/mousetrap/mousetrap.min",
        inputManager: "app/src/inputFields/inputManager"
      },
      shim: {
        threejs: {
          exports: "THREE"
        }
      }
    }),
    u("threejsInputFields", [
      "require", "app/src/inputFields/inputManager"
    ], function(e) {
      var t = e("app/src/inputFields/inputManager");
      return t
    }),
    u("backbone", function() {
      return t
    }),
    u("underscore", function() {
      return e
    }),
    u("threejs", function() {
      return n
    }),
    u("mousetrap", function() {
      return r
    }),
    u("jquery", function() {
      return i
    }),
    o("threejsInputFields")
  });
  render() {
    return (


)
}
}

export default textinput;

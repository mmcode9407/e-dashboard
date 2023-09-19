import { __commonJS, __toESM, require_react } from './chunk-QSQYAWSL.js';

// node_modules/classnames/bind.js
var require_bind = __commonJS({
   'node_modules/classnames/bind.js'(exports, module) {
      (function () {
         'use strict';
         var hasOwn = {}.hasOwnProperty;
         function classNames4() {
            var classes = [];
            for (var i = 0; i < arguments.length; i++) {
               var arg = arguments[i];
               if (!arg) continue;
               var argType = typeof arg;
               if (argType === 'string' || argType === 'number') {
                  classes.push((this && this[arg]) || arg);
               } else if (Array.isArray(arg)) {
                  classes.push(classNames4.apply(this, arg));
               } else if (argType === 'object') {
                  if (
                     arg.toString !== Object.prototype.toString &&
                     !arg.toString.toString().includes('[native code]')
                  ) {
                     classes.push(arg.toString());
                     continue;
                  }
                  for (var key in arg) {
                     if (hasOwn.call(arg, key) && arg[key]) {
                        classes.push((this && this[key]) || key);
                     }
                  }
               }
            }
            return classes.join(' ');
         }
         if (typeof module !== 'undefined' && module.exports) {
            classNames4.default = classNames4;
            module.exports = classNames4;
         } else if (typeof define === 'function' && typeof define.amd === 'object' && define.amd) {
            define('classnames', [], function () {
               return classNames4;
            });
         } else {
            window.classNames = classNames4;
         }
      })();
   },
});

// node_modules/tslib/tslib.es6.js
function __rest(s, e) {
   var t = {};
   for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
   if (s != null && typeof Object.getOwnPropertySymbols === 'function')
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
         if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
            t[p[i]] = s[p[i]];
      }
   return t;
}

// node_modules/nerdux-ui-system/dist/inputs/Button/Button.js
var React = __toESM(require_react());
import * as styles from '/Users/jakubwasowski/Desktop/coding-club/e-dashboard/node_modules/nerdux-ui-system/dist/inputs/Button/Button.module.css';
var Button = function (_a) {
   var _b = _a.disabled,
      disabled = _b === void 0 ? false : _b,
      _c = _a.variant,
      variant = _c === void 0 ? 'primary' : _c,
      props = __rest(_a, ['disabled', 'variant']);
   var variantClass = variant === 'primary' ? styles.primary : styles.secondary;
   var getDisabledClassForSpecificVariant = function () {
      if (disabled) {
         return variant === 'primary' ? styles.disabledPrimary : styles.disabledSecondary;
      }
   };
   var dynamicClasses = [styles.template, variantClass, getDisabledClassForSpecificVariant()].join(
      ' ',
   );
   return React.createElement(
      'button',
      { className: dynamicClasses, onClick: props.onClick, disabled },
      props.children,
   );
};

// node_modules/nerdux-ui-system/dist/inputs/Switch/Switch.js
var React2 = __toESM(require_react());
var import_react = __toESM(require_react());
var import_bind = __toESM(require_bind());
import * as styles2 from '/Users/jakubwasowski/Desktop/coding-club/e-dashboard/node_modules/nerdux-ui-system/dist/inputs/Switch/Switch.module.css';
var cx = import_bind.default.bind(styles2);
var Switch = function (_a) {
   var _b = _a.disabled,
      disabled = _b === void 0 ? false : _b,
      _c = _a.id,
      id = _c === void 0 ? 'id' : _c,
      props = __rest(_a, ['disabled', 'id']);
   var _d = (0, import_react.useState)(false),
      checked = _d[0],
      setChecked = _d[1];
   var labelClassName = cx({
      switchLabel: true,
      switchLabelDisabled: disabled,
   });
   var sliderClassName = cx({
      switchSlider: true,
      switchSliderDisabled: disabled,
   });
   return React2.createElement(
      'label',
      { className: labelClassName },
      React2.createElement('input', {
         type: 'checkbox',
         checked,
         disabled,
         onChange: function () {
            if (disabled) return;
            setChecked(!checked);
            props.onChange(!checked);
         },
         id,
      }),
      React2.createElement('span', { className: sliderClassName }),
   );
};

// node_modules/nerdux-ui-system/dist/inputs/TextField/TextField.js
var import_react2 = __toESM(require_react());
var React8 = __toESM(require_react());

// node_modules/nerdux-ui-system/dist/icons/Plus.js
var React3 = __toESM(require_react());

// node_modules/nerdux-ui-system/dist/icons/Spinner.js
var React4 = __toESM(require_react());

// node_modules/nerdux-ui-system/dist/icons/Error.js
var React5 = __toESM(require_react());
var Error = function () {
   return React5.createElement(
      'svg',
      {
         width: '20',
         height: '20',
         viewBox: '0 0 20 20',
         fill: 'none',
         xmlns: 'http://www.w3.org/2000/svg',
      },
      React5.createElement('path', {
         fillRule: 'evenodd',
         clipRule: 'evenodd',
         d: 'M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM9 15V13H11V15H9ZM9 5V11H11V5H9Z',
         fill: '#B3261E',
      }),
   );
};

// node_modules/nerdux-ui-system/dist/icons/Cancel.js
var React6 = __toESM(require_react());
var Cancel = function () {
   return React6.createElement(
      'svg',
      {
         width: '20',
         height: '20',
         viewBox: '0 0 20 20',
         fill: 'none',
         xmlns: 'http://www.w3.org/2000/svg',
      },
      React6.createElement('path', {
         fillRule: 'evenodd',
         clipRule: 'evenodd',
         d: 'M10 0C4.47 0 0 4.47 0 10C0 15.53 4.47 20 10 20C15.53 20 20 15.53 20 10C20 4.47 15.53 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18ZM10 8.59L13.59 5L15 6.41L11.41 10L15 13.59L13.59 15L10 11.41L6.41 15L5 13.59L8.59 10L5 6.41L6.41 5L10 8.59Z',
         fill: '#605D62',
      }),
   );
};

// node_modules/nerdux-ui-system/dist/icons/MagGlass.js
var React7 = __toESM(require_react());
var MagGlass = function () {
   return React7.createElement(
      'svg',
      {
         width: '18',
         height: '18',
         viewBox: '0 0 18 18',
         fill: 'none',
         xmlns: 'http://www.w3.org/2000/svg',
      },
      React7.createElement('path', {
         fillRule: 'evenodd',
         clipRule: 'evenodd',
         d: 'M11.76 10.27L17.49 16L16 17.49L10.27 11.76C9.2 12.53 7.91 13 6.5 13C2.91 13 0 10.09 0 6.5C0 2.91 2.91 0 6.5 0C10.09 0 13 2.91 13 6.5C13 7.91 12.53 9.2 11.76 10.27ZM6.5 2C4.01 2 2 4.01 2 6.5C2 8.99 4.01 11 6.5 11C8.99 11 11 8.99 11 6.5C11 4.01 8.99 2 6.5 2Z',
         fill: '#605D62',
      }),
   );
};

// node_modules/nerdux-ui-system/dist/inputs/TextField/TextField.js
var import_bind2 = __toESM(require_bind());
import * as styles3 from '/Users/jakubwasowski/Desktop/coding-club/e-dashboard/node_modules/nerdux-ui-system/dist/inputs/TextField/TextField.module.css';
var cx2 = import_bind2.default.bind(styles3);
var TextField = function (props) {
   var _a = (0, import_react2.useState)(false),
      focused = _a[0],
      setFocus = _a[1];
   var labelClassName = cx2({
      baseLabel: true,
      inputLabelTop: !!props.value || props.placeholder || focused,
      inputLabelInside: !(!!props.value || props.placeholder || focused),
      focusedLabel: focused && !props.error,
      errorLabel: props.error && !props.disabled,
      labelDisabled: props.disabled,
   });
   var inputClassName = cx2({
      inputWrapper: true,
      inputError: props.error,
      focusedWrapper: focused && !props.error,
      errorWrapper: props.error && !props.disabled,
      inputWrapperWitchIcon: props.withIcon,
      inputDisabled: props.disabled,
      withIcon: props.withIcon,
   });
   var iconLeftClasses = cx2({
      baseIcon: true,
      leftIcon: true,
   });
   var iconRightClasses = cx2({
      baseIcon: true,
      rightIcon: true,
   });
   var handleFocus = function (event) {
      setFocus(true);
      props.onFocus && props.onFocus(event);
   };
   var handleBlur = function (event) {
      setFocus(false);
      props.onBlur && props.onBlur(event);
   };
   var handleClear = function (event) {
      event.stopPropagation();
      props.onClear && props.onClear();
   };
   var handleChange = function (event) {
      if (props.disabled) return;
      props.onChange(event);
   };
   return React8.createElement(
      'div',
      { className: inputClassName },
      props.label &&
         React8.createElement(
            'label',
            { className: labelClassName, htmlFor: props.id },
            props.label,
         ),
      React8.createElement(
         'div',
         null,
         props.withIcon &&
            React8.createElement(
               'span',
               { className: iconLeftClasses },
               React8.createElement(MagGlass, null),
            ),
         React8.createElement('input', {
            id: props.id,
            name: props.name,
            placeholder: props.placeholder,
            disabled: props.disabled,
            value: props.value,
            type: props.type,
            onFocus: handleFocus,
            onBlur: handleBlur,
            className: inputClassName,
            onChange: handleChange,
         }),
         props.error &&
            !props.disabled &&
            React8.createElement(
               'span',
               { className: iconRightClasses },
               React8.createElement(Error, null),
            ),
         !!props.value &&
            !props.disabled &&
            !props.error &&
            props.onClear &&
            React8.createElement(
               'span',
               { className: iconRightClasses, onClick: handleClear },
               React8.createElement(Cancel, null),
            ),
      ),
      props.error &&
         !props.disabled &&
         React8.createElement('span', { className: styles3.error }, props.error),
      ((props.hint && !props.error) || (props.hint && props.disabled)) &&
         React8.createElement('span', { className: styles3.hint }, props.hint),
   );
};

// node_modules/nerdux-ui-system/dist/data-display/Avatar/Avatar.js
var React9 = __toESM(require_react());
var import_bind3 = __toESM(require_bind());
import * as styles4 from '/Users/jakubwasowski/Desktop/coding-club/e-dashboard/node_modules/nerdux-ui-system/dist/data-display/Avatar/Avatar.module.css';
var cx3 = import_bind3.default.bind(styles4);
var Avatar = function (_a) {
   var _b, _c;
   var _d = _a.size,
      size = _d === void 0 ? 'big' : _d,
      props = __rest(_a, ['size']);
   var avatarClassName = cx3(
      ((_b = {
         templateAvatar: true,
      }),
      (_b[size] = true),
      _b),
   );
   var defaultAvatarClassName = cx3(
      ((_c = {
         templateDefault: true,
      }),
      (_c[size] = true),
      _c),
   );
   return React9.createElement(
      'div',
      { className: styles4.avatarWrapper },
      props.src
         ? React9.createElement('img', {
              src: props.src,
              alt: props.alt,
              className: avatarClassName,
           })
         : React9.createElement(
              'div',
              { className: defaultAvatarClassName },
              React9.createElement('p', null, 'A'),
           ),
   );
};
export { Avatar, Button, Switch, TextField };
/*! Bundled license information:

classnames/bind.js:
  (*!
  	Copyright (c) 2018 Jed Watson.
  	Licensed under the MIT License (MIT), see
  	http://jedwatson.github.io/classnames
  *)

tslib/tslib.es6.js:
  (*! *****************************************************************************
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
  ***************************************************************************** *)
*/
//# sourceMappingURL=nerdux-ui-system.js.map

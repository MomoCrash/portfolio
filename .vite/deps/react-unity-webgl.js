import {
  __commonJS,
  require_react
} from "./chunk-UTEJFLXC.js";

// node_modules/react-unity-webgl/distribution/hooks/use-unity-canvas-id.js
var require_use_unity_canvas_id = __commonJS({
  "node_modules/react-unity-webgl/distribution/hooks/use-unity-canvas-id.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.useUnityCanvasId = void 0;
    var react_1 = require_react();
    var unityCanvasCount = 0;
    var unityCanvasIdPrefix = "react-unity-webgl-canvas";
    var useUnityCanvasId = function(unityProps) {
      if (unityProps.id !== void 0) {
        return unityProps.id;
      }
      var unityCanvasId = (0, react_1.useMemo)(function() {
        return [unityCanvasIdPrefix, ++unityCanvasCount].join("-");
      }, []);
      return unityCanvasId;
    };
    exports.useUnityCanvasId = useUnityCanvasId;
  }
});

// node_modules/react-unity-webgl/distribution/enums/unity-loader-status.js
var require_unity_loader_status = __commonJS({
  "node_modules/react-unity-webgl/distribution/enums/unity-loader-status.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.UnityLoaderStatus = void 0;
    var UnityLoaderStatus;
    (function(UnityLoaderStatus2) {
      UnityLoaderStatus2["Idle"] = "Idle";
      UnityLoaderStatus2["Loading"] = "Loading";
      UnityLoaderStatus2["Loaded"] = "Loaded";
      UnityLoaderStatus2["Error"] = "Error";
    })(UnityLoaderStatus || (exports.UnityLoaderStatus = UnityLoaderStatus = {}));
  }
});

// node_modules/react-unity-webgl/distribution/constants/is-browser-environment.js
var require_is_browser_environment = __commonJS({
  "node_modules/react-unity-webgl/distribution/constants/is-browser-environment.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isBrowserEnvironment = void 0;
    exports.isBrowserEnvironment = typeof window !== "undefined" && typeof document !== "undefined";
  }
});

// node_modules/react-unity-webgl/distribution/hooks/use-unity-instance.js
var require_use_unity_instance = __commonJS({
  "node_modules/react-unity-webgl/distribution/hooks/use-unity-instance.js"(exports) {
    "use strict";
    var __awaiter = exports && exports.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    var __generator = exports && exports.__generator || function(thisArg, body) {
      var _ = { label: 0, sent: function() {
        if (t[0] & 1) throw t[1];
        return t[1];
      }, trys: [], ops: [] }, f, y, t, g;
      return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
      }), g;
      function verb(n) {
        return function(v) {
          return step([n, v]);
        };
      }
      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
          if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          if (y = 0, t) op = [op[0] & 2, t.value];
          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;
            case 4:
              _.label++;
              return { value: op[1], done: false };
            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;
            case 7:
              op = _.ops.pop();
              _.trys.pop();
              continue;
            default:
              if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                _ = 0;
                continue;
              }
              if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                _.label = op[1];
                break;
              }
              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }
              if (t && _.label < t[2]) {
                _.label = t[2];
                _.ops.push(op);
                break;
              }
              if (t[2]) _.ops.pop();
              _.trys.pop();
              continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return { value: op[0] ? op[1] : void 0, done: true };
      }
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.useUnityInstance = void 0;
    var react_1 = require_react();
    var unity_loader_status_1 = require_unity_loader_status();
    var is_browser_environment_1 = require_is_browser_environment();
    var useUnityInstance = function(unityLoaderStatus, htmlCanvasElement, unityArguments, unityProvider) {
      (0, react_1.useEffect)(function() {
        (function() {
          return __awaiter(void 0, void 0, void 0, function() {
            var unityInstance, error_1;
            return __generator(this, function(_a) {
              switch (_a.label) {
                case 0:
                  if (is_browser_environment_1.isBrowserEnvironment === false) {
                    return [
                      2
                      /*return*/
                    ];
                  }
                  if (unityLoaderStatus !== unity_loader_status_1.UnityLoaderStatus.Loaded || htmlCanvasElement === null) {
                    unityProvider.setUnityInstance(null);
                    unityProvider.setInitialisationError(null);
                    return [
                      2
                      /*return*/
                    ];
                  }
                  _a.label = 1;
                case 1:
                  _a.trys.push([1, 3, , 4]);
                  return [4, window.createUnityInstance(htmlCanvasElement, unityArguments, unityProvider.setLoadingProgression)];
                case 2:
                  unityInstance = _a.sent();
                  unityProvider.setUnityInstance(unityInstance);
                  unityProvider.setInitialisationError(null);
                  return [3, 4];
                case 3:
                  error_1 = _a.sent();
                  unityProvider.setUnityInstance(null);
                  unityProvider.setInitialisationError(error_1);
                  return [3, 4];
                case 4:
                  return [
                    2
                    /*return*/
                  ];
              }
            });
          });
        })();
      }, [unityLoaderStatus, htmlCanvasElement, unityArguments, unityProvider]);
    };
    exports.useUnityInstance = useUnityInstance;
  }
});

// node_modules/react-unity-webgl/distribution/hooks/use-unity-arguments.js
var require_use_unity_arguments = __commonJS({
  "node_modules/react-unity-webgl/distribution/hooks/use-unity-arguments.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.useUnityArguments = void 0;
    var react_1 = require_react();
    var useUnityArguments = function(unityProps) {
      return (0, react_1.useMemo)(function() {
        return {
          // Assigns the data URL, framework URL, and code URL to the Unity
          // arguments object.
          dataUrl: unityProps.unityProvider.unityConfig.dataUrl,
          frameworkUrl: unityProps.unityProvider.unityConfig.frameworkUrl,
          codeUrl: unityProps.unityProvider.unityConfig.codeUrl,
          // Assigns the optional streaming assets URL, memory URL, and symbols URL
          // to the Unity arguments object.
          streamingAssetsUrl: unityProps.unityProvider.unityConfig.streamingAssetsUrl,
          memoryUrl: unityProps.unityProvider.unityConfig.memoryUrl,
          symbolsUrl: unityProps.unityProvider.unityConfig.symbolsUrl,
          // Assigns the optional company name, product name, and product version to
          // the Unity arguments object.
          companyName: unityProps.unityProvider.unityConfig.companyName,
          productName: unityProps.unityProvider.unityConfig.productName,
          productVersion: unityProps.unityProvider.unityConfig.productVersion,
          // Assigns the webgl context attributes to the Unity arguments object.
          // If the webgl context attributes are not defined via the Unity Props,
          // the default value of an empty object will be used.
          webglContextAttributes: unityProps.unityProvider.unityConfig.webglContextAttributes || {},
          // Assigns the cache control value to the Unity arguments object. If the
          // cache control value is not defined via the Unity Props, the default
          // value of always `must-revalidate` will be used.
          cacheControl: unityProps.unityProvider.unityConfig.cacheControl || function() {
            return "must-revalidate";
          },
          // Assigns the device pixel ratio to the Unity arguments object. If the
          // device pixel ratio is not defined via the Unity Props, the default
          // value of `1` will be used.
          devicePixelRatio: unityProps.devicePixelRatio || 1,
          // Assigns the match WebGL to canvas size value to the Unity arguments
          // object. If the match WebGL to canvas size value is not defined via the
          // Unity Props, the default value of `true` will be used.
          matchWebGLToCanvasSize: typeof unityProps.matchWebGLToCanvasSize === "boolean" ? unityProps.matchWebGLToCanvasSize : true,
          // Assigns the disabled canvas events to the Unity arguments object. If
          // the disabled canvas events are not defined via the Unity Props, the
          // default value of `contextmenu` and `dragstart` will be used.
          disabledCanvasEvents: unityProps.disabledCanvasEvents || [
            "contextmenu",
            "dragstart"
          ],
          // Assigns the print hook to the Unity arguments object. This hook will
          // be called whenever the Unity instance prints a message.
          print: (
            /**
             * Intercept print events in order to catch messages and send them to
             * the unity context instead.
             * @param message The message to be printed.
             */
            function(message) {
            }
          ),
          // Assigns the print error hook to the Unity arguments object. This hook
          // will be called whenever the Unity instance prints an error.
          printErr: (
            /**
             * Intercept print error events in order to catch messages and send them
             * to the unity context instead.
             * @param error The error to be printed.
             */
            function(error) {
            }
          )
        };
      }, []);
    };
    exports.useUnityArguments = useUnityArguments;
  }
});

// node_modules/react-unity-webgl/distribution/hooks/use-unity-loader.js
var require_use_unity_loader = __commonJS({
  "node_modules/react-unity-webgl/distribution/hooks/use-unity-loader.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.useUnityLoader = void 0;
    var react_1 = require_react();
    var is_browser_environment_1 = require_is_browser_environment();
    var unity_loader_status_1 = require_unity_loader_status();
    var useUnityLoader = function(unityConfig) {
      var _a = (0, react_1.useState)(unity_loader_status_1.UnityLoaderStatus.Loading), status = _a[0], setStatus = _a[1];
      (0, react_1.useEffect)(function() {
        if (is_browser_environment_1.isBrowserEnvironment === false) {
          return;
        }
        if (unityConfig.loaderUrl === null) {
          setStatus(unity_loader_status_1.UnityLoaderStatus.Idle);
          return;
        }
        var script = window.document.querySelector('script[src="'.concat(unityConfig.loaderUrl, '"]'));
        if (script === null) {
          script = window.document.createElement("script");
          script.type = "text/javascript";
          script.src = unityConfig.loaderUrl;
          script.async = true;
          script.setAttribute("data-status", "loading");
          window.document.body.appendChild(script);
          script.addEventListener("load", function() {
            return script === null || script === void 0 ? void 0 : script.setAttribute("data-status", "loaded");
          });
          script.addEventListener("error", function() {
            return script === null || script === void 0 ? void 0 : script.setAttribute("data-status", "error");
          });
        } else {
          setStatus(script.getAttribute("data-status") === "loaded" ? unity_loader_status_1.UnityLoaderStatus.Loaded : unity_loader_status_1.UnityLoaderStatus.Error);
        }
        var setStateFromEvent = function(event) {
          return setStatus(event.type === "load" ? unity_loader_status_1.UnityLoaderStatus.Loaded : unity_loader_status_1.UnityLoaderStatus.Error);
        };
        script.addEventListener("load", setStateFromEvent);
        script.addEventListener("error", setStateFromEvent);
        return function() {
          if (script !== null) {
            script.removeEventListener("load", setStateFromEvent);
            script.removeEventListener("error", setStateFromEvent);
            window.document.body.removeChild(script);
          }
        };
      }, [unityConfig.loaderUrl]);
      return status;
    };
    exports.useUnityLoader = useUnityLoader;
  }
});

// node_modules/react-unity-webgl/distribution/components/unity-component.js
var require_unity_component = __commonJS({
  "node_modules/react-unity-webgl/distribution/components/unity-component.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Unity = void 0;
    var react_1 = require_react();
    var react_2 = require_react();
    var use_unity_canvas_id_1 = require_use_unity_canvas_id();
    var use_unity_instance_1 = require_use_unity_instance();
    var use_unity_arguments_1 = require_use_unity_arguments();
    var use_unity_loader_1 = require_use_unity_loader();
    var Unity = (0, react_2.forwardRef)(
      /**
       * @param unityProps The Unity props provided the the Unity component.
       * @param forwardedRef The forwarded ref to the Unity component.
       * @returns The Unity canvas renderer.
       */
      function(unityProps, forwardedRef) {
        var htmlCanvasElementRef = (0, react_2.useRef)(null);
        var unityCanvasId = (0, use_unity_canvas_id_1.useUnityCanvasId)(unityProps);
        var unityArguments = (0, use_unity_arguments_1.useUnityArguments)(unityProps);
        var unityLoaderStatus = (0, use_unity_loader_1.useUnityLoader)(unityProps.unityProvider.unityConfig);
        (0, use_unity_instance_1.useUnityInstance)(unityLoaderStatus, htmlCanvasElementRef.current, unityArguments, unityProps.unityProvider);
        (0, react_1.useImperativeHandle)(forwardedRef, function() {
          return htmlCanvasElementRef.current;
        });
        return (0, react_1.createElement)("canvas", {
          ref: htmlCanvasElementRef,
          id: unityCanvasId,
          style: unityProps.style,
          className: unityProps.className,
          tabIndex: unityProps.tabIndex
        });
      }
    );
    exports.Unity = Unity;
  }
});

// node_modules/react-unity-webgl/distribution/constants/error-messages.js
var require_error_messages = __commonJS({
  "node_modules/react-unity-webgl/distribution/constants/error-messages.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.errorMessages = void 0;
    var errorMessages = {
      /**
       * A generic error message when the Unity Instance is not available.
       */
      genericNoUnityInstance: "No Unity Instance found.",
      /**
       * The error message for when no Unity Instance was found while trying to set
       * the fullscreen mode.
       */
      requestFullscreenNoUnityInstance: "Unable to Set Fullscreen while Unity is not Instantiated.",
      /**
       * The error message for when no Unity Instance was found while trying to
       * request the pointer lock.
       */
      requestPointerLockNoUnityInstanceOrCanvas: "Unable to Request Pointer Lock while Unity is not Instantiated or the Canvas is not found.",
      /**
       * The error message for when no Unity Instance was found while trying to send
       * a message.
       */
      sendMessageNoUnityInstance: "Unable to Send Message while Unity is not Instantiated.",
      /**
       * The error message for when no Unity Instance was found while trying to quit
       * the Unity Instance.
       */
      quitNoUnityInstance: "Unable to Quit Unity while Unity is not Instantiated.",
      /**
       * The error message for when no Unity Instance or Canvas was found while
       * trying to take a screenshot.
       */
      screenshotNoUnityInstanceOrCanvas: "Unable to Take Screenshot while Unity is not Instantiated or Canvas is not available.",
      /**
       * The error message for when no event listener was found in the event
       * system.
       */
      noEventListener: "Unable to find Event Listener in Event System for Event"
    };
    exports.errorMessages = errorMessages;
  }
});

// node_modules/react-unity-webgl/distribution/hooks/use-event-system.js
var require_use_event_system = __commonJS({
  "node_modules/react-unity-webgl/distribution/hooks/use-event-system.js"(exports) {
    "use strict";
    var __spreadArray = exports && exports.__spreadArray || function(to, from, pack) {
      if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
          if (!ar) ar = Array.prototype.slice.call(from, 0, i);
          ar[i] = from[i];
        }
      }
      return to.concat(ar || Array.prototype.slice.call(from));
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.useEventSystem = void 0;
    var react_1 = require_react();
    var error_messages_1 = require_error_messages();
    var is_browser_environment_1 = require_is_browser_environment();
    var mountedEventDispatchers = [];
    var dispatchReactUnityEvent = function(eventName) {
      var parameters = [];
      for (var _i = 1; _i < arguments.length; _i++) {
        parameters[_i - 1] = arguments[_i];
      }
      var returnValue = void 0;
      mountedEventDispatchers.forEach(function(dispatchEvent) {
        returnValue = dispatchEvent.apply(void 0, __spreadArray([eventName], parameters, false));
      });
      return returnValue;
    };
    if (is_browser_environment_1.isBrowserEnvironment === true) {
      window.dispatchReactUnityEvent = dispatchReactUnityEvent;
    }
    var useEventSystem = function() {
      var eventListeners = (0, react_1.useRef)([]);
      var addEventListener = (0, react_1.useCallback)(
        /**
         * @param eventName The name of the event to listen to.
         * @param callback The callback to invoke when the event is fired.
         */
        function(eventName, callback) {
          eventListeners.current = __spreadArray(__spreadArray([], eventListeners.current, true), [
            { eventName, callback }
          ], false);
        },
        [eventListeners]
      );
      var removeEventListener = (0, react_1.useCallback)(
        /**
         * @param eventName The name of the event to remove.
         * @param callback The callback to remove.
         */
        function(eventName, callback) {
          eventListeners.current = eventListeners.current.filter(function(eventListener) {
            return eventListener.eventName !== eventName && eventListener.callback !== callback;
          });
        },
        [eventListeners]
      );
      var dispatchEvent = (0, react_1.useCallback)(
        /**
         * @param eventName The name of the event to dispatch.
         * @param parameters The parameters to pass to the event listener.
         */
        function(eventName) {
          var parameters = [];
          for (var _i = 1; _i < arguments.length; _i++) {
            parameters[_i - 1] = arguments[_i];
          }
          var eventListener = eventListeners.current.find(function(eventListener2) {
            return eventListener2.eventName === eventName;
          });
          if (typeof eventListener === "undefined") {
            console.warn(error_messages_1.errorMessages.noEventListener, { eventName });
            return;
          }
          return eventListener.callback.apply(eventListener, parameters);
        },
        [eventListeners]
      );
      (0, react_1.useEffect)(function() {
        mountedEventDispatchers.push(dispatchEvent);
        return function() {
          mountedEventDispatchers.splice(mountedEventDispatchers.indexOf(dispatchEvent), 1);
        };
      }, [dispatchEvent]);
      return {
        addEventListener,
        removeEventListener
      };
    };
    exports.useEventSystem = useEventSystem;
  }
});

// node_modules/react-unity-webgl/distribution/hooks/use-nullable-state.js
var require_use_nullable_state = __commonJS({
  "node_modules/react-unity-webgl/distribution/hooks/use-nullable-state.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.useNullableState = void 0;
    var react_1 = require_react();
    var useNullableState = function(initialState) {
      return (0, react_1.useState)(initialState || null);
    };
    exports.useNullableState = useNullableState;
  }
});

// node_modules/react-unity-webgl/distribution/hooks/use-unity-context.js
var require_use_unity_context = __commonJS({
  "node_modules/react-unity-webgl/distribution/hooks/use-unity-context.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.useUnityContext = void 0;
    var react_1 = require_react();
    var error_messages_1 = require_error_messages();
    var use_event_system_1 = require_use_event_system();
    var use_nullable_state_1 = require_use_nullable_state();
    var useUnityContext = function(unityConfig) {
      var _a = (0, use_nullable_state_1.useNullableState)(), unityInstance = _a[0], setUnityInstance = _a[1];
      var _b = (0, react_1.useState)(0), loadingProgression = _b[0], setLoadingProgression = _b[1];
      var _c = (0, react_1.useState)(false), isLoaded = _c[0], setIsLoaded = _c[1];
      var _d = (0, use_nullable_state_1.useNullableState)(), initialisationError = _d[0], setInitialisationError = _d[1];
      var eventSystem = (0, use_event_system_1.useEventSystem)();
      var unityProvider = (0, react_1.useRef)({
        setLoadingProgression,
        setInitialisationError,
        setUnityInstance,
        setIsLoaded,
        unityConfig
      });
      var requestFullscreen = (0, react_1.useCallback)(
        /**
         * @param enabled Defines whether Unity should be in fullscreen.
         */
        function(enabled) {
          if (unityInstance === null) {
            console.warn(error_messages_1.errorMessages.requestFullscreenNoUnityInstance);
            return;
          }
          unityInstance.SetFullscreen(enabled === true ? 1 : 0);
        },
        [unityInstance]
      );
      var requestPointerLock = (0, react_1.useCallback)(function() {
        if (unityInstance === null || typeof unityInstance.Module.canvas === "undefined") {
          console.warn(error_messages_1.errorMessages.requestPointerLockNoUnityInstanceOrCanvas);
          return;
        }
        return unityInstance.Module.canvas.requestPointerLock();
      }, [unityInstance]);
      var sendMessage = (0, react_1.useCallback)(
        /**
         * @param gameObjectName the name of the game object in your Unity scene.
         * @param methodName the name of the public method on the game object.
         * @param parameter an optional parameter to pass along to the method.
         */
        function(gameObjectName, methodName, parameter) {
          if (unityInstance === null) {
            console.warn(error_messages_1.errorMessages.sendMessageNoUnityInstance);
            return;
          }
          unityInstance.SendMessage(gameObjectName, methodName, parameter);
        },
        [unityInstance]
      );
      var takeScreenshot = (0, react_1.useCallback)(
        /**
         * @param dataType Defines the type of screenshot to take.
         * @param quality Defines the quality of the screenshot.
         * @returns A base 64 encoded string of the screenshot.
         */
        function(dataType, quality) {
          if (unityInstance === null || typeof unityInstance.Module.canvas === "undefined") {
            console.warn(error_messages_1.errorMessages.screenshotNoUnityInstanceOrCanvas);
            return;
          }
          return unityInstance.Module.canvas.toDataURL(dataType, quality);
        },
        [unityInstance]
      );
      var unload = (0, react_1.useCallback)(
        /**
         * @returns A promise that resolves when the UnityInstance has been unloaded.
         */
        function() {
          if (unityInstance === null) {
            console.warn(error_messages_1.errorMessages.quitNoUnityInstance);
            return Promise.reject();
          }
          return unityInstance.Quit();
        },
        [unityInstance]
      );
      (0, react_1.useEffect)(function() {
        setIsLoaded(loadingProgression === 1);
      }, [loadingProgression]);
      return {
        unityProvider: unityProvider.current,
        loadingProgression,
        initialisationError,
        isLoaded,
        UNSAFE__unityInstance: unityInstance,
        requestFullscreen,
        requestPointerLock,
        sendMessage,
        unload,
        takeScreenshot,
        addEventListener: eventSystem.addEventListener,
        removeEventListener: eventSystem.removeEventListener
      };
    };
    exports.useUnityContext = useUnityContext;
  }
});

// node_modules/react-unity-webgl/distribution/exports.js
var require_exports = __commonJS({
  "node_modules/react-unity-webgl/distribution/exports.js"(exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.useUnityContext = exports.Unity = void 0;
    var unity_component_1 = require_unity_component();
    Object.defineProperty(exports, "Unity", { enumerable: true, get: function() {
      return unity_component_1.Unity;
    } });
    var use_unity_context_1 = require_use_unity_context();
    Object.defineProperty(exports, "useUnityContext", { enumerable: true, get: function() {
      return use_unity_context_1.useUnityContext;
    } });
  }
});
export default require_exports();
//# sourceMappingURL=react-unity-webgl.js.map

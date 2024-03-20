"use strict";
exports.id = 935;
exports.ids = [935];
exports.modules = {

/***/ 1635:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Custom404)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function Custom404() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "container1",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                className: "heading1",
                children: "404 - Page Not Found"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: "paragraph1",
                children: "Oops! It seems like the page you 're looking for doesn 't exist."
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                className: "paragraph1",
                children: [
                    "Don 't worry, you can go back to",
                    " ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        className: "link1",
                        children: "home"
                    }),
                    "."
                ]
            })
        ]
    });
};


/***/ }),

/***/ 1459:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "c": () => (/* binding */ portfolioData)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3258);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__, _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__]);
([axios__WEBPACK_IMPORTED_MODULE_0__, _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


const initialState = {
    loading: false,
    data: [],
    error: null
};
const portfolioData = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createAsyncThunk)("get/fetchData", async ()=>{
    const res = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].get("https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae");
    return res.data;
});
const portfolioDataSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createSlice)({
    name: "fetchData",
    initialState,
    extraReducers: (builder)=>{
        builder.addCase(portfolioData.pending, (state)=>{
            state.loading = true;
            state.error = null;
        }).addCase(portfolioData.fulfilled, (state, action)=>{
            state.loading = false;
            state.data = action.payload;
            state.error = null;
        }).addCase(portfolioData.rejected, (state, action)=>{
            state.loading = true;
            state.data = [];
            state.error = action.error.message;
        });
    }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (portfolioDataSlice.reducer);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 693:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "j": () => (/* binding */ ReduxProviders)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3291);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2411);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_redux__WEBPACK_IMPORTED_MODULE_1__, _store__WEBPACK_IMPORTED_MODULE_2__]);
([react_redux__WEBPACK_IMPORTED_MODULE_1__, _store__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
"use client";



function ReduxProviders({ children  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_redux__WEBPACK_IMPORTED_MODULE_1__.Provider, {
        store: _store__WEBPACK_IMPORTED_MODULE_2__/* .store */ .h,
        children: children
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2411:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h": () => (/* binding */ store)
/* harmony export */ });
/* harmony import */ var _Axiose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1459);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Axiose__WEBPACK_IMPORTED_MODULE_0__]);
_Axiose__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
"use client";

const { configureStore  } = __webpack_require__(5184);
const store = configureStore({
    reducer: {
        data: _Axiose__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z
    }
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 804:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _useClickOutside__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8332);



const ImgViews = ({ close , src  })=>{
    let domNode = (0,_useClickOutside__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(()=>{
        close(false);
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "mfp-bg mfp-ready",
                onClick: ()=>close(false)
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "mfp-wrap mfp-close-btn-in mfp-auto-cursor mfp-ready",
                tabIndex: -1,
                style: {
                    overflow: "hidden auto"
                },
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: `mfp-container mfp-s-ready mfp-iframe-holder mfp-img-container`,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "mfp-content",
                            ref: domNode,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "mfp-iframe-scaler",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    className: "mfp-img",
                                    src: src
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "mfp-preloader",
                            children: "Loading..."
                        })
                    ]
                })
            })
        ]
    });
};
const ImageView = ()=>{
    const { 0: img , 1: setImg  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: imgValue , 1: setImgValue  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setTimeout(()=>{
            const a = document.querySelectorAll("a");
            a.forEach((a)=>{
                if (a.href.includes("img/")) {
                    if (a.getAttribute("download") === null) {
                        a.addEventListener("click", (e)=>{
                            e.preventDefault();
                            setImgValue(a.href);
                            setImg(true);
                        });
                    }
                }
            });
        }, 1500);
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
        children: img && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ImgViews, {
            close: ()=>setImg(false),
            src: imgValue
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ImageView);


/***/ }),

/***/ 3687:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _useClickOutside__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8332);



const VideoPopup_ = ({ close , videoID  })=>{
    let domNode = (0,_useClickOutside__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(()=>{
        close(false);
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "mfp-bg mfp-ready",
                onClick: ()=>close(false)
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "mfp-wrap mfp-close-btn-in mfp-auto-cursor mfp-ready",
                tabIndex: -1,
                style: {
                    overflow: "hidden auto"
                },
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "mfp-container mfp-s-ready mfp-iframe-holder",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "mfp-content",
                            ref: domNode,
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "mfp-iframe-scaler",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        title: "Close (Esc)",
                                        type: "button",
                                        className: "mfp-close",
                                        onClick: ()=>close(),
                                        children: "\xd7"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("iframe", {
                                        src: videoID,
                                        title: "YouTube video player",
                                        frameBorder: "0",
                                        allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                                        allowFullScreen: true
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "mfp-preloader",
                            children: "Loading..."
                        })
                    ]
                })
            })
        ]
    });
};
const VideoPopup = ()=>{
    const { 0: video , 1: setVideo  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: videoValue , 1: setVideoValue  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setTimeout(()=>{
            const a = document.querySelectorAll("a");
            a.forEach((a)=>{
                if (a.href.includes("www.youtube.com") || a.href.includes("vimeo.com") || a.href.includes("soundcloud.com")) {
                    a.addEventListener("click", (e)=>{
                        e.preventDefault();
                        setVideoValue(a.href);
                        setVideo(true);
                        let href = a.href;
                        if (href.includes("youtube")) {
                            setVideoValue(`//www.youtube.com/embed/${href.split("=")[1]}?autoplay=1`);
                        } else if (href.includes("vimeo")) {
                            let splitData = href.split("/");
                            setVideoValue(`//player.vimeo.com/video/${splitData[splitData.length - 1]}?autoplay=1`);
                        } else {
                            setVideoValue(href);
                        }
                    });
                }
            });
        }, 1500);
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
        children: video && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(VideoPopup_, {
            close: ()=>setVideo(false),
            videoID: videoValue
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (VideoPopup);


/***/ }),

/***/ 2700:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_popup_ImageView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(804);
/* harmony import */ var _components_popup_VideoPopup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3687);
/* harmony import */ var _layouts_Preloader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2100);
/* harmony import */ var _utilits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1917);
/* harmony import */ var _components_Redux_provider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(693);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_layouts_Preloader__WEBPACK_IMPORTED_MODULE_5__, _components_Redux_provider__WEBPACK_IMPORTED_MODULE_7__]);
([_layouts_Preloader__WEBPACK_IMPORTED_MODULE_5__, _components_Redux_provider__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const Layout = ({ children  })=>{
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        (0,_utilits__WEBPACK_IMPORTED_MODULE_6__/* .dataImage */ .CC)();
        (0,_utilits__WEBPACK_IMPORTED_MODULE_6__/* .imgToSVG */ .zW)();
        (0,_utilits__WEBPACK_IMPORTED_MODULE_6__/* .wowJsAnimation */ .OE)();
        (0,_utilits__WEBPACK_IMPORTED_MODULE_6__/* .devman_tm_moving_animation */ .JC)();
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Redux_provider__WEBPACK_IMPORTED_MODULE_7__/* .ReduxProviders */ .j, {
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                            href: "https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap",
                            rel: "stylesheet"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                            href: "https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap",
                            rel: "stylesheet"
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layouts_Preloader__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_popup_VideoPopup__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_popup_ImageView__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "devman_tm_all_wrap",
                    "data-magic-cursor": "show",
                    children: children
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9363:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utilits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1917);



const Mouse = ()=>{
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        (0,_utilits__WEBPACK_IMPORTED_MODULE_2__/* .customCursor */ ._h)();
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "mouse-cursor cursor-outer"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "mouse-cursor cursor-inner"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Mouse);


/***/ }),

/***/ 2100:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utilits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1917);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3291);
/* harmony import */ var _components_Redux_Axiose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1459);
/* harmony import */ var _pages_404__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1635);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_redux__WEBPACK_IMPORTED_MODULE_3__, _components_Redux_Axiose__WEBPACK_IMPORTED_MODULE_4__]);
([react_redux__WEBPACK_IMPORTED_MODULE_3__, _components_Redux_Axiose__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const Preloader = ()=>{
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        (0,_utilits__WEBPACK_IMPORTED_MODULE_2__/* .preloader */ .xg)();
        dispatch((0,_components_Redux_Axiose__WEBPACK_IMPORTED_MODULE_4__/* .portfolioData */ .c)());
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        id: "preloader",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "loader_line"
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Preloader);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8332:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

let useClickOutside = (handler)=>{
    let domNode = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        let maybeHandler = (event)=>{
            if (!domNode.current.contains(event.target)) {
                handler();
            }
        };
        document.addEventListener("mousedown", maybeHandler);
        return ()=>{
            document.removeEventListener("mousedown", maybeHandler);
        };
    });
    return domNode;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useClickOutside);


/***/ }),

/***/ 1917:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CC": () => (/* binding */ dataImage),
/* harmony export */   "H8": () => (/* binding */ activeSkillProgress),
/* harmony export */   "JC": () => (/* binding */ devman_tm_moving_animation),
/* harmony export */   "L7": () => (/* binding */ scrollSection),
/* harmony export */   "OE": () => (/* binding */ wowJsAnimation),
/* harmony export */   "SM": () => (/* binding */ scrollTop),
/* harmony export */   "_h": () => (/* binding */ customCursor),
/* harmony export */   "h4": () => (/* binding */ stickyNav),
/* harmony export */   "jU": () => (/* binding */ lineBreak),
/* harmony export */   "xg": () => (/* binding */ preloader),
/* harmony export */   "zW": () => (/* binding */ imgToSVG)
/* harmony export */ });
/* unused harmony exports aTagClick, activeSection */
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6405);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_0__);

const preloader_ = ()=>{
    let isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? true : false;
    let preloader = document.getElementById("preloader");
    if (preloader) {
        if (!isMobile) {
            setTimeout(function() {
                preloader.classList.add("preloaded");
            }, 800);
            setTimeout(function() {
                preloader.remove();
            }, 2000);
        } else {
            preloader.remove();
        }
    }
};
const customCursor = ()=>{
    var myCursor = document.querySelectorAll(".mouse-cursor"), hamburger = document.querySelector(".hamburger"), kura_tm_topbar = document.querySelector(".kura_tm_topbar "), pointer = document.querySelector(".cursor-pointer"), e = document.querySelector(".cursor-inner"), t = document.querySelector(".cursor-outer");
    function mouseEvent(element) {
        react_dom__WEBPACK_IMPORTED_MODULE_0___default().findDOMNode(element).addEventListener("mouseenter", function() {
            e.classList.add("cursor-hover"), t.classList.add("cursor-hover");
        });
        react_dom__WEBPACK_IMPORTED_MODULE_0___default().findDOMNode(element).addEventListener("mouseleave", function() {
            e.classList.remove("cursor-hover"), t.classList.remove("cursor-hover");
        });
    }
    if (myCursor.length) {
        if (document.body) {
            let n, i = 0, o = !1;
            window.onmousemove = function(s) {
                o || (t.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)"), e.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)", n = s.clientY, i = s.clientX;
            }, document.body.addEventListener("mouseenter", // "a,.kura_tm_topbar .trigger, .cursor-pointer",
            function() {
                let a = document.querySelectorAll("a");
                e.classList.add("cursor-inner"), t.classList.add("cursor-outer");
                for(let i = 0; i < a.length; i++){
                    const element = a[i];
                    mouseEvent(element);
                }
                hamburger && mouseEvent(hamburger);
                kura_tm_topbar && mouseEvent(kura_tm_topbar);
                pointer && mouseEvent(pointer);
            }), e.style.visibility = "visible", t.style.visibility = "visible";
        }
    }
};
const preloader = ()=>{
    preloader_();
    setTimeout(()=>{
        document.querySelector("body").classList.add("opened");
    }, 3000);
};
const aTagClick = ()=>{
    const aTag = document.querySelectorAll("[href='#']");
    for(let i = 0; i < aTag.length; i++){
        const a = aTag[i];
        ReactDOM.findDOMNode(a).addEventListener("click", (e)=>{
            e.preventDefault();
        });
    }
};
// Data image
const dataImage = ()=>{
    let d = document.querySelectorAll("[data-img-url");
    for(let i = 0; i < d.length; i++){
        const element = d[i];
        element.style.backgroundImage = `url(${element.getAttribute("data-img-url")})`;
    }
};
const imgToSVG = ()=>{
    document.querySelectorAll("img.svg").forEach((el)=>{
        const imgID = el.getAttribute("id");
        const imgClass = el.getAttribute("class");
        const imgURL = el.getAttribute("src");
        fetch(imgURL).then((response)=>{
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.text();
        }).then((data)=>{
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(data, "text/html");
            let svg = xmlDoc.querySelector("svg");
            if (typeof imgID !== "undefined") {
                svg.setAttribute("id", imgID);
            }
            if (typeof imgClass !== "undefined") {
                svg.setAttribute("class", imgClass + " replaced-svg");
            }
            svg.removeAttribute("xmlns:a");
            if (el.parentNode) {
                el.parentNode.replaceChild(svg, el);
            }
        }).catch((error)=>{
            console.error("Error fetching SVG image:", error);
        });
    });
};
const activeSection = (value)=>{
    const sections = document.querySelectorAll(".edrea_tm_section");
    sections.forEach((section)=>{
        let id = section.getAttribute("id");
        if (id == value) {
            section.className = "edrea_tm_section active wow animated fadeInUp";
        } else {
            section.className = "edrea_tm_section hidden animated";
        }
    });
};
const activeSkillProgress = ()=>{
    const progress_inner = document.querySelectorAll(".skillsInner___"), triggerBottom = window.innerHeight / 5 * 5;
    progress_inner.forEach((box)=>{
        const boxTop = box.getBoundingClientRect().top, boxElement = box.getElementsByClassName("bar"), label = box.getElementsByClassName("label"), number = box.getElementsByClassName("number"), boxItem = boxElement[0], pWidth = box.getAttribute("data-value"), pColor = box.getAttribute("data-color");
        if (boxTop < triggerBottom) {
            boxItem.classList.add("open");
            label[0].classList.add("opened");
            number[0].style.right = `${100 - pWidth}%`;
            boxItem.getElementsByClassName("bar_in")[0].style.width = `${pWidth}%`;
            boxItem.getElementsByClassName("bar_in")[0].style.backgroundColor = pColor;
        } else {
            boxItem.classList.remove("open");
            label[0].classList.remove("opened");
            number[0].style.right = `${120}%`;
        }
    });
};
const scrollSection = ()=>{
    const sections = document.querySelectorAll(".devman_tm_section");
    const navLi = document.querySelectorAll(".anchor_nav li");
    let current = "";
    sections.forEach((section)=>{
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute("id");
        }
    });
    navLi.forEach((li)=>{
        if (current !== null) {
            li.classList.remove("current");
        }
        if (li.getElementsByTagName("a")[0].getAttribute("href") == `#${current}`) {
            li.classList.add("current");
        }
    });
};
const stickyNav = ()=>{
    let offset = window.scrollY;
    const stickys = document.querySelectorAll(".devman_tm_header");
    stickys.forEach((sticky)=>{
        if (sticky) {
            if (offset > 100) {
                sticky.classList.add("animate");
            } else {
                sticky.classList.remove("animate");
            }
        }
    });
};
const scrollTop = ()=>{
    var bar = document.querySelector(".progressbar");
    var line = document.querySelector(".progressbar .line");
    var documentHeight = document.documentElement.scrollHeight;
    var windowHeight = window.innerHeight;
    var winScroll = window.scrollY;
    var value = winScroll / (documentHeight - windowHeight) * 100;
    var position = value;
    if (winScroll > 100) {
        bar.classList.add("animate");
        line.style.height = position + "%";
    } else {
        bar.classList.remove("animate");
    }
};
const wowJsAnimation = ()=>{
    if (false) {}
    new WOW.WOW().init();
};
// Moveing effect
const devman_tm_moving_animation = ()=>{
    var detail = document.querySelectorAll(".moving_effect");
    var offset = 0;
    detail.forEach((element)=>{
        var direction = element.getAttribute("data-direction");
        window.addEventListener("scroll", function() {
            offset = window.scrollY;
            var h = window.innerHeight;
            var i = element.getBoundingClientRect().top + window.scrollY - offset - h;
            if (element.getAttribute("data-reverse") == "yes") {
                i *= -1;
            }
            var x = direction === "x" ? i * 70 / h : 0;
            var y = direction === "x" ? 0 : i * 70 / h;
            if (element.getAttribute("data-reverse") == "yes") {
                i *= -1;
            }
            if (i * -1 < h + 300 && i < 300) {
                element.style.transform = `translate3d(${x}px,${y}px, 0px)`;
            }
        });
    });
};
// linebrack
const lineBreak = (value)=>{
    return {
        __html: value.replace(/\n/g, "<br />")
    };
};


/***/ })

};
;
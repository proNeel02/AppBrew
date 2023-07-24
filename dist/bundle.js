var $c5L0i$reactjsxruntime = require("react/jsx-runtime");
var $c5L0i$react = require("react");
var $c5L0i$reactdomclient = require("react-dom/client");
var $c5L0i$reactrouterdom = require("react-router-dom");
require("bootstrap/dist/css/bootstrap.min.css");
var $c5L0i$reactbootstrap = require("react-bootstrap");
var $c5L0i$reactbootstrapBadge = require("react-bootstrap/Badge");
var $c5L0i$reacticonsai = require("react-icons/ai");

function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}










const $d05f346e4964801c$export$9f3fb09f5e7f4efb = "https://dummyjson.com/products/categories";
const $d05f346e4964801c$export$d56c5d03efcbe49 = "https://dummyjson.com/products";
const $d05f346e4964801c$export$90e1f0bab9dc475c = "https://dummyjson.com/products/category/";



const $f5ab8e9c2fbc09bd$var$Categories = ()=>{
    // using state varible holding all the categories
    // initial it will be null
    const [categoryList, setCategoryList] = (0, $c5L0i$react.useState)(null);
    // we are using use effect to load category list from the server
    (0, $c5L0i$react.useEffect)(()=>{
        loadAllCategories();
    }, []);
    // here we are using using async await to fetch data
    // and to handle err we are using try {} catch(){}
    const loadAllCategories = async ()=>{
        try {
            const response = await fetch((0, $d05f346e4964801c$export$9f3fb09f5e7f4efb));
            const data = await response.json();
            setCategoryList((prevData)=>data);
        } catch (err) {
            console.log(err);
        }
    };
    return /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)((0, $c5L0i$reactbootstrap.Container), {
        className: "text-center",
        children: categoryList?.map((singleCategory, index)=>{
            return /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)((0, $c5L0i$reactbootstrap.Card), {
                className: "shadow my-2",
                style: {
                    cursor: "pointer",
                    textDecoration: "none"
                },
                as: (0, $c5L0i$reactrouterdom.Link),
                to: "/category/" + singleCategory,
                children: /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)((0, $c5L0i$reactbootstrap.Card).Body, {
                    children: /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)("b", {
                        children: singleCategory
                    })
                })
            }, index);
        })
    });
};
var $f5ab8e9c2fbc09bd$export$2e2bcd8739ae039 = $f5ab8e9c2fbc09bd$var$Categories;










const $a08c63313bed52d9$var$SingleCard = (props)=>{
    // desctructuring
    const { thumbnail: thumbnail, title: title, rating: rating, price: price } = props.product;
    return /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)((0, $c5L0i$reactbootstrap.Col), {
        md: 4,
        sm: 6,
        className: "p-2",
        children: /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsxs)((0, $c5L0i$reactbootstrap.Card), {
            className: "border-0 shadow h-100",
            children: [
                /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)((0, $c5L0i$reactbootstrap.Card).Img, {
                    variant: "top",
                    src: thumbnail
                }),
                /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)((0, $c5L0i$reactbootstrap.Card).Body, {
                    children: /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)((0, $c5L0i$reactbootstrap.Card).Title, {
                        style: {
                            fontSize: "15px"
                        },
                        children: title
                    })
                }),
                /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsxs)((0, $c5L0i$reactbootstrap.Row), {
                    children: [
                        /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)((0, $c5L0i$reactbootstrap.Col), {
                            children: /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsxs)((0, ($parcel$interopDefault($c5L0i$reactbootstrapBadge))), {
                                bg: "success",
                                children: [
                                    /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)((0, $c5L0i$reacticonsai.AiOutlineStar), {}),
                                    /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)("span", {
                                        children: rating
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)((0, $c5L0i$reactbootstrap.Col), {
                            children: /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsxs)("h6", {
                                children: [
                                    "Price : ",
                                    price
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)((0, $c5L0i$reactbootstrap.Col), {
                            children: /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)((0, $c5L0i$reactbootstrap.Button), {
                                size: "sm",
                                variant: "warning",
                                children: "Add to cart"
                            })
                        })
                    ]
                })
            ]
        })
    });
};
var $a08c63313bed52d9$export$2e2bcd8739ae039 = $a08c63313bed52d9$var$SingleCard;



const $838bd1925a209773$var$ProductsView = ()=>{
    // state varible use for storing all data
    // initially it will be null
    const [allProducts, setAllProducts] = (0, $c5L0i$react.useState)(null);
    // using use effect hook  to load the data once when the ProductView component is redered
    (0, $c5L0i$react.useEffect)(()=>{
        loadAllProducts();
    }, []);
    const loadAllProducts = async ()=>{
        try {
            const response = await fetch((0, $d05f346e4964801c$export$d56c5d03efcbe49));
            const data = await response.json();
            //   console.log(data);
            setAllProducts((prevProduct)=>data?.products);
        } catch (err) {
            console.log(err);
        }
    };
    return /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsxs)((0, $c5L0i$reactbootstrap.Row), {
        children: [
            /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)("h4", {
                children: "All Products"
            }),
            /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)((0, $c5L0i$reactbootstrap.Col), {
                md: 12,
                children: /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)((0, $c5L0i$reactbootstrap.Row), {
                    className: "text-center",
                    children: allProducts?.map((product)=>{
                        return /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)((0, $a08c63313bed52d9$export$2e2bcd8739ae039), {
                            product: product
                        }, product?.id);
                    })
                })
            })
        ]
    });
};
var $838bd1925a209773$export$2e2bcd8739ae039 = $838bd1925a209773$var$ProductsView;








const $7c60233ed649e509$var$useloadingAllCatProducts = ()=>{
    const [productData, setProductData] = (0, $c5L0i$react.useState)(null);
    const location = (0, $c5L0i$reactrouterdom.useLocation)();
    const category = location.pathname.split("/")[2];
    (0, $c5L0i$react.useEffect)(()=>{
        loadAllSmartPhones();
    }, [
        category
    ]);
    const loadAllSmartPhones = async ()=>{
        try {
            const response = await fetch((0, $d05f346e4964801c$export$90e1f0bab9dc475c) + category);
            const data = await response.json();
            setProductData(()=>data?.products);
        } catch (err) {
            console.log(err);
        }
    };
    return [
        productData,
        category
    ];
};
var $7c60233ed649e509$export$2e2bcd8739ae039 = $7c60233ed649e509$var$useloadingAllCatProducts;


const $fee8bca3d49cbb3a$var$LoadCategory = ()=>{
    const [data, category] = (0, $7c60233ed649e509$export$2e2bcd8739ae039)();
    console.log(data);
    return /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsxs)((0, $c5L0i$reactbootstrap.Row), {
        children: [
            /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)("h4", {
                children: category
            }),
            /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)((0, $c5L0i$reactbootstrap.Col), {
                md: 12,
                children: /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)((0, $c5L0i$reactbootstrap.Row), {
                    className: "text-center",
                    children: data?.map((product)=>{
                        return /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)((0, $a08c63313bed52d9$export$2e2bcd8739ae039), {
                            product: product
                        }, product?.id);
                    })
                })
            })
        ]
    });
};
var $fee8bca3d49cbb3a$export$2e2bcd8739ae039 = $fee8bca3d49cbb3a$var$LoadCategory;


const $da11a1101b2a894a$var$App = ()=>{
    return /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)((0, $c5L0i$reactjsxruntime.Fragment), {
        children: /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)((0, $c5L0i$reactbootstrap.Container), {
            className: "mt-4 text-center ms-0",
            fluid: true,
            children: /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsxs)((0, $c5L0i$reactbootstrap.Row), {
                children: [
                    /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsxs)((0, $c5L0i$reactbootstrap.Col), {
                        md: 3,
                        children: [
                            /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)("h5", {
                                className: "mb-3",
                                children: "All Categories"
                            }),
                            /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)((0, $f5ab8e9c2fbc09bd$export$2e2bcd8739ae039), {})
                        ]
                    }),
                    /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)((0, $c5L0i$reactbootstrap.Col), {
                        md: 9,
                        children: /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)((0, $c5L0i$reactrouterdom.Outlet), {})
                    })
                ]
            })
        })
    });
};
// using routing for Replacing <Outlet /> with corresponding category component
const $da11a1101b2a894a$var$appRouter = (0, $c5L0i$reactrouterdom.createBrowserRouter)([
    {
        path: "/",
        element: /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)($da11a1101b2a894a$var$App, {}),
        children: [
            {
                path: "/",
                element: /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)((0, $838bd1925a209773$export$2e2bcd8739ae039), {})
            },
            {
                path: "/category/:categoryName",
                element: /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)((0, $fee8bca3d49cbb3a$export$2e2bcd8739ae039), {})
            }
        ]
    }
]);
var $da11a1101b2a894a$export$2e2bcd8739ae039 = $da11a1101b2a894a$var$appRouter;



const $43d7963e56408b24$var$root = (0, ($parcel$interopDefault($c5L0i$reactdomclient))).createRoot(document.getElementById("root"));
$43d7963e56408b24$var$root.render(/*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)((0, $c5L0i$reactrouterdom.RouterProvider), {
    router: (0, $da11a1101b2a894a$export$2e2bcd8739ae039)
}));


//# sourceMappingURL=bundle.js.map

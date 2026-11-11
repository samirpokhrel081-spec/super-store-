"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
type Product={id:number;name:string;category:string;price:number;old?:number;emoji:string;desc:string;badge?:string};
const products:Product[]=[
{id:1,name:"Fresh Red Apples",category:"Groceries",price:260,old:320,emoji:"🍎",desc:"Crisp, juicy apples selected for freshness.",badge:"19% OFF"},
{id:2,name:"Organic Whole Milk",category:"Dairy",price:120,emoji:"🥛",desc:"Creamy everyday milk, 1 litre."},
{id:3,name:"Premium Basmati Rice",category:"Groceries",price:890,old:990,emoji:"🍚",desc:"Long-grain aromatic rice, 5 kg.",badge:"BESTSELLER"},
{id:4,name:"Fresh Garden Carrots",category:"Vegetables",price:90,emoji:"🥕",desc:"Locally sourced fresh carrots, 1 kg."},
{id:5,name:"Wireless Headphones",category:"Electronics",price:2499,old:2999,emoji:"🎧",desc:"Comfortable wireless audio for everyday use.",badge:"SALE"},
{id:6,name:"Cotton Hand Towel",category:"Home",price:350,emoji:"🧺",desc:"Soft and absorbent cotton towel."},
{id:7,name:"Dark Chocolate",category:"Snacks",price:180,emoji:"🍫",desc:"Rich cocoa chocolate bar."},
{id:8,name:"Fresh Orange Juice",category:"Beverages",price:210,emoji:"🧃",desc:"Refreshing fruit juice, 1 litre."},
{id:9,name:"Kitchen Storage Set",category:"Home",price:650,emoji:"🍱",desc:"Reusable containers for organized kitchens."},
{id:10,name:"Potato Chips",category:"Snacks",price:75,emoji:"🥔",desc:"Crunchy salted snack pack."},
{id:11,name:"Bluetooth Speaker",category:"Electronics",price:1799,emoji:"🔊",desc:"Portable speaker with clear sound."},
{id:12,name:"Fresh Green Broccoli",category:"Vegetables",price:160,emoji:"🥦",desc:"Fresh green broccoli, approx. 500 g."}
];
const money=(n:number)=>"Rs. "+n.toLocaleString("en-IN");
export default function Home(){
 const [cart,setCart]=useState<Record<number,number>>({});
 const [wish,setWish]=useState<number[]>([]);
 const [category,setCategory]=useState("All");
 const [query,setQuery]=useState("");
 const [sort,setSort]=useState("featured");
 const [showCart,setShowCart]=useState(false);
 const [coupon,setCoupon]=useState("");
 const categories=["All","Groceries","Vegetables","Dairy","Snacks","Beverages","Electronics","Home"];
 const filtered=useMemo(()=>products.filter(p=>(category==="All"||p.category===category)&&(p.name.toLowerCase().includes(query.toLowerCase())||p.category.toLowerCase().includes(query.toLowerCase()))).sort((a,b)=>sort==="low"?a.price-b.price:sort==="high"?b.price-a.price:0),[category,query,sort]);
 const count=Object.values(cart).reduce((a,b)=>a+b,0);
 const subtotal=products.reduce((s,p)=>s+p.price*(cart[p.id]||0),0);
 const add=(id:number)=>setCart(c=>({...c,[id]:(c[id]||0)+1}));
 const change=(id:number,n:number)=>setCart(c=>({...c,[id]:Math.max(0,(c[id]||0)+n)}));
 return <><div className="top">Fresh deals every day · Fast delivery · Secure checkout</div><header className="nav"><div className="shell navin"><Link href="/" className="logo">SUPER<span>STORE</span></Link><div className="search"><span>⌕</span><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search for groceries, electronics and more..."/></div><Link href="/admin" className="navbtn">Admin</Link><button className="navbtn" onClick={()=>setWish([])}>♡ Wishlist ({wish.length})</button><button className="cartpill" onClick={()=>setShowCart(true)}>🛒 Cart ({count})</button></div></header>
 <main className="shell"><section className="hero"><div><div className="eyebrow">Your everyday store</div><h1>Everything you need.<br/>All in one place.</h1><p>Shop quality groceries, home essentials, electronics and more — with great prices and convenient delivery.</p><button className="btn light" onClick={()=>document.getElementById("shop")?.scrollIntoView({behavior:"smooth"})}>Shop now&nbsp; →</button></div><div className="heroart">🛍️</div></section>
 <div className="features"><div className="feature"><span>🚚</span><div><b>Quick delivery</b><small className="muted">Convenient doorstep service</small></div></div><div className="feature"><span>🛡️</span><div><b>Secure checkout</b><small className="muted">Protected payment process</small></div></div><div className="feature"><span>⭐</span><div><b>Quality products</b><small className="muted">Picked with care</small></div></div></div>
 <section id="shop"><div className="sectionhead"><div><h2>Shop by category</h2><div className="muted">Find what you need, faster</div></div></div><div className="cats">{categories.map(c=><button key={c} className={"cat "+(category===c?"active":"")} onClick={()=>setCategory(c)}>{c}</button>)}</div>
 <div className="sectionhead"><div><h2>{category==="All"?"Popular products":category}</h2><div className="muted">{filtered.length} products available</div></div><select aria-label="Sort products" value={sort} onChange={e=>setSort(e.target.value)} style={{padding:10,border:"1px solid #e7ece8",borderRadius:9}}><option value="featured">Featured</option><option value="low">Price: low to high</option><option value="high">Price: high to low</option></select></div>
 <div className="grid">{filtered.map(p=><article className="product" key={p.id}>{p.badge&&<span className="tag">{p.badge}</span>}<button className="heart" aria-label="Add to wishlist" onClick={()=>setWish(w=>w.includes(p.id)?w.filter(x=>x!==p.id):[...w,p.id])}>{wish.includes(p.id)?"❤️":"♡"}</button><div className="pimg">{p.emoji}</div><div className="muted">{p.category}</div><h3>{p.name}</h3><p className="muted">{p.desc}</p><div><span className="price">{money(p.price)}</span>{p.old&&<span className="old">{money(p.old)}</span>}</div><button className="btn add" onClick={()=>add(p.id)}>Add to cart</button></article>)}</div>{filtered.length===0&&<div className="empty">No products found. Try another search.</div>}</section>
 </main><footer className="footer"><div className="shell footgrid"><div><div className="logo" style={{color:"white"}}>SUPER<span>STORE</span></div><p className="muted" style={{color:"#d7e8dc"}}>Your trusted destination for everyday shopping. Quality products, simple shopping.</p></div><div><h3>Customer care</h3><a href="mailto:support@example.com">Contact us</a><a href="#shop">Shop products</a><a href="/checkout">Checkout</a></div><div><h3>Information</h3><a href="#shop">About us</a><a href="#shop">Privacy policy</a><a href="#shop">Returns & refunds</a></div></div><div className="shell muted" style={{color:"#b7d0c0",marginTop:25}}>© {new Date().getFullYear()} Super Store. Demo storefront — replace sample content before launch.</div></footer>
 {showCart&&<div className="modalback" onClick={()=>setShowCart(false)}><aside className="drawer" onClick={e=>e.stopPropagation()}><div className="drawerhead"><h2>Your cart ({count})</h2><button className="close" onClick={()=>setShowCart(false)}>✕</button></div>{count===0?<div className="empty">🛒<h3>Your cart is empty</h3><p>Add something you love.</p></div>:<>{products.filter(p=>cart[p.id]>0).map(p=><div className="cartrow" key={p.id}><div className="cartemoji">{p.emoji}</div><div style={{flex:1}}><b>{p.name}</b><div className="muted">{money(p.price)} each</div><div className="qty"><button onClick={()=>change(p.id,-1)}>−</button>{cart[p.id]}<button onClick={()=>change(p.id,1)}>+</button></div></div><b>{money(p.price*cart[p.id])}</b></div>)}<div className="total"><span>Subtotal</span><span>{money(subtotal)}</span></div><p className="muted">Delivery and applicable taxes are calculated at checkout.</p><Link className="btn" style={{display:"block",textAlign:"center",textDecoration:"none"}} href="/checkout">Proceed to checkout →</Link></>}</aside></div>}</>;
}
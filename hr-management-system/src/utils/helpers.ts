export const formatCurrency=(amount:number)=>new Intl.NumberFormat("en-PK",{style:"currency",currency:"PKR",maximumFractionDigits:0}).format(amount);
export const makeId=(prefix:string)=>`${prefix}-${Date.now().toString().slice(-6)}`;

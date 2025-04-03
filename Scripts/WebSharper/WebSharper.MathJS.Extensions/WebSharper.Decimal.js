import { length, get } from "../WebSharper.StdLib/Microsoft.FSharp.Core.LanguagePrimitives.IntrinsicFunctions.js"
import { InvalidArg, toInt } from "../WebSharper.StdLib/Microsoft.FSharp.Core.Operators.js"
import $StartupCode_Decimal from "./$StartupCode_Decimal.js"
export function CreateDecimalBits(bits){
  return length(bits)===4?CreateDecimal(get(bits, 0), get(bits, 1), get(bits, 2), (get(bits, 3)&-2147483648)!==0, get(bits, 3)>>16&127):InvalidArg("bits", "The length of the bits array is not 4");
}
export function CreateDecimal(lo, mid, hi, isNegative, scale){
  const n=(x) => WSDecimalMath().bignumber(x);
  if(lo===0&&hi===0&&mid===0)return n(0);
  else {
    const a=n(429496729);
    const b=n(10);
    const a_1=WSDecimalMath().multiply(a, b);
    const b_1=n(6);
    const uint_sup=WSDecimalMath().add(a_1, b_1);
    const reinterpret=(x) => {
      if(x>=0)return n(x);
      else {
        const b_4=n(x);
        return WSDecimalMath().add(uint_sup, b_4);
      }
    };
    const quotient=WSDecimalMath().pow(n(10), WSDecimalMath().unaryMinus(n(toInt(scale))));
    const _1=reinterpret(hi);
    const _2=WSDecimalMath().multiply(_1, uint_sup);
    const b_2=reinterpret(mid);
    const _3=WSDecimalMath().add(_2, b_2);
    const _4=WSDecimalMath().multiply(_3, uint_sup);
    const b_3=reinterpret(lo);
    const value=WSDecimalMath().add(_4, b_3);
    const _5=isNegative?n(-1):n(1);
    const _6=WSDecimalMath().multiply(_5, value);
    return WSDecimalMath().multiply(_6, quotient);
  }
}
export function WSDecimalMath(){
  return $StartupCode_Decimal.WSDecimalMath;
}

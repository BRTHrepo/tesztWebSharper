import { create, all } from "mathjs"
import { Lazy } from "../WebSharper.Core.JavaScript/Runtime.js"
let _c=Lazy((_i) => class $StartupCode_Decimal {
  static {
    _c=_i(this);
  }
  static WSDecimalMath;
  static {
    let r;
    this.WSDecimalMath=create(all, (r={},r.number="BigNumber",r.precision=29,r.predictable=true,r.epsilon=1E-60,r));
  }
});
export default _c;

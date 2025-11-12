// 分割代入を使用して、propsオブジェクトからproductNameとstockCountを直接取り出す
const ProductStatus = ({ productName, stockCount }) => {
  // 変数名productNameとstockCountを使用できるようになった
  let statusMessage;

  if (stockCount >= 5) {
    //5個以上
    statusMessage = '在庫あり';
  } else if (stockCount >= 1) {
    //1個以上4個以下
    statusMessage = '残りわずか';
  } else {
    //0個
    statusMessage = '在庫切れ';
  }

  return (
    <p>
      {productName}：{statusMessage}
    </p>
  );
};

export default ProductStatus;

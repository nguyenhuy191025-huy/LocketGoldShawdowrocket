// Locket Gold Mock Script
var obj = JSON.parse($response.body);
obj.subscriber.entitlements["Gold"] = {
  "expires_date": "2099-02-18T07:52:54Z",
  "purchase_date": "2020-02-11T07:52:54Z",
  "product_identifier": "com.locket.Locket.premium.yearly"
};
obj.subscriber.subscriptions["com.locket.Locket.premium.yearly"] = {
  "expires_date": "2099-02-18T07:52:54Z",
  "purchase_date": "2020-02-11T07:52:54Z",
  "period_type": "normal"
};
$done({body: JSON.stringify(obj)});

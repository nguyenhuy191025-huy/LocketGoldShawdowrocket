// deleteHeader.js
if ($request.headers['X-RevenueCat-ETag']) { delete $request.headers['X-RevenueCat-ETag']; }
if ($request.headers['x-revenuecat-etag']) { delete $request.headers['x-revenuecat-etag']; }
$done({headers: $request.headers});

<!DOCTYPE html>

<html>

<head>
    <meta charset=utf-8 />
    <meta name="viewport" content="user-scalable=no, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, minimal-ui">
    <title>GraphQL Playground</title>

    <link rel="stylesheet"
          href="{{\MLL\GraphQLPlayground\DownloadAssetsCommand::cssPath()}}"
    />
    <link rel="shortcut icon"
          href="{{\MLL\GraphQLPlayground\DownloadAssetsCommand::faviconPath()}}"
    />
    <script src="{{\MLL\GraphQLPlayground\DownloadAssetsCommand::jsPath()}}"></script>
    <meta name="csrf-token" content="{{ csrf_token() }}">
</head>

<body>

<div id="root"/>
<script type="text/javascript">
  window.addEventListener('load', function (event) {
    // const loadingWrapper = document.getElementById('loading-wrapper');
    // loadingWrapper.classList.add('fadeOut');
    const root = document.getElementById('root');
    // root.classList.add('playgroundIn');
    GraphQLPlayground.init(root, {
        endpoint: "{{url(config('graphql-playground.endpoint'))}}",
        settings: {
            'request.credentials': 'same-origin',
        },
        headers: {
            'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').content
        }
    })
  })
</script>

</body>
</html>

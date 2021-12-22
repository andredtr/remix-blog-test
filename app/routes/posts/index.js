"use strict";
exports.__esModule = true;
exports.loader = void 0;
var remix_1 = require("remix");
var loader = function () {
    return [
        {
            slug: "my-first-post",
            title: "My First Post"
        },
        {
            slug: "90s-mixtape",
            title: "A Mixtape I Made Just For You"
        },
    ];
};
exports.loader = loader;
function Posts() {
    var posts = (0, remix_1.useLoaderData)();
    var test = abc;
    return (<div>
      <h1>Posts</h1>
      <ul>
        {posts.map(function (post) { return (<li key={post.slug}>
            <remix_1.Link to={post.slug}>{post.title}</remix_1.Link>
          </li>); })}
      </ul>
    </div>);
}
exports["default"] = Posts;

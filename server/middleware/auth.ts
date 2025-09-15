export default defineEventHandler((event) => {
  const token =
    "{{ COOKIE }}";
  if (token) event.node.req.headers["authorization"] = `Bearer ${token}`;
});

/**
 * PingController
 * @description :: Server-side logic that checks if app is alive
 */

export function index(req, res) {
  res.ok(req.allParams(), {message: 'HTTP server is working'});
}

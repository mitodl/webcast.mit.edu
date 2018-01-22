p3_api_key = "";
p3_window_wait = true;
document.writeln('<div id="transcript_310205"></div>');
if (typeof p3_instances == "undefined") p3_instances = {};
if (!p3_instances["closest_player_310205"]){
  p3_instances["closest_player_310205"] = {
    file_id: "310205",
    player_type: "auto",
    api_version: "simple",
    project_id: "12640",
    platform_integration: false  }
}
p3_instances["closest_player_310205"]["transcript"] = {target:"transcript_310205"}
if (typeof p3_is_loading == "undefined" || (!p3_is_loading)) {
  p3_is_loading = true;
  document.writeln('<div id="p3-js-main-root"></div>');
  var e = document.createElement('script');
  e.async = true;
  e.src = "//p3.3playmedia.com/p3.js"
  document.getElementById('p3-js-main-root').appendChild(e);
}
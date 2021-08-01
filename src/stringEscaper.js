export function escapeString(str) {
    str = str.replaceAll("\n", "\\n")
    str = str.replaceAll("\r", "\\r")
    str = str.replaceAll("\t", "\\t")
    str = str.replaceAll("\v", "\\v")
    str = str.replaceAll("'", "\\'")
    str = str.replaceAll("\"", "\\\"")
    str = str.replaceAll("\b", "\\b")
    str = str.replaceAll("\f", "\\f")
    str = str.replaceAll(/\r\n|\n\r|\n|\r/g, "\\n")
    return str
}
export function escapeString(str) {
    str = str.replace("\n", "\\n")
    str = str.replace("\r", "\\r")
    str = str.replace("\t", "\\t")
    str = str.replace("\v", "\\v")
    str = str.replace("'", "\\'")
    str = str.replace("\"", "\\\"")
    str = str.replace("\b", "\\b")
    str = str.replace("\f", "\\f")
    str = str.replace(/\r\n|\n\r|\n|\r/g, "\\n")
    return str
}
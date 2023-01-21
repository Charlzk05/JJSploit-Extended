function lua(range) {
    return [
        {
            label: "basic",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "basic"
        },
        {
            label: "_G",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "_G"
        },
        {
            label: "_VERSION",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "_VERSION"
        },
        {
            label: "assert",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "assert"
        },
        {
            label: "collectgarbage",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "collectgarbage"
        },
        {
            label: "dofile",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "dofile"
        },
        {
            label: "error",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "error"
        },
        {
            label: "getfenv",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "getfenv"
        },
        {
            label: "getmetatable",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "getmetatable"
        },
        {
            label: "ipairs",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "ipairs"
        },
        {
            label: "load",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "load"
        },
        {
            label: "loadfile",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "loadfile"
        },
        {
            label: "loadstring",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "loadstring"
        },
        {
            label: "module",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "module"
        },
        {
            label: "next",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "next"
        },
        {
            label: "pairs",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "pairs"
        },
        {
            label: "pcall",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "pcall"
        },
        {
            label: "print",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "print"
        },
        {
            label: "rawequal",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "rawequal"
        },
        {
            label: "rawget",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "rawget"
        },
        {
            label: "rawset",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "rawset"
        },
        {
            label: "require",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "require"
        },
        {
            label: "select",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "select"
        },
        {
            label: "setfenv",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "setfenv"
        },
        {
            label: "setmetatable",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "setmetatable"
        },
        {
            label: "tonumber",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "tonumber"
        },
        {
            label: "tostring",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "tostring"
        },
        {
            label: "type",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "type"
        },
        {
            label: "unpack",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "unpack"
        },
        {
            label: "xpcall",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "xpcall"
        },
        {
            label: "coroutine",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "coroutine"
        },
        {
            label: "coroutine.create",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "coroutine.create"
        },
        {
            label: "coroutine.resume",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "coroutine.resume"
        },
        {
            label: "coroutine.running",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "coroutine.running"
        },
        {
            label: "coroutine.status",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "coroutine.status"
        },
        {
            label: "coroutine.wrap",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "coroutine.wrap"
        },
        {
            label: "coroutine.yield",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "coroutine.yield"
        },
        {
            label: "debug",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "debug"
        },
        {
            label: "debug.debug",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "debug.debug"
        },
        {
            label: "debug.getfenv",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "debug.getfenv"
        },
        {
            label: "debug.gethook",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "debug.gethook"
        },
        {
            label: "debug.getinfo",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "debug.getinfo"
        },
        {
            label: "debug.getlocal",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "debug.getlocal"
        },
        {
            label: "debug.getmetatable",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "debug.getmetatable"
        },
        {
            label: "debug.getregistry",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "debug.getregistry"
        },
        {
            label: "debug.getupvalue",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "debug.getupvalue"
        },
        {
            label: "debug.setfenv",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "debug.setfenv"
        },
        {
            label: "debug.sethook",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "debug.sethook"
        },
        {
            label: "debug.setlocal",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "debug.setlocal"
        },
        {
            label: "debug.setmetatable",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "debug.setmetatable"
        },
        {
            label: "debug.setupvalue",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "debug.setupvalue"
        },
        {
            label: "debug.traceback",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "debug.traceback"
        },
        {
            label: "io",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "io"
        },
        {
            label: "io.close",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "io.close"
        },
        {
            label: "io.flush",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "io.flush"
        },
        {
            label: "io.input",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "io.input"
        },
        {
            label: "io.lines",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "io.lines"
        },
        {
            label: "io.open",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "io.open"
        },
        {
            label: "io.output",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "io.output"
        },
        {
            label: "io.popen",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "io.popen"
        },
        {
            label: "io.read",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "io.read"
        },
        {
            label: "io.stderr",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "io.stderr"
        },
        {
            label: "io.stdin",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "io.stdin"
        },
        {
            label: "io.stdout",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "io.stdout"
        },
        {
            label: "io.tmpfile",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "io.tmpfile"
        },
        {
            label: "io.type",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "io.type"
        },
        {
            label: "io.write",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "io.write"
        },
        {
            label: "file:close",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "file:close"
        },
        {
            label: "file:flush",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "file:flush"
        },
        {
            label: "file:lines",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "file:lines"
        },
        {
            label: "file:read",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "file:read"
        },
        {
            label: "file:seek",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "file:seek"
        },
        {
            label: "file:setvbuf",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "file:setvbuf"
        },
        {
            label: "file:write",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "file:write"
        },
        {
            label: "math",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "math"
        },
        {
            label: "math.abs",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "math.abs"
        },
        {
            label: "math.acos",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "math.acos"
        },
        {
            label: "math.asin",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "math.asin"
        },
        {
            label: "math.atan",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "math.atan"
        },
        {
            label: "math.atan2",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "math.atan2"
        },
        {
            label: "math.ceil",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "math.ceil"
        },
        {
            label: "math.cos",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "math.cos"
        },
        {
            label: "math.cosh",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "math.cosh"
        },
        {
            label: "math.deg",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "math.deg"
        },
        {
            label: "math.exp",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "math.exp"
        },
        {
            label: "math.floor",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "math.floor"
        },
        {
            label: "math.fmod",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "math.fmod"
        },
        {
            label: "math.frexp",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "math.frexp"
        },
        {
            label: "math.huge",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "math.huge"
        },
        {
            label: "math.ldexp",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "math.ldexp"
        },
        {
            label: "math.log",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "math.log"
        },
        {
            label: "math.log10",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "math.log10"
        },
        {
            label: "math.max",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "math.max"
        },
        {
            label: "math.min",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "math.min"
        },
        {
            label: "math.modf",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "math.modf"
        },
        {
            label: "math.pi",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "math.pi"
        },
        {
            label: "math.pow",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "math.pow"
        },
        {
            label: "math.rad",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "math.rad"
        },
        {
            label: "math.random",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "math.random"
        },
        {
            label: "math.randomseed",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "math.randomseed"
        },
        {
            label: "math.sin",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "math.sin"
        },
        {
            label: "math.sinh",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "math.sinh"
        },
        {
            label: "math.sqrt",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "math.sqrt"
        },
        {
            label: "math.tan",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "math.tan"
        },
        {
            label: "math.tanh",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "math.tanh"
        },
        {
            label: "os",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "os"
        },
        {
            label: "os.clock",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "os.clock"
        },
        {
            label: "os.date",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "os.date"
        },
        {
            label: "os.difftime",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "os.difftime"
        },
        {
            label: "os.execute",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "os.execute"
        },
        {
            label: "os.exit",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "os.exit"
        },
        {
            label: "os.getenv",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "os.getenv"
        },
        {
            label: "os.remove",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "os.remove"
        },
        {
            label: "os.rename",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "os.rename"
        },
        {
            label: "os.setlocale",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "os.setlocale"
        },
        {
            label: "os.time",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "os.time"
        },
        {
            label: "os.tmpname",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "os.tmpname"
        },
        {
            label: "package",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "package"
        },
        {
            label: "package.cpath",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "package.cpath"
        },
        {
            label: "package.loaded",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "package.loaded"
        },
        {
            label: "package.loaders",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "package.loaders"
        },
        {
            label: "package.loadlib",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "package.loadlib"
        },
        {
            label: "package.path",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "package.path"
        },
        {
            label: "package.preload",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "package.preload"
        },
        {
            label: "package.seeall",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "package.seeall"
        },
        {
            label: "string",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "string"
        },
        {
            label: "string.byte",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "string.byte"
        },
        {
            label: "string.char",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "string.char"
        },
        {
            label: "string.dump",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "string.dump"
        },
        {
            label: "string.find",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "string.find"
        },
        {
            label: "string.format",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "string.format"
        },
        {
            label: "string.gmatch",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "string.gmatch"
        },
        {
            label: "string.gsub",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "string.gsub"
        },
        {
            label: "string.len",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "string.len"
        },
        {
            label: "string.lower",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "string.lower"
        },
        {
            label: "string.match",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "string.match"
        },
        {
            label: "string.rep",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "string.rep"
        },
        {
            label: "string.reverse",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "string.reverse"
        },
        {
            label: "string.sub",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "string.sub"
        },
        {
            label: "string.upper",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "string.upper"
        },
        {
            label: "table",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "table"
        },
        {
            label: "table.concat",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "table.concat"
        },
        {
            label: "table.insert",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "table.insert"
        },
        {
            label: "table.maxn",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "table.maxn"
        },
        {
            label: "table.remove",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "table.remove"
        },
        {
            label: "table.sort",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "table.sort"
        },
        {
            label: "LUA_CPATH",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "LUA_CPATH"
        },
        {
            label: "LUA_INIT",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "LUA_INIT"
        },
        {
            label: "LUA_PATH",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "LUA_PATH"
        },
        {
            label: "lua_Alloc",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "lua_Alloc"
        },
        {
            label: "lua_CFunction",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "lua_CFunction"
        },
        {
            label: "lua_Debug",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "lua_Debug"
        },
        {
            label: "lua_Hook",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "lua_Hook"
        },
        {
            label: "lua_Integer",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "lua_Integer"
        },
        {
            label: "lua_Number",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "lua_Number"
        },
        {
            label: "lua_Reader",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "lua_Reader"
        },
        {
            label: "lua_State",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "lua_State"
        },
        {
            label: "lua_Writer",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "lua_Writer"
        },
        {
            label: "lua_atpanic",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "lua_atpanic"
        },
        {
            label: "lua_call",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "lua_call"
        },
        {
            label: "lua_checkstack",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "lua_checkstack"
        },
        {
            label: "lua_close",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "lua_close"
        },
        {
            label: "lua_concat",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "lua_concat"
        },
        {
            label: "lua_cpcall",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "lua_cpcall"
        },
        {
            label: "lua_createtable",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "lua_createtable"
        },
        {
            label: "lua_dump",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "lua_dump"
        },
        {
            label: "lua_equal",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "lua_equal"
        },
        {
            label: "lua_error",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "lua_error"
        },
        {
            label: "lua_gc",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "lua_gc"
        },
        {
            label: "lua_getallocf",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "lua_getallocf"
        },
        {
            label: "lua_getfenv",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "lua_getfenv"
        },
        {
            label: "lua_getfield",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "lua_getfield"
        },
        {
            label: "lua_getglobal",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "lua_getglobal"
        },
        {
            label: "lua_gethook",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "lua_gethook"
        },
        {
            label: "lua_gethookcount",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "lua_gethookcount"
        },
        {
            label: "lua_gethookmask",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "lua_gethookmask"
        },
        {
            label: "lua_getinfo",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "lua_getinfo"
        },
        {
            label: "lua_getlocal",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "lua_getlocal"
        },
        {
            label: "lua_getmetatable",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "lua_getmetatable"
        },
        {
            label: "lua_getstack",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "lua_getstack"
        },
        {
            label: "lua_gettable",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "lua_gettable"
        },
        {
            label: "lua_gettop",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "lua_gettop"
        },
        {
            label: "lua_getupvalue",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "lua_getupvalue"
        },
        {
            label: "lua_insert",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "lua_insert"
        },
        {
            label: "lua_isboolean",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "lua_isboolean"
        },
        {
            label: "lua_iscfunction",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "lua_iscfunction"
        },
        {
            label: "lua_isfunction",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "lua_isfunction"
        },
        {
            label: "lua_islightuserdata",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "lua_islightuserdata"
        },
        {
            label: "lua_isnil",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "lua_isnil"
        },
        {
            label: "lua_isnone",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "lua_isnone"
        },
        {
            label: "lua_isnoneornil",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "lua_isnoneornil"
        },
        {
            label: "lua_isnumber",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "lua_isnumber"
        },
        {
            label: "lua_isstring",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "lua_isstring"
        },
        {
            label: "lua_istable",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "lua_istable"
        },
        {
            label: "lua_isthread",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "lua_isthread"
        },
        {
            label: "lua_isuserdata",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "lua_isuserdata"
        },
        {
            label: "lua_lessthan",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "lua_lessthan"
        },
        {
            label: "lua_load",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "lua_load"
        },
        {
            label: "lua_newstate",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "lua_newstate"
        },
        {
            label: "lua_newtable",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "lua_newtable"
        },
        {
            label: "lua_newthread",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "lua_newthread"
        },
        {
            label: "lua_newuserdata",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "lua_newuserdata"
        },
        {
            label: "lua_next",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "lua_next"
        },
        {
            label: "lua_objlen",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "lua_objlen"
        },
        {
            label: "lua_pcall",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "lua_pcall"
        },
        {
            label: "lua_pop",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "lua_pop"
        },
        {
            label: "lua_pushboolean",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "lua_pushboolean"
        },
        {
            label: "lua_pushcclosure",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "lua_pushcclosure"
        },
        {
            label: "lua_pushcfunction",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "lua_pushcfunction"
        },
        {
            label: "lua_pushfstring",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "lua_pushfstring"
        },
        {
            label: "lua_pushinteger",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "lua_pushinteger"
        },
        {
            label: "lua_pushlightuserdata",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "lua_pushlightuserdata"
        },
        {
            label: "lua_pushliteral",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "lua_pushliteral"
        },
        {
            label: "lua_pushlstring",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "lua_pushlstring"
        },
        {
            label: "lua_pushnil",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "lua_pushnil"
        },
        {
            label: "lua_pushnumber",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "lua_pushnumber"
        },
        {
            label: "lua_pushstring",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "lua_pushstring"
        },
        {
            label: "lua_pushthread",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "lua_pushthread"
        },
        {
            label: "lua_pushvalue",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "lua_pushvalue"
        },
        {
            label: "lua_pushvfstring",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "lua_pushvfstring"
        },
        {
            label: "lua_rawequal",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "lua_rawequal"
        },
        {
            label: "lua_rawget",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "lua_rawget"
        },
        {
            label: "lua_rawgeti",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "lua_rawgeti"
        },
        {
            label: "lua_rawset",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "lua_rawset"
        },
        {
            label: "lua_rawseti",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "lua_rawseti"
        },
        {
            label: "lua_register",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "lua_register"
        },
        {
            label: "lua_remove",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "lua_remove"
        },
        {
            label: "lua_replace",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "lua_replace"
        },
        {
            label: "lua_resume",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "lua_resume"
        },
        {
            label: "lua_setallocf",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "lua_setallocf"
        },
        {
            label: "lua_setfenv",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "lua_setfenv"
        },
        {
            label: "lua_setfield",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "lua_setfield"
        },
        {
            label: "lua_setglobal",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "lua_setglobal"
        },
        {
            label: "lua_sethook",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "lua_sethook"
        },
        {
            label: "lua_setlocal",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "lua_setlocal"
        },
        {
            label: "lua_setmetatable",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "lua_setmetatable"
        },
        {
            label: "lua_settable",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "lua_settable"
        },
        {
            label: "lua_settop",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "lua_settop"
        },
        {
            label: "lua_setupvalue",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "lua_setupvalue"
        },
        {
            label: "lua_status",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "lua_status"
        },
        {
            label: "lua_toboolean",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "lua_toboolean"
        },
        {
            label: "lua_tocfunction",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "lua_tocfunction"
        },
        {
            label: "lua_tointeger",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "lua_tointeger"
        },
        {
            label: "lua_tolstring",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "lua_tolstring"
        },
        {
            label: "lua_tonumber",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "lua_tonumber"
        },
        {
            label: "lua_topointer",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "lua_topointer"
        },
        {
            label: "lua_tostring",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "lua_tostring"
        },
        {
            label: "lua_tothread",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "lua_tothread"
        },
        {
            label: "lua_touserdata",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "lua_touserdata"
        },
        {
            label: "lua_type",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "lua_type"
        },
        {
            label: "lua_typename",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "lua_typename"
        },
        {
            label: "lua_upvalueindex",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "lua_upvalueindex"
        },
        {
            label: "lua_xmove",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "lua_xmove"
        },
        {
            label: "lua_yield",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "lua_yield"
        },
        {
            label: "luaL_Buffer",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "luaL_Buffer"
        },
        {
            label: "luaL_Reg",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "luaL_Reg"
        },
        {
            label: "luaL_addchar",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "luaL_addchar"
        },
        {
            label: "luaL_addlstring",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "luaL_addlstring"
        },
        {
            label: "luaL_addsize",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "luaL_addsize"
        },
        {
            label: "luaL_addstring",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "luaL_addstring"
        },
        {
            label: "luaL_addvalue",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "luaL_addvalue"
        },
        {
            label: "luaL_argcheck",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "luaL_argcheck"
        },
        {
            label: "luaL_argerror",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "luaL_argerror"
        },
        {
            label: "luaL_buffinit",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "luaL_buffinit"
        },
        {
            label: "luaL_callmeta",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "luaL_callmeta"
        },
        {
            label: "luaL_checkany",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "luaL_checkany"
        },
        {
            label: "luaL_checkint",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "luaL_checkint"
        },
        {
            label: "luaL_checkinteger",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "luaL_checkinteger"
        },
        {
            label: "luaL_checklong",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "luaL_checklong"
        },
        {
            label: "luaL_checklstring",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "luaL_checklstring"
        },
        {
            label: "luaL_checknumber",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "luaL_checknumber"
        },
        {
            label: "luaL_checkoption",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "luaL_checkoption"
        },
        {
            label: "luaL_checkstack",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "luaL_checkstack"
        },
        {
            label: "luaL_checkstring",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "luaL_checkstring"
        },
        {
            label: "luaL_checktype",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "luaL_checktype"
        },
        {
            label: "luaL_checkudata",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "luaL_checkudata"
        },
        {
            label: "luaL_dofile",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "luaL_dofile"
        },
        {
            label: "luaL_dostring",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "luaL_dostring"
        },
        {
            label: "luaL_error",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "luaL_error"
        },
        {
            label: "luaL_getmetafield",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "luaL_getmetafield"
        },
        {
            label: "luaL_getmetatable",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "luaL_getmetatable"
        },
        {
            label: "luaL_gsub",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "luaL_gsub"
        },
        {
            label: "luaL_loadbuffer",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "luaL_loadbuffer"
        },
        {
            label: "luaL_loadfile",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "luaL_loadfile"
        },
        {
            label: "luaL_loadstring",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "luaL_loadstring"
        },
        {
            label: "luaL_newmetatable",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "luaL_newmetatable"
        },
        {
            label: "luaL_newstate",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "luaL_newstate"
        },
        {
            label: "luaL_openlibs",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "luaL_openlibs"
        },
        {
            label: "luaL_optint",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "luaL_optint"
        },
        {
            label: "luaL_optinteger",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "luaL_optinteger"
        },
        {
            label: "luaL_optlong",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "luaL_optlong"
        },
        {
            label: "luaL_optlstring",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "luaL_optlstring"
        },
        {
            label: "luaL_optnumber",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "luaL_optnumber"
        },
        {
            label: "luaL_optstring",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "luaL_optstring"
        },
        {
            label: "luaL_prepbuffer",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "luaL_prepbuffer"
        },
        {
            label: "luaL_pushresult",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "luaL_pushresult"
        },
        {
            label: "luaL_ref",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "luaL_ref"
        },
        {
            label: "luaL_register",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "luaL_register"
        },
        {
            label: "luaL_typename",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "luaL_typename"
        },
        {
            label: "luaL_typerror",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "luaL_typerror"
        },
        {
            label: "luaL_unref",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "luaL_unref"
        },
        {
            label: "luaL_where",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "luaL_where"
        },
        {
            label: "LUA_ENVIRONINDEX",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "LUA_ENVIRONINDEX"
        },
        {
            label: "LUA_ERRERR",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "LUA_ERRERR"
        },
        {
            label: "LUA_ERRFILE",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "LUA_ERRFILE"
        },
        {
            label: "LUA_ERRMEM",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "LUA_ERRMEM"
        },
        {
            label: "LUA_ERRRUN",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "LUA_ERRRUN"
        },
        {
            label: "LUA_ERRSYNTAX",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "LUA_ERRSYNTAX"
        },
        {
            label: "LUA_GLOBALSINDEX",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "LUA_GLOBALSINDEX"
        },
        {
            label: "LUA_HOOKCOUNT",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "LUA_HOOKCOUNT"
        },
        {
            label: "LUA_HOOKLINE",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "LUA_HOOKLINE"
        },
        {
            label: "LUA_HOOKRET",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "LUA_HOOKRET"
        },
        {
            label: "LUA_MASKCALL",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "LUA_MASKCALL"
        },
        {
            label: "LUA_MASKCOUNT",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "LUA_MASKCOUNT"
        },
        {
            label: "LUA_MASKLINE",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "LUA_MASKLINE"
        },
        {
            label: "LUA_MASKRET",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "LUA_MASKRET"
        },
        {
            label: "LUA_MINSTACK",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "LUA_MINSTACK"
        },
        {
            label: "LUA_MULTRET",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "LUA_MULTRET"
        },
        {
            label: "LUA_NOREF",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "LUA_NOREF"
        },
        {
            label: "LUA_REFNIL",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "LUA_REFNIL"
        },
        {
            label: "LUA_REGISTRYINDEX",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "LUA_REGISTRYINDEX"
        },
        {
            label: "LUA_YIELD",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "LUA_YIELD"
        },
        {
            label: "and",
            kind: monaco.languages.CompletionItemKind.Keyword,
            insertText: "and"
        },
        {
            label: "break",
            kind: monaco.languages.CompletionItemKind.Keyword,
            insertText: "break"
        },
        {
            label: "do",
            kind: monaco.languages.CompletionItemKind.Keyword,
            insertText: "do"
        },
        {
            label: "else",
            kind: monaco.languages.CompletionItemKind.Keyword,
            insertText: "else"
        },
        {
            label: "elseif",
            kind: monaco.languages.CompletionItemKind.Keyword,
            insertText: "elseif"
        },
        {
            label: "end",
            kind: monaco.languages.CompletionItemKind.Keyword,
            insertText: "end"
        },
        {
            label: "false",
            kind: monaco.languages.CompletionItemKind.Keyword,
            insertText: "false"
        },
        {
            label: "for",
            kind: monaco.languages.CompletionItemKind.Keyword,
            insertText: "for"
        },
        {
            label: "function",
            kind: monaco.languages.CompletionItemKind.Keyword,
            insertText: "function"
        },
        {
            label: "if",
            kind: monaco.languages.CompletionItemKind.Keyword,
            insertText: "if"
        },
        {
            label: "in",
            kind: monaco.languages.CompletionItemKind.Keyword,
            insertText: "in"
        },
        {
            label: "local",
            kind: monaco.languages.CompletionItemKind.Keyword,
            insertText: "local"
        },
        {
            label: "nil",
            kind: monaco.languages.CompletionItemKind.Keyword,
            insertText: "nil"
        },
        {
            label: "not",
            kind: monaco.languages.CompletionItemKind.Keyword,
            insertText: "not"
        },
        {
            label: "or",
            kind: monaco.languages.CompletionItemKind.Keyword,
            insertText: "or"
        },
        {
            label: "repeat",
            kind: monaco.languages.CompletionItemKind.Keyword,
            insertText: "repeat"
        },
        {
            label: "return",
            kind: monaco.languages.CompletionItemKind.Keyword,
            insertText: "return"
        },
        {
            label: "then",
            kind: monaco.languages.CompletionItemKind.Keyword,
            insertText: "then"
        },
        {
            label: "true",
            kind: monaco.languages.CompletionItemKind.Keyword,
            insertText: "true"
        },
        {
            label: "until",
            kind: monaco.languages.CompletionItemKind.Keyword,
            insertText: "until"
        },
        {
            label: "while",
            kind: monaco.languages.CompletionItemKind.Keyword,
            insertText: "while"
        }
    ];
}
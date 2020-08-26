export function noAccent(str) {
    let newStr = ''
    for (let i = 0; i < str.toLowerCase().length; i++) {
        switch(str[i]) {
            case 'a': case 'ă': case 'â':
            case 'à': case 'ằ': case 'ầ':
            case 'á': case 'ắ': case 'ấ':
            case 'ả': case 'ẳ': case 'ẩ':
            case 'ã': case 'ẵ': case 'ẫ':
            case 'ạ': case 'ặ': case 'ậ':
                newStr += 'a'
                break
            case 'o': case 'ô': case 'ơ':
            case 'ò': case 'ồ': case 'ờ':
            case 'ó': case 'ố': case 'ớ':
            case 'ỏ': case 'ổ': case 'ở':
            case 'õ': case 'ỗ': case 'ỡ':
            case 'ọ': case 'ộ': case 'ợ':
                newStr += 'o'
                break
            case 'u': case 'ư':
            case 'ù': case 'ừ':
            case 'ú': case 'ứ':
            case 'ủ': case 'ử':
            case 'ũ': case 'ữ':
            case 'ụ': case 'ự':
                newStr += 'u'
                break
            case 'e': case 'ê':
            case 'è': case 'ề':
            case 'é': case 'ế':
            case 'ẻ': case 'ể':
            case 'ẽ': case 'ễ':
            case 'ẹ': case 'ệ':
                newStr += 'e'
                break
            default:
                newStr += str[i]
        }
    }
    return newStr;
}

export function findSubstring(str, substr) {
    return noAccent(str).toLowerCase().indexOf(noAccent(substr).toLowerCase()) != -1;
}

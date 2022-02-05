package main

func replaceSpaces(str string, length int) string {
	// return url.PathEscape(S[:length])
	j := len(str)
	b := []byte(str)
	for i := length - 1; i >= 0; i-- {
		if b[i] == ' ' {
			b[j-1] = '0'
			b[j-2] = '2'
			b[j-3] = '%'
			j -= 3
		} else {
			b[j-1] = b[i]
			j--
		}
	}
	return string(b[j:])
}

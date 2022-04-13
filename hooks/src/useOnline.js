
/*
function useOnline () {
    const [online, setOnine] = useState(navigator.online);

    function onlineHandler() {
        setOnine(true)
    }

    function offlineHamdler() {
        setOnine(false)
    }
    useEffect(

    )
}*/

function useOnline (isOnline) {
    if (isOnline) {
        return true;
    }
    else {
        return false;
    }
}

export default useOnline;
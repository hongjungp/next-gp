interface ResponseEntity<T>{
    seq?: number,
    data? : T[],
    result: Result,
}
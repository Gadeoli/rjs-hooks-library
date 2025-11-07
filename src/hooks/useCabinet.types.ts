export interface useCabinetProps {
    (n: number, rootInitial?: boolean): {
        drawers: Array<boolean>,
        reset: () => Array<boolean>,
        push: (n: number) => Array<boolean>,
        pushNested: (n: number) => Array<boolean>,
        pull: () => Array<boolean>,
        pullNested: (n: number) => Array<boolean>,
        reverse: (n: number) => Array<boolean>,
        manual: (n: Array<boolean>) => Array<boolean>
    }
}
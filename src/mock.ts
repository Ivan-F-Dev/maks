export const mock:TaskI[] = [
    {
        name: 'task 1',
        id: '1',
        layerIndex: '1',
        childs: [
            {
                name: 'task 1.1',
                id: '1.1',
                layerIndex: '2',
                childs: [
                    {
                        name: 'task 1.1.1',
                        id: '1.1.1',
                        layerIndex: '3',
                        childs: []
                    },
                    {
                        name: 'task 1.1.2',
                        id: '1.1.2',
                        layerIndex: '3',
                        childs: []
                    },
                    {
                        name: 'task 1.1.3',
                        id: '1.1.3',
                        layerIndex: '3',
                        childs: [
                            {
                                name: 'task 1.1.3.1',
                                id: '1.1.3.1',
                                layerIndex: '4',
                                childs: []
                            },
                            {
                                name: 'task 1.1.3.2',
                                id: '1.1.3.2',
                                layerIndex: '4',
                                childs: []
                            }
                        ]
                    },
                ]
            },
            {
                name: 'task 1.2',
                id: '1.2',
                layerIndex: '2',
                childs: []
            }
        ]
    },
    {
        name: 'task 2',
        id: '2',
        layerIndex: '1',
        childs: []
    },
    {
        name: 'task 3',
        id: '3',
        layerIndex: '1',
        childs: [
            {
                name: 'task 3.1',
                id: '3.1',
                layerIndex: '2',
                childs: []
            },
            {
                name: 'task 3.2',
                id: '3.2',
                layerIndex: '2',
                childs: [
                    {
                        name: 'task 3.2.1',
                        id: '3.2.1',
                        layerIndex: '3',
                        childs: []
                    },
                    {
                        name: 'task 3.2.2',
                        id: '3.2.2',
                        layerIndex: '3',
                        childs: []
                    },
                ]
            },
            {
                name: 'task 3.3',
                id: '3.3',
                layerIndex: '2',
                childs: []
            },
        ]
    },
]

export interface TaskI {
    name: string
    id: string
    layerIndex: string
    childs: TaskI[]
}
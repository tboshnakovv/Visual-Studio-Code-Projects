import { isSymmetric } from './checkForSummetry.js'
import { expect, should } from 'chai'

describe('isSymmetric', () => {
    it('if given an empty array should return true', () => {

        // Arrange
        const inputArray = []

        // Act
        const result = isSymmetric(inputArray)

        // Assert
        expect(result).to.be.true
    })

    it('should return false if a non array value is given', () => {
        // Arrange
        // Act
        const nanResult = isSymmetric(NaN)
        const undefinedResult = isSymmetric(undefined)
        const objectResult = isSymmetric({})
        const nullResult = isSymmetric(null)

        // Assert
        expect(nanResult).to.be.false
        expect(undefinedResult).to.be.false
        expect(objectResult).to.be.false
        expect(nullResult).to.be.false
    })

    it('should return false if a non-symmetric array is given', () => {
        // Arrange
        const nonSymmetricArray = [1, 2, 3, 4]

        // Act
        const result = isSymmetric(nonSymmetricArray)
        // Assert
        expect(result).to.be.false
    })

    it('should return true if a symmetric array is given', () => {
        // Arrange
        const symmetricArray = [3, 2, 1, 2, 3]
        // Act

        const result = isSymmetric(symmetricArray)
        // Assert
        expect(result).to.be.true
    })

    it('should return true for symmetric array with 1 value', () => {
        // Arrange
        const symmetricArray = [3]
        // Act

        const result = isSymmetric(symmetricArray)
        // Assert
        expect(result).to.be.true
    })

    it('should return false for symmetric looklike values', () => {
        // Arrange
        const symmetricArray = ['1', '2', '3', 2, 1]
        // Act

        const result = isSymmetric(symmetricArray)
        // Assert
        expect(result).to.be.false
    })

})
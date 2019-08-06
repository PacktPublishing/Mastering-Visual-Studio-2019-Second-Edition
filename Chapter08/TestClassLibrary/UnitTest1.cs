using System;
using ClassLibrary;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace TestClassLibrary
{
    [TestClass]
    public class UnitTest1
    {
        [TestMethod]
        public void TestTwoInstanceOfPersonInstancesAreNotEqual()
        {
            var person1 = new Person();
            var person2 = new Person();

            var status = person1 == person2;

            Assert.IsFalse(status);
        }

        [TestMethod]
        public void TestAssigningOneObjectToAnotherReferencesSameObject()
        {
            var person1 = new Person();
            var person2 = person1;

            var status = person1 == person2;

            Assert.IsTrue(status);
        }

        [TestMethod]
        public void TestCloningOneObjectReturnsDifferentInstance()
        {
            var person1 = new Person();
            var person2 = (Person)person1.Clone();

            var status = person1 == person2;

            Assert.IsFalse(status);
        }

        [TestMethod]
        public void TestCloningPopulatesThePropertiesProperly()
        {
            var person1 = new Person();
            var person2 = (Person)person1.Clone();

            var status = person1 == person2;

            Assert.IsFalse(status);
            Assert.AreEqual(person1.ID, person2.ID);
            Assert.AreEqual(person1.Name, person2.Name);
            Assert.AreEqual(person1.Address, person2.Address);
        }
    }
}
